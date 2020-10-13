import Dropdown from 'components/general/Dropdown'
import Heading from 'components/general/Heading'
import Icon from 'components/general/Icon'
import OrderBookTable from 'components/general/OrderBookTable'

import * as S from './styles'

const OrderBook = () => (
<S.Wrapper>
    <S.WrapperTitle>
      <Heading title="Order Book" />
      <S.ContainerTitle>
        <S.ContainerActions>
          <Icon source="OrderAsc" background="darkGray" />
          <Icon source="Order" background="darkGray" />
          <Icon source="OrderDesc" background="darkGray" />
        </S.ContainerActions>
        <Dropdown title="0.1">
          <p>Test</p>
        </Dropdown>
      </S.ContainerTitle>
    </S.WrapperTitle>
    <S.WrapperTable>
      <OrderBookTable />
    </S.WrapperTable>
</S.Wrapper>
)

export default OrderBook
