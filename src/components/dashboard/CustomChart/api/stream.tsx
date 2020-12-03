const io = require('socket.io-client');

export const webSocket = io.connect("https://cloud.polkadex.trade:3000", {secure: true, transports: ['websocket']});

// keep track of subscriptions
const channelToSubscription = new Map();
const channelString = "market-data-stream"
webSocket.on('market-data-stream', trade => {
    const subscriptionItem = channelToSubscription.get(channelString);
    if (subscriptionItem === undefined) {
        return;
    }
    const lastDailyBar = subscriptionItem.lastDailyBar;


    subscriptionItem.lastDailyBar = (trade.date * 1000 - lastDailyBar.time < 3*60000)
      ? barValueForSameBlock(trade, lastDailyBar)
      : barValueForNextBlock(trade, lastDailyBar);

    // send data to every subscriber of that symbol
    subscriptionItem.handlers.forEach(handler => handler.callback(subscriptionItem.lastDailyBar));
});

const barValueForSameBlock = (trade, lastDailyBar) => {
  return (trade.open === 0 && trade.close === 0 && trade.high === 0 && trade.low === 0 && trade.volume === 0)
    ? lastDailyBar
    : ({
        ...lastDailyBar,
        high: Math.max(lastDailyBar.high, trade.high),
        low: Math.min(lastDailyBar.low, trade.low),
        close: trade.close,
        volume: lastDailyBar.volume + trade.volume
      })
}

const barValueForNextBlock = (trade, lastDailyBar) => {
  return (trade.open === 0 && trade.close === 0 && trade.high === 0 && trade.low === 0 && trade.volume === 0)
    ? ({
        ...lastDailyBar,
        time: trade.date*1000,
        volume: 0,
      })
    : ({
        time: trade.date * 1000,
        high: trade.high,
        low: trade.low,
        close: trade.close,
        open: trade.open,
        volume: trade.volume
      });
}

let initialBars;
webSocket.on('initial-graph-data', bars => {
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
