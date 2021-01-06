import React, { useEffect,useState } from 'react'
import Cryptocurrencies from './blocks/Cryptocurrencies'
import { webSocket } from '../../components/dashboard/CustomChart/api/stream'
// import Graph from './blocks/Graph'
// import MarketOrder from './blocks/MarketOrder'
import Menu from './blocks/Menu'
import Navbar from './blocks/Navbar'
// import Transactions from './blocks/Transactions'
import * as S from './styles'
import Toast from '../../components/general/Toast'
import { toast } from 'react-toastify'

export default function Wallet({ account }) {

  const [state, setState] = useState(false)
  // const [orderBookBids, setOrderBookBids] = useState([])
  // const [orderBookAsks, setOrderBookAsks] = useState([])
  // const [volume, setVolume] = useState(0);
  // const [blockPrice, setBlockPrice] = useState("0.00");
  // const [high, setHigh] = useState(0);
  // const [low, setLow] = useState(0);
  // const [lastTradePrice, setLastTradePrice] = useState(0);
  // const [lastTradePriceType, setLastTradePriceType] = useState();
  // const [newTrade, setNewTrade] = useState();
  // const [openOrders, setOpenOrders] = useState([]);
  // const [price, setPrice] = useState<string>()
  // const [amount, setAmount] = useState<string>()

 

  return (
    <S.Wrapper>
      <Menu handleChange={() => setState(!state)} />
      <S.WrapperMain >
        <Navbar/>
        <S.BalanceHeaderWrapper>
        <S.ContentBlur>Total Balance</S.ContentBlur>
        <S.ContentHeading>0.93871332 BTC</S.ContentHeading>
        <S.ContentBlur>~4243.00 USD</S.ContentBlur>
        </S.BalanceHeaderWrapper>
        <Cryptocurrencies />
      </S.WrapperMain>  
    </S.Wrapper>
  )
}
