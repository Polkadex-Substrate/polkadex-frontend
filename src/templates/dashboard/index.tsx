import React, { useEffect,useState } from 'react'
// Fake Data
import { fakeGetGraphData, fakeLatestListings, fakeTransactionsOrders} from "utils/fakeData/"
import { IMarketToken } from 'utils/Interfaces'
import { ApiPromise, WsProvider } from '@polkadot/api'

import Graph from './Blocks/Graph'
import Market from './Blocks/Market'
import MarketOrder from './Blocks/MarketOrder'
import Menu from './Blocks/Menu'
import Navbar from './Blocks/Navbar'
import Transactions from './Blocks/Transactions'
import * as S from './styles'

const initialState = {
  "id": 1,
  "name": "Bitcoin",
  "symbol": "BTC",
  "slug": "bitcoin",
  "num_market_pairs": 9191,
  "date_added": "2013-04-28T00:00:00.000Z",
  "tags": [
    "mineable",
    "pow",
    "sha-256",
    "store-of-value",
    "state-channels"
  ],
  "max_supply": 21000000,
  "circulating_supply": 18530387,
  "total_supply": 18530387,
  "platform": null,
  "cmc_rank": 1,
  "last_updated": "2020-10-31T11:50:02.000Z",
  "quote": {
    "USD": {
      "price": 0,
      "volume_24h": 0,
      "percent_change_1h": 0.83355575,
      "percent_change_24h": 4.71387887,
      "percent_change_7d": 6.98381798,
      "market_cap": 257246730041.22513,
      "last_updated": "2020-10-31T11:50:02.000Z"
    }
  }
}

const wsProvider = new WsProvider('ws://0.0.0.0:9944');

export default function Dashboard() {

  const [state, setState] = useState(false)
  const [transactions, setTransactions] = useState([])
  const [orderBook, setOrderBook] = useState([])
  const [graphData, setGraphData] = useState([])
  const [coins, setCoins] = useState<any>([])
  const [volume, setVolume] = useState(initialState.quote.USD.volume_24h);
  const [lastTradePrice, setLastTradePrice] = useState(initialState.quote.USD.price);
  const [lastTradePriceType, setLastTradePriceType] = useState();

  const initialiseWebSocket = async() => {
    const tradingPairID = "0xf28a3c76161b8d5723b6b8b092695f418037c747faa2ad8bc33d8871f720aac9";

    const FixedU128_denominator = 1000000000000000000;

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
    api.derive.chain.subscribeNewHeads(async (header) => {
      let best_bid;
      let best_ask;
      await api.query.polkadex.orderbooks(tradingPairID).then((orderbook) => {
        best_bid = (orderbook.best_bid_price/FixedU128_denominator);
        best_ask = (orderbook.best_ask_price/FixedU128_denominator);
      });

      api.query.polkadex.priceLevels.entries(tradingPairID).then(async (levels) => {
        const getColorStaus = (price) => {
          if (price >= best_ask) return "sell"
          else if(price <= best_bid) return "buy"
        }

        let currentOrderBook = [];
        levels.map(([key, level]) => {

          const price = parseFloat(key.toHuman()[1].replace(/,/g, ''))/FixedU128_denominator;
          const amount = level.orders.reduce((total, currentValue) => parseFloat(total) + parseFloat(currentValue.quantity), 0)/FixedU128_denominator;

          currentOrderBook.push({
            id: currentOrderBook.length + 1,
            date: new Date(),
            pair: "DOT",
            coin: "BTC",
            side: getColorStaus(price),
            price: price,
            amount: amount,
            total: amount * price,
          });
        });
        await setOrderBook(currentOrderBook.sort((first, second) => second.price - first.price));
      })

      api.query.polkadex.marketInfo(tradingPairID, header.number).then(async (market_data) => {
        await setVolume(market_data.volume);
      });
    });

    api.query.system.events(async (events) => {
      let lastPrice = 0;
      let lastPriceType;

      events.forEach((record) => {
        const { event } = record;

        if((event.section === "polkadex") && (event.method === "FulfilledLimitOrder" || event.method === "PartialFillLimitOrder")) {
          lastPrice = event.data[3]/FixedU128_denominator;
          lastPriceType = event.data[2].toString();
        }
      });
      await setLastTradePrice(lastPrice);
      await setLastTradePriceType(lastPriceType);
    });
  }

  // Fake Transactions Orders Actions
  const transactionActions = {
    getTransactionsOrders: () => setTransactions([]),
    removeTransactionsOrder : (id: string) => {
      const removeItem = transactions.filter(item => item.id !== id)
      setTransactions(removeItem)
    }
  }

  // Market Tokens Actions
  const marketTokenActions = {
    getTokensInfo : () => setCoins(fakeLatestListings)
  }

  // Token Actions
  const tokenActions = {
    // getDefaultTokenInfo: (coins: IMarketToken[], select: number) => setCurrent(coins.find(item => item.id === select)),
    onChangetoken: () => console.log("Change Token"),
    getGraphData: async() => {
      const data = await fakeGetGraphData()
      setGraphData(data.slice(0, 100))
    }
  }

  useEffect(() => {
    marketTokenActions.getTokensInfo()
    transactionActions.getTransactionsOrders()
    tokenActions.getGraphData()
    initialiseWebSocket()
  }, [])

  if (!coins) return <p>Loading</p>
  return (
    <S.Wrapper >
      <Menu handleChange={() => setState(!state)} />
      {state && <Market coins={coins}/>}
      <S.WrapperMain >
        <Navbar currentToken={initialState} volume={volume} lastTradePrice={lastTradePrice} lastTradePriceType={lastTradePriceType} />
        <S.WrapperGraph marketActive={state}>
          <Graph orderbook={orderBook} latestTransaction={lastTradePrice} latestTransactionType={lastTradePriceType} graphData={graphData}/>
          <MarketOrder />
          <Transactions data={transactions} remove={transactionActions.removeTransactionsOrder}/>
        </S.WrapperGraph>
      </S.WrapperMain>
    </S.Wrapper>
  )
}
