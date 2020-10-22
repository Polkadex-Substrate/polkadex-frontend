import Dropdown from 'components/general/Dropdown'
import DropdownItem from 'components/general/DropdownItem'
import Heading from 'components/general/Heading'
import OrderBookIcon from 'components/general/OrderBookIcon'
import OrderBookTable from 'components/general/OrderBookTable'
import {useState} from "react"

import * as S from './styles'

const OrderBook = () => {
  const [filterState, setFilterState] = useState("Order")
  const [sizeState, setSizeState] = useState(0.01)
  const handleChange = (select: string): void => setFilterState(select)
  const handleAction = (select: number): void => setSizeState(select)

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
        <OrderBookTable />
    </S.Wrapper>
  )
}

export default OrderBook
