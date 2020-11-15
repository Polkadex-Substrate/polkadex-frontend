import Dropdown from 'components/general/Dropdown'
import DropdownItem from 'components/general/DropdownItem'
import Heading from 'components/general/Heading'
import OrderBookIcon from 'components/general/OrderBookIcon'
import OrderBookTable from 'components/general/OrderBookTable'
import {useMemo,useState} from "react"

import { IOrderBookData } from '../Graph/IGraph'
import * as S from './styles'

type Props = {
  data: IOrderBookData[]
}

const OrderBook = ({ data }: Props) => {
  const [filterState, setFilterState] = useState("Order")
  const [sizeState, setSizeState] = useState(0.01)

  const handleChange = (select: string) => setFilterState(select)
  const handleAction = (select: number) => setSizeState(select)

  const lastOrderBook = (data) => data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0]

  const last = useMemo<IOrderBookData>(() => lastOrderBook(data), [data])

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
          <Dropdown title={sizeState}>
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
      <OrderBookTable data={data} active={last && last.price}/>
    </S.Wrapper>
  )
}

export default OrderBook
