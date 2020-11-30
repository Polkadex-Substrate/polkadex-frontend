import {io} from 'socket.io-client';

const webSocket = io.connect("https://testnet.polkadex.trade:3000", {secure: true, transports: ['websocket']});
// keep track of subscriptions
const channelToSubscription = new Map();
const channelString = "market-data-stream"
webSocket.on('market-data-stream', trade => {
    console.log('[market-data-stream] Message:', trade);
    const subscriptionItem = channelToSubscription.get(channelString);
    if (subscriptionItem === undefined) {
        return;
    }
    const lastDailyBar = subscriptionItem.lastDailyBar;
    console.log("New Time: ", trade.date * 1000)
    console.log("Last Time: ", lastDailyBar.time)
    if (trade.date * 1000 - lastDailyBar.time < 60000) {
        let bar;
        if (trade.open === 0 && trade.close === 0 && trade.high === 0 && trade.low === 0 && trade.volume === 0) {
            bar = lastDailyBar
        } else {
            bar = {
                ...lastDailyBar,
                high: Math.max(lastDailyBar.high, trade.high),
                low: Math.min(lastDailyBar.low, trade.low),
                close: trade.close,
                volume: lastDailyBar.volume + trade.volume
            };
        }
        subscriptionItem.lastDailyBar = bar;
        // send data to every subscriber of that symbol
        subscriptionItem.handlers.forEach(handler => handler.callback(bar));
    } else {
        let newBar;
        if (trade.open === 0 && trade.close === 0 && trade.high === 0 && trade.low === 0 && trade.volume === 0) {
            newBar ={
                ...lastDailyBar,
                time: trade.date*1000,
                volume: 0,
            }
        }else {
            newBar = {
                time: trade.date * 1000,
                high: trade.high,
                low: trade.low,
                close: trade.close,
                open: trade.open,
                volume: trade.volume
            }
        }
        subscriptionItem.lastDailyBar = newBar;
        // send data to every subscriber of that symbol
        subscriptionItem.handlers.forEach(handler => handler.callback(newBar));
    }

});

let initialBars;
webSocket.on('initial-graph-data', bars => {
    console.log("Got Historical Data: ", bars)
    initialBars = bars
});

export default {
    subscribeBars: (symbolInfo, resolution, onRealtimeCallback, uid, resetCache, lastDailyBar) => {
        const handler = {
            id: uid,
            callback: onRealtimeCallback,
        };

        let subscriptionItem = channelToSubscription.get(channelString);
        if (subscriptionItem) {
            // already subscribed to the channel, use the existing subscription
            subscriptionItem.handlers.push(handler);
            return;
        }

        subscriptionItem = {
            uid,
            resolution,
            lastDailyBar,
            handlers: [handler],
        };
        channelToSubscription.set(channelString, subscriptionItem);
        console.log('[subscribeBars]: Subscribe to streaming. Channel:', channelString);
    },

    unsubscribeBars: (uid) => {
        //   const subIndex = _subs.findIndex(e => e.uid === uid)
        //   if (subIndex === -1) {
        //     //console.log("No subscription found for ",uid)
        //     return
        //   }
        //   let sub = _subs[subIndex]
        //   console.log(sub);
    }
}

export function createNewPromiseforInitialData() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (typeof (initialBars) !== "undefined") {
                resolve(initialBars)
            }
        }, 250)
    });
}