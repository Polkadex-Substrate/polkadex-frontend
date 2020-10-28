import React, { useEffect,useState } from 'react'
// Fake Data
import { fakeGetGraphData,fakeOrderBook, fakeTransactionsOrders} from "utils/fakeData/"

import Graph from './blocks/Graph'
import Market from './blocks/Market'
import MarketOrder from './blocks/MarketOrder'
import Menu from './blocks/Menu'
import Navbar from './blocks/Navbar'
import Transactions from './blocks/Transactions'
import * as S from './styles'
export default function Dashboard() {

  const [state, setState] = useState(false)
  const [transactions, setTransactions] = useState([])
  const [orderbook, setOrderbook] = useState([])
  const [graphData, setGraphData] = useState([])

  // Fake Transactions Orders Actions
  const getTransactionsOrders = () => setTransactions(fakeTransactionsOrders)
  const removeTransactionsOrder = (id: string) => {
  // Cancel Action
  const removeItem = transactions.filter(item => item.id !== id)
  setTransactions(removeItem)
  }

// Fake OrderBook Actions
const getOrderBookOrders = () => setOrderbook(fakeOrderBook)

// Fake Graph Actions
  const getGraphData = async() =>  {
    const data = await fakeGetGraphData()
    setGraphData(data.slice(0, 100))
  }

  useEffect(() => {
    getTransactionsOrders()
    getOrderBookOrders()
    getGraphData()
  }, [])

  return (
    <S.Wrapper >
      <Menu handleChange={() => setState(!state)} />
      {state && <Market />}
      <S.WrapperMain >
        <Navbar />
        <S.WrapperGraph>

          <Graph orderbook={orderbook} graphData={graphData}/>
          <MarketOrder />
        </S.WrapperGraph>
        <Transactions data={transactions} remove={removeTransactionsOrder}/>
      </S.WrapperMain>

    </S.Wrapper>
  )
}
