import Checkbox from 'components/general/Checkbox'
import Dropdown from 'components/general/Dropdown'
import Icon from 'components/general/Icon'
import TransactionTable from 'components/general/TransactionTable'

import * as S from './styles'

const Transactions = () => (
<S.Section>
    <S.Header>
      <S.Tab>
        <li>Open Orders</li>
        <li>Order History</li>
        <li>Trade History</li>
        <li>Funds</li>
      </S.Tab>
      <S.WrapperActions>
        <Checkbox title="Hide Otgher Pairs" />
        <S.ContainerActions>
          <Checkbox title="Buy" />
          <Checkbox title="Sell" />
        </S.ContainerActions>
        <S.ContainerTransactions>
          <Dropdown title="All Transactions">
            <p>exmeplo</p>
          </Dropdown>
          <Icon source="History" background="darkGray" />
        </S.ContainerTransactions>
      </S.WrapperActions>
    </S.Header>
    <TransactionTable />
  </S.Section>
)

export default Transactions
