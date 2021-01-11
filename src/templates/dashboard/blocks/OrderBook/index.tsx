import Dropdown from 'components/general/Dropdown'
import DropdownItem from 'components/general/DropdownItem'
import Heading from 'components/general/Heading'
import OrderBookIcon from 'components/general/OrderBookIcon'
import OrderBookTable from 'components/general/OrderBookTable'
import {useMemo,useState} from "react"

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

  // const lastOrderBook = (data) => data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0]
  //
  // const last = useMemo<IOrderBookData>(() => lastOrderBook(data), [data])

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
          <Dropdown title={sizeState} active={dropdownState} setDropdownState={setDropdownState}>
            <>
              <DropdownItem title={0.1} handleAction={handleAction} />
              <DropdownItem title={0.01} handleAction={handleAction} />
              <DropdownItem title={0.001} handleAction={handleAction} />
              <DropdownItem title={0.0001} handleAction={handleAction} />
              <DropdownItem title={0.00001} handleAction={handleAction} />
              <DropdownItem title={0.000001} handleAction={handleAction} />
            </>
          </Dropdown>
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
