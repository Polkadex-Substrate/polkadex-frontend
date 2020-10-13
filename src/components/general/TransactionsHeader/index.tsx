import Checkbox from '../Checkbox'
import Dropdown from '../Dropdown'
import Icon from '../Icon'
import * as S from './styles'

const TransactionsHeader = () => (
<S.Wrapper>
    <S.Tab>
      <li>Olien Orders</li>
      <li>Order History</li>
      <li>Trade History</li>
      <li>Funds</li>
    </S.Tab>
    <S.WrapperActions>
      <Checkbox title="Hide Otgher Pairs" />
      <S.MarketActions>
          <Checkbox title="Buy" />
          <Checkbox title="Sell" />
        </S.MarketActions>
      <S.TransactionsActions>
        <Dropdown title="All Transactions">
          <p>exmeplo</p>
        </Dropdown>
        <Icon source="History" background="darkGray"/>
      </S.TransactionsActions>

    </S.WrapperActions>
</S.Wrapper>
)

export default TransactionsHeader
