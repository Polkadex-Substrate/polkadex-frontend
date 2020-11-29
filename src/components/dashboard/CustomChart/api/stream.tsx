import { io } from 'socket.io-client';

const webSocket = io.connect("https://testnet.polkadex.trade:3000", {secure: true, transports: ['websocket']});

// keep track of subscriptions
const _subs = []

export default {
  subscribeBars: (symbolInfo, resolution, onRealtimeCallback, uid, resetCache) => {

    webSocket.on('new-trade', trade => {
      console.log(trade, '++++')
      onRealtimeCallback({
        time: trade.date,
        low: trade.low,
        high: trade.high,
        open: trade.open,
        close: trade.close,
        volume: trade.volume,
      });
    });

    const channelString = '';
    const lastBar = {};

    const newSub = {
      channelString,
      uid,
      resolution,
      symbolInfo,
      lastBar: lastBar,
      listener: onRealtimeCallback,
    }
    _subs.push(newSub)
  },

  unsubscribeBars: (uid) => {
    const subIndex = _subs.findIndex(e => e.uid === uid)
    if (subIndex === -1) {
      //console.log("No subscription found for ",uid)
      return
    }
    let sub = _subs[subIndex]
    console.log(sub);
  }
}
