import Dropdown from 'components/general/Dropdown'
import DropdownItem from 'components/general/DropdownItem'
import Heading from 'components/general/Heading'
import OrderBookIcon from 'components/general/OrderBookIcon'
import OrderBookTable from 'components/general/OrderBookTable'
import {useMemo,useState} from "react"
import Currencylist from '../Currencieslist'

import * as S from './styles'


const Cryptocurrencies = () => {
  // const [filterState, setFilterState] = useState("Order")
  // const [sizeState, setSizeState] = useState(0.001)

  // const handleChange = (select: string) => setFilterState(select)
  // const handleAction = (select: number) => setSizeState(select)

  // const getDecimalPlaces = () => sizeState.toString().split('.')[1].length || 0

  // const updateDataSize = (orderBookData) => orderBookData.map(order => ({
  //   ...order,
  //   price: order.price.toFixed(getDecimalPlaces()),
  //   amount: order.amount.toFixed(getDecimalPlaces()),
  //   total: order.total.toFixed(getDecimalPlaces())
  // }));

  // const lastOrderBook = (data) => data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0]
  //
  // const last = useMemo<IOrderBookData>(() => lastOrderBook(data), [data])

  return (
    <S.Wrapper>
      <S.WrapperTitle>
        <Heading title="Cryptocurrencies" />
        <S.ContainerTitle>       
        </S.ContainerTitle>      
      </S.WrapperTitle>
      <Currencylist/>
    </S.Wrapper>
  )
}

export default Cryptocurrencies
