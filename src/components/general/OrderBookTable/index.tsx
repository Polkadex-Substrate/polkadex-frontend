import OrderBookOrder from '../OrderBookOrder'
import * as S from './styles'

const OrderBookTable = () => (
  <S.Wrapper>
    <S.Table>
      <S.Thead>
        <S.Tr>
          <S.Th>Price</S.Th>
          <S.Th>Amount</S.Th>
        </S.Tr>
      </S.Thead>
      <S.Tbody>
        <S.ContainerBuy>
          <OrderBookOrder price={0.034900} amountCoin={0.62844} coin="DOT" amountPair={2.62844} pair="BTC" />
          <OrderBookOrder price={0.034900} amountCoin={0.62844} coin="DOT" amountPair={2.62844} pair="BTC" />
          <OrderBookOrder price={0.034900} amountCoin={0.62844} coin="DOT" amountPair={2.62844} pair="BTC" />
        </S.ContainerBuy>
        <S.LastTransaction>
          <p>Latest transaction 0.03176811</p>
        </S.LastTransaction>
        <S.ContainerSell>
          <OrderBookOrder price={0.034900} amountCoin={0.62844} coin="DOT" amountPair={2.62844} pair="BTC" />
          <OrderBookOrder price={0.034900} amountCoin={0.62844} coin="DOT" amountPair={2.62844} pair="BTC" />
          <OrderBookOrder price={0.034900} amountCoin={0.62844} coin="DOT" amountPair={2.62844} pair="BTC" />
        </S.ContainerSell>

      </S.Tbody>
    </S.Table>

  </S.Wrapper>
)

export default OrderBookTable
