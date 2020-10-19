import Checkbox from 'components/general/Checkbox'
import Dropdown from 'components/general/Dropdown'
import Icon from 'components/general/Icon'
import TransactionTable from 'components/general/TransactionTable'

import * as S from './styles'

const Transactions = () => (
<S.Section>
    <S.Header>
      <S.Tab>
        <li>
          <a href="#">Open Orders</a>
        </li>
        <li>
          <a href="#">Order History</a></li>
        <li>
          <a href="#">Trade History</a>
        </li>
        <li>
          <a href="#">Funds</a>
        </li>
      </S.Tab>
      <S.WrapperActions>
        <Checkbox title="Hide Other Pairs" checked={true}/>
        <S.ContainerActions>
          <Checkbox title="Buy" />
          <Checkbox title="Sell" />
        </S.ContainerActions>
        <S.ContainerTransactions>
          <Dropdown title="All Transactions">
            <p>Testing..</p>
          </Dropdown>
          <Icon source="Transactions" background="Gray" size="Medium" />
        </S.ContainerTransactions>
      </S.WrapperActions>
    </S.Header>
    <TransactionTable />
  </S.Section>
)

export default Transactions
