import React, { useEffect,useState } from 'react'
// Fake Data
import { fakeGetGraphData, fakeLatestListings,fakeOrderBook, fakeTransactionsOrders} from "utils/fakeData/"
import { IMarketToken } from 'utils/Interfaces'

import Graph from './blocks/Graph'
import Market from './blocks/Market'
import MarketOrder from './blocks/MarketOrder'
import Menu from './blocks/Menu'
import Navbar from './blocks/Navbar'
import Transactions from './blocks/Transactions'
import * as S from './styles'

import { io } from 'socket.io-client';

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
      "price": 13882.426203037483,
      "volume_24h": 32714795587.32121,
      "percent_change_1h": 0.83355575,
      "percent_change_24h": 4.71387887,
      "percent_change_7d": 6.98381798,
      "market_cap": 257246730041.22513,
      "last_updated": "2020-10-31T11:50:02.000Z"
    }
  }
}
export default function Dashboard() {

  const [state, setState] = useState(false)
  const [transactions, setTransactions] = useState([])
  const [orderBook, setOrderBook] = useState([])
  const [graphData, setGraphData] = useState([])
  const [coins, setCoins] = useState<any>([])
  const [current, setCurrent] = useState(initialState)
  const [volume, setVolume] = useState(initialState.quote.USD.volume_24h);
  const [lastTradePrice, setLastTradePrice] = useState(initialState.quote.USD.price);
  const [lastTradePriceType, setLastTradePriceType] = useState();

  let socket = io.connect("https://testnet.polkadex.trade:3000", {secure: true, transports: ['websocket']})
  console.log('web socket connected')

  // Fake Transactions Orders Actions
  const transactionActions = {
    getTransactionsOrders: () => setTransactions(fakeTransactionsOrders),
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
    // getOrderBookOrders: () => setOrderbook(fakeOrderBook),
    getGraphData: async() => {
      const data = await fakeGetGraphData()
      setGraphData(data.slice(0, 100))
    }
  }

  const fetchMarketData = () => {
    socket.on('market-data-stream', ({ volume }) => setVolume(volume));
  }

  const fetchOrderBookData = () => {

    const getColorStaus = (price, best_bid, best_ask) => {
      if (price >= best_ask) return "sell"
      else if(price <= best_bid) return "buy"
    }

    socket.on('orderbook-updates', async ({ best_bid, best_ask, bid_levels, ask_levels }) => {
      let currentOrderBook = [];
      bid_levels.push(ask_levels).map(([key, level]) => {

        const price = parseFloat(key.toHuman()[1].replace(/,/g, '')) / FixedU128_denominator;
        const amount = level.orders.reduce((total, currentValue) => parseFloat(total) + parseFloat(currentValue.quantity), 0) / FixedU128_denominator;

        currentOrderBook.push({
          id: currentOrderBook.length + 1,
          date: new Date(),
          pair: "DOT",
          coin: "BTC",
          side: getColorStaus(price, best_bid, best_ask),
          price: price,
          amount: amount,
          total: amount * price,
        });
      });
      await setOrderBook(currentOrderBook.sort((first, second) => second.price - first.price));
    });
  }

  const fetchLastTrade = () => {
    socket.on('last-trade', lastTradeData => {
      setLastTradePriceType(lastTradeData.side);
      setLastTradePrice(lastTradeData.price);
    });
  }

  useEffect(() => {
    fetchMarketData()
    fetchOrderBookData()
    fetchLastTrade();
    marketTokenActions.getTokensInfo()
    // tokenActions.getOrderBookOrders()
    transactionActions.getTransactionsOrders()
    tokenActions.getGraphData()  }, [])

  if (!coins) return <p>Loading</p>
  return (
    <S.Wrapper >
      <Menu handleChange={() => setState(!state)} />
      {state && <Market coins={coins}/>}
      <S.WrapperMain >
        <Navbar currentToken={current} volume={volume} lastTradePrice={lastTradePrice} lastTradePriceType={lastTradePriceType} />
        <S.WrapperGraph marketActive={state}>
          <Graph orderbook={orderBook} latestTransaction={lastTradePrice} latestTransactionType={lastTradePriceType} graphData={graphData}/>
          <MarketOrder />
          <Transactions data={transactions} remove={transactionActions.removeTransactionsOrder}/>
        </S.WrapperGraph>
      </S.WrapperMain>

    </S.Wrapper>
  )
}
