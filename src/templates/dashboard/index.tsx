import React, { useEffect,useState } from 'react'

import { webSocket } from '../../components/dashboard/CustomChart/api/stream'
import Graph from './blocks/Graph'
import MarketOrder from './blocks/MarketOrder'
import Menu from './blocks/Menu'
import Navbar from './blocks/Navbar'
import Transactions from './blocks/Transactions'
import * as S from './styles'
import Toast from '../../components/general/Toast'

export default function Dashboard({ account, blockchainApi }) {

  const [state, setState] = useState(false)
  const [orderBookBids, setOrderBookBids] = useState([])
  const [orderBookAsks, setOrderBookAsks] = useState([])
  const [volume, setVolume] = useState(0);
  const [blockPrice, setBlockPrice] = useState("0.00");
  const [high, setHigh] = useState(0);
  const [low, setLow] = useState(0);
  const [lastTradePrice, setLastTradePrice] = useState(0);
  const [lastTradePriceType, setLastTradePriceType] = useState();
  const [newTrade, setNewTrade] = useState();
  const [openOrders, setOpenOrders] = useState([]);
  const [price, setPrice] = useState<string>('0')
  const [amount, setAmount] = useState<string>('0')
  const [activeIndex, setActiveIndex] = useState(3);

  const removeTransactionsOrder = (id: string) => console.log('remove transaction' + id);

  const fetchOrderBookBids = (socket) => {
    socket.on('bids_levels', async (bid_levels) => {
      let currentOrderBook = [];

      bid_levels.map(({ price, quantity }) => {
        currentOrderBook.push({
          id: currentOrderBook.length + 1,
          date: new Date(),
          pair: "DOT",
          coin: "BTC",
          side: "buy",
          price: price,
          amount: quantity,
          total: quantity * price,
        });
      });
      await setOrderBookBids(currentOrderBook.sort((first, second) => second.price - first.price));
    });
  }

  const fetchOrderBookAsks = (socket) => {
    socket.on('asks_levels', async (ask_levels) => {
      let currentOrderBook = [];

      ask_levels.map(({ price, quantity }) => {
        currentOrderBook.push({
          id: currentOrderBook.length + 1,
          date: new Date(),
          pair: "DOT",
          coin: "BTC",
          side: "sell",
          price: price,
          amount: quantity,
          total: quantity * price,
        });
      });
      await setOrderBookAsks(currentOrderBook.sort((first, second) => second.price - first.price));
    });
  }

  const fetchLastTrade = (socket) => {
    socket.on('last-trade', lastTradeData => {
      setLastTradePriceType(lastTradeData.side);
      setLastTradePrice(lastTradeData.price);
    });
  }

  const fetchNewTrade = (socket) => {
    socket.on('new-trade', payload => {
      if (payload.length !== 0) {
        setNewTrade(payload);
      }
    });
  }

  const fetchMarketData = (socket) => {
    socket.on('market-data-stream', ({ volume, open, close, low, high }) => {
      const blockPriceValue = open === 0 ? 0 : (open - close) * 100 / open;
      if (+blockPriceValue.toFixed(2) !== 0) {
        setBlockPrice(blockPriceValue.toFixed(2));
      }
      if (+high.toFixed(2) !== 0) {
        setHigh(high.toFixed(2))
      }
      if (+low.toFixed(2) !== 0) {
        setLow(low.toFixed(2))
      }
      setVolume(volume);
    });
  }

  const updateOpenOrders = order => {
    const finalOrders = [...openOrders, order];
    setOpenOrders(finalOrders);
  }

  useEffect(() => {
    const webSocketInstance = webSocket;
    fetchMarketData(webSocketInstance)
    fetchOrderBookBids(webSocketInstance)
    fetchOrderBookAsks(webSocketInstance)
    fetchLastTrade(webSocketInstance);
    fetchNewTrade(webSocketInstance);
  }, [])

  return (
    <S.Wrapper>
      <Menu handleChange={() => setState(!state)} />
      {/*{state && <Market/>}*/}
      <S.WrapperMain >
        <Navbar account={account} lastTradePrice={lastTradePrice} lastTradePriceType={lastTradePriceType}
        blockValues={{volume, high, low, blockPrice}}/>
        <S.WrapperGraph marketActive={state}>
          <Graph orderBookAsks={orderBookAsks}
                 orderBookBids={orderBookBids}
                 latestTransaction={lastTradePrice}
                 latestTransactionType={lastTradePriceType}/>
          <MarketOrder setOpenOrder={(order) => updateOpenOrders(order)}
                       setActiveIndex={(index) => setActiveIndex(index)}
                       validAccount={account}
                       blockchainApi={blockchainApi}
                       latestTransaction={lastTradePrice}
                       price={price} setPrice={inputPrice => setPrice(inputPrice)}
                       amount={amount} setAmount={inputAmount => setAmount(inputAmount)} />
        </S.WrapperGraph>
        <Transactions
          newTradeData={newTrade}
          data={[]}
          openOrderData={openOrders}
          activeIndex={activeIndex}
          setActiveIndex={(index) => setActiveIndex(index)}
          remove={removeTransactionsOrder}/>
      </S.WrapperMain>
      <Toast />
    </S.Wrapper>
  )
}
