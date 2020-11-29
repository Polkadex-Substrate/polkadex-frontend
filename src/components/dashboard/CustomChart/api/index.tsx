import { io } from 'socket.io-client';
import stream from './stream';

const supportedResolutions = ["1", "3", "5", "15", "30", "60", "120", "240", "D"]

const config = {
  supported_resolutions: supportedResolutions
};

const webSocket = io.connect("https://testnet.polkadex.trade:3000", {secure: true, transports: ['websocket']});

export default {
  onReady: cb => {
    console.log('=====onReady running')
    setTimeout(() => cb(config), 0)
  },

  searchSymbols: (userInput, exchange, symbolType, onResultReadyCallback) => {
    console.log('====Search Symbols running')
  },

  resolveSymbol: (symbolName, onSymbolResolvedCallback, onResolveErrorCallback) => {
    // expects a symbolInfo object in response
    console.log('======resolveSymbol running')
    // console.log('resolveSymbol:',{symbolName})
    const split_data = symbolName.split(/[:/]/)
    // console.log({split_data})
    const symbol_stub = {
      name: symbolName,
      description: '',
      type: 'crypto',
      session: '24x7',
      timezone: 'Etc/UTC',
      ticker: symbolName,
      exchange: split_data[0],
      minmov: 1,
      pricescale: 100000000,
      has_intraday: true,
      intraday_multipliers: ['1', '60'],
      supported_resolution: supportedResolutions,
      volume_precision: 8,
      data_status: 'streaming',
      pricescale: 100
    }

    onSymbolResolvedCallback(symbol_stub)
  },

  getBars: (symbolInfo, resolution, from, to, onHistoryCallback, onErrorCallback, firstDataRequest) => {
    console.log('=====getBars running')

    webSocket.on('initial-graph-data', payload => {
      console.log(payload.length)
      if (payload.length) {
        onHistoryCallback(payload.map(el => ({
            time: el.date,
            low: el.low,
            high: el.high,
            open: el.open,
            close: el.close,
            volume: el.volume,
          })), {noData: false});
      } else {
        onHistoryCallback([], {noData: true});
      }
    });
  },

  subscribeBars: (symbolInfo, resolution, onRealtimeCallback, subscribeUID, onResetCacheNeededCallback) => {
    console.log('=====subscribeBars runnning')
    stream.subscribeBars(symbolInfo, resolution, onRealtimeCallback, subscribeUID, onResetCacheNeededCallback);
  },

  unsubscribeBars: subscriberUID => {
    console.log('=====unsubscribeBars running')
    stream.unsubscribeBars(subscriberUID);
  },

  calculateHistoryDepth: (resolution, resolutionBack, intervalBack) => {
    //optional
    console.log('=====calculateHistoryDepth running')
    // while optional, this makes sure we request 24 hours of minute data at a time
    // CryptoCompare's minute data endpoint will throw an error if we request data beyond 7 days in the past, and return no data
    return resolution < 60 ? {resolutionBack: 'D', intervalBack: '1'} : undefined
  },
}
