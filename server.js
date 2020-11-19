const {ApiPromise, WsProvider} = require('@polkadot/api');

// Connecting to Polkadex node
const wsProvider = new WsProvider('ws://localhost:9944');

// Testnet Config Parameters
const tradingPairID = "0xf28a3c76161b8d5723b6b8b092695f418037c747faa2ad8bc33d8871f720aac9";
const factor = 1000000000000000000;
const GenesisTime = Date.parse('09 Nov 2020 00:00:00 GMT');
const blockPeriod = 2;

let graph_data = [];
async function connect_blockchain() {
    const api = await ApiPromise.create({
        provider: wsProvider,
        types: {
            "OrderType": {
                "_enum": [
                    "BidLimit",
                    "BidMarket",
                    "AskLimit",
                    "AskMarket"
                ]
            },
            "Order": {
                "id": "Hash",
                "trading_pair": "Hash",
                "trader": "AccountId",
                "price": "FixedU128",
                "quantity": "FixedU128",
                "order_type": "OrderType"
            },
            "MarketData": {
                "low": "FixedU128",
                "high": "FixedU128",
                "volume": "FixedU128",
                "open": "FixedU128",
                "close": "FixedU128"

            },
            "LinkedPriceLevel": {
                "next": "Option<FixedU128>",
                "prev": "Option<FixedU128>",
                "orders": "Vec<Order>"
            },
            "Orderbook": {
                "trading_pair": "Hash",
                "base_asset_id": "u32",
                "quote_asset_id": "u32",
                "best_bid_price": "FixedU128",
                "best_ask_price": "FixedU128"
            },
            "LookupSource": "AccountId",
            "Address": "AccountId"
        },
    });

    // Now there are some trades executing in the system so now let's listen for market data updates from Polkadex
    api.derive.chain.subscribeNewHeads((header) => {
        api.query.polkadex.marketInfo(tradingPairID, header.number).then(market_data => {
            let market_data_obj = {
                "date": GenesisTime + (header.number) * blockPeriod,
                "low": market_data.low / factor,
                "high": market_data.high / factor,
                "volume": market_data.volume / factor,
                "open": market_data.open / factor,
                "close": market_data.close / factor
            };
            if(graph_data.length >= 3600){
                graph_data.shift()
                graph_data.push(market_data_obj);
            }else{
                graph_data.push(market_data_obj);
            }
            // When new market data arrives from node
            io.emit("market-data-stream", market_data_obj)
        });

        api.query.system.events((events) => {
            // Loop through the Vec<EventRecord>
            events.forEach((record) => {
                // Extract the phase, event and the event types
                const {event, phase} = record;
                const types = event.typeDef;

                if ((event.section === "polkadex") && (event.method === "FulfilledLimitOrder" || event.method === "PartialFillLimitOrder")) {
                    // When new order got matched
                    io.emit("last-trade", {
                        "side": event.data[2].toString(),
                        "price": event.data[3] / factor,
                    });
                } else if ((event.section === "polkadex") && (event.method === "NewLimitOrder")) {
                    // When new order was inserted
                    io.emit("new-trade", {
                        "side": event.data[2].toString(),
                        "price": event.data[3] / factor,
                        "quantity": event.data[4] / factor,
                    });
                }
            });
        });


        let best_bid;
        let best_ask;
        api.query.polkadex.orderbooks(tradingPairID).then((orderbook) => {
            best_bid = (orderbook.best_bid_price / factor);
            best_ask = (orderbook.best_ask_price / factor);
        }).then(() => {
                api.query.polkadex.priceLevels.entries(tradingPairID).then((levels) => {

                    let orderbook = {};
                    orderbook.best_bid = best_bid;
                    orderbook.best_ask = best_ask;
                    // This is a trick to do parallel calculation of order quantity.
                    formatData(levels).then(price_levels => {
                        let bid_levels,ask_levels = getfilteredPriceLevels(price_levels,orderbook.best_ask,orderbook.best_bid)
                        orderbook.bid_levels = bid_levels
                        orderbook.ask_levels = ask_levels
                        io.emit("orderbook-updates", orderbook);
                    });
                })
            }
        )

    });

}

io.on('connection', socket => {
    socket.emit("initial-graph-data", graph_data)
});

connect_blockchain().then(blah => {
        console.log("Process exited.");
    }
)

async function formatData(orderbook) {
    const getSubscription = orderbook.map((entry) => {
        return getPriceandQuantity(entry)
    });
    return await Promise.all(getSubscription); // returns an array
}

function getPriceandQuantity(entry) {
    let price_level = {}
    let [key, orders ] = entry;
    price_level.price = parseFloat(key.toHuman()[1].replace(/,/g, '')) / factor;
    price_level.quantity = 0;
    orders.orders.forEach((order) => {
        price_level.quantity = price_level.quantity + parseFloat(order.toHuman().quantity.replace(/,/g, '')) / factor
    })
    return price_level
}

function getfilteredPriceLevels(price_levels,best_ask, best_bid) {
    // [{price,quantity},{price,quantity}]
    let levels_needed = 5;
    price_levels.sort(compare)
    let index_best_bid = findWithAttr(price_levels,"price",best_bid)
    let bid_levels = [];
    let ask_levels = [];
    if(index_best_bid !== -1) {
        if ((price_levels.len() >= index_best_bid+levels_needed+1) && (index_best_bid >= levels_needed)){
            bid_levels = price_levels.slice(index_best_bid-levels_needed+1,index_best_bid+1)
            ask_levels = price_levels.slice(index_best_bid+1,index_best_bid+1+levels_needed)
        }
        // TODO: Finish all the conditions
    }
    return bid_levels,ask_levels
}

function compare( a, b ) {
    if ( a.price < b.price ){
        return -1;
    }
    if ( a.price > b.price ){
        return 1;
    }
    return 0;
}

function findWithAttr(array, attr, value) {
    for(let i = 0; i < array.length; i += 1) {
        if(array[i][attr] === value) {
            return i;
        }
    }
    return -1;
}
