import React, { useEffect,useState } from 'react'
// Fake Data
import { fakeGetGraphData, fakeLatestListings,fakeOrderBook, fakeTransactionsOrders} from "utils/fakeData/"
import { IMarketToken } from 'utils/Interfaces'

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
  const [orderbook, setOrderbook] = useState([])
  const [graphData, setGraphData] = useState([])
  const [coins, setCoins] = useState<any>([])
  const [current, setCurrent] = useState(initialState)

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
    getOrderBookOrders: () => setOrderbook(fakeOrderBook),
    getGraphData: async() => {
      const data = await fakeGetGraphData()
      setGraphData(data.slice(0, 100))
    }
  }

  useEffect(() => {
    marketTokenActions.getTokensInfo()
    tokenActions.getOrderBookOrders()
    transactionActions.getTransactionsOrders()
    tokenActions.getGraphData()  }, [])

  if (!coins) return <p>Loading</p>
  return (
    <S.Wrapper >
      <Menu handleChange={() => setState(!state)} />
      {state && <Market coins={coins}/>}
      <S.WrapperMain >
        <Navbar currentToken={current} />
        <S.WrapperGraph marketActive={state}>
          <Graph orderbook={orderbook} graphData={graphData}/>
          <MarketOrder />
          <Transactions data={transactions} remove={transactionActions.removeTransactionsOrder}/>
        </S.WrapperGraph>
      </S.WrapperMain>

    </S.Wrapper>
  )
}
