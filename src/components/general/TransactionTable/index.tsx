import TransactionOrder from '../TransactionOrder'
import * as S from './styles'

const TransactionTable = () => (
  <S.Wrapper>
    <S.Table>
      <S.Thead>
        <S.Tr>
          <S.Th>Date</S.Th>
          <S.Th>Pair</S.Th>
          <S.Th>Side</S.Th>
          <S.Th>Price</S.Th>
          <S.Th>Fee</S.Th>
          <S.Th>Total</S.Th>
          <S.Th></S.Th>
        </S.Tr>
      </S.Thead>
      <S.Tbody>
        <TransactionOrder
          date="Pending"
          coin="DOT"
          pair="BTC"
          side="Buy"
          price={0.00798219}
          fee={0.00012900}
          total={0.001434442}
          pending={true}
        />
        <TransactionOrder
          date="Pending"
          coin="DOT"
          pair="BTC"
          side="Buy"
          price={0.00798219}
          fee={0.00012900}
          total={0.001434442}
        /> <TransactionOrder
          date="Pending"
          coin="DOT"
          pair="BTC"
          side="Buy"
          price={0.00798219}
          fee={0.00012900}
          total={0.001434442}
        />
      </S.Tbody>
    </S.Table>

  </S.Wrapper>
)

export default TransactionTable
