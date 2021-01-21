
import Heading from 'components/general/Heading'
import OrderBookIcon from 'components/general/OrderBookIcon'
import OrderBookTable from 'components/general/OrderBookTable'
import {useState} from "react"
import { IOrderBookData } from '../Graph/IGraph'
import * as S from './styles'
import Dinero from 'dinero.js'

type Props = {
  orderBookAsks: IOrderBookData[],
  orderBookBids: IOrderBookData[],
  latestTransaction: number,
  latestTransactionType: string,
}

const OrderBook = ({ orderBookBids, orderBookAsks, latestTransaction, latestTransactionType }: Props) => {
  const [filterState, setFilterState] = useState("Order")
  const [sizeState, setSizeState] = useState(0.001)
  const [dropdownState, setDropdownState] = useState(false)

  const handleChange = (select: string) => setFilterState(select)
  const handleAction = (select: number) => {
    setDropdownState(false)
    setSizeState(select)
  }

  const getDecimalPlaces = () => sizeState.toString().split('.')[1].length || 0

  const updateDataSize = (orderBookData) => orderBookData.map(order => ({
    ...order,
    price: order.price.toFixed(getDecimalPlaces()),
    amount: order.amount.toFixed(getDecimalPlaces()),
    total: order.total.toFixed(getDecimalPlaces())
  }));

  
  return (
    <S.Wrapper>
      <S.WrapperTitle>
        <Heading title="Order Book" />
        <S.ContainerTitle>
          <S.ContainerActions>
            <OrderBookIcon icon="OrderAsc" filterState={filterState} handleChange={handleChange} />
            <OrderBookIcon icon="Order" filterState={filterState} handleChange={handleChange} />
            <OrderBookIcon icon="OrderDesc" filterState={filterState} handleChange={handleChange} />
          </S.ContainerActions>
        </S.ContainerTitle>
      </S.WrapperTitle>
      <OrderBookTable orderBookAsks={updateDataSize(orderBookAsks)}
                      orderBookBids={updateDataSize(orderBookBids)}
                      latestTransaction={Dinero({ amount: Math.round(latestTransaction * 100) }).toFormat('$0,0.00')}
                      latestTransactionType={latestTransactionType}/>
    </S.Wrapper>
  )
}

export default OrderBook
