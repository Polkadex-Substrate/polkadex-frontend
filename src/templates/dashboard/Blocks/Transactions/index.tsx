import TransactionsHeader from 'components/general/TransactionsHeader'
import TransactionTable from 'components/general/TransactionTable'

import * as S from './styles'

const Transactions = () => (
<S.Wrapper>
    <TransactionsHeader />
    <TransactionTable />
</S.Wrapper>
)

export default Transactions
