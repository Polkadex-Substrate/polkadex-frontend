import OrderBookOrder from '../OrderBookOrder'
import * as S from './styles'

const OrderBookTable = () => (
  <S.Wrapper>
    <S.Table>
      <S.WrapperBuy>
        <S.Thead>
        <S.Tr>
          <S.Th>Price</S.Th>
          <S.Th>Amount</S.Th>
        </S.Tr>
        </S.Thead>
        <S.Tbody>
          <S.Container>
            <OrderBookOrder price={0.03494} amountCoin={0.562844} coin="DOT" amountPair={2.62844} pair="BTC" />
            <OrderBookOrder price={0.03491} amountCoin={0.625844} coin="DOT" amountPair={2.62844} pair="BTC" />
            <OrderBookOrder price={0.04349} amountCoin={0.652844} coin="DOT" amountPair={2.62844} pair="BTC" />
            <OrderBookOrder price={0.03459} amountCoin={0.628441} coin="DOT" amountPair={2.62844} pair="BTC" />
            <OrderBookOrder price={0.03906} amountCoin={0.662844} coin="DOT" amountPair={2.62844} pair="BTC" />
          </S.Container>
        </S.Tbody>
      </S.WrapperBuy>
      <S.LastTransaction>
          <p>Latest transaction 0.03176811</p>
        </S.LastTransaction>
      <S.WrapperSell>
        <S.Thead>
          <S.Tr>
            <S.Th>Price</S.Th>
            <S.Th>Amount</S.Th>
          </S.Tr>
        </S.Thead>
        <S.Tbody>
          <S.Container>
            <OrderBookOrder sell={true} price={0.0349200} amountCoin={0.628244} coin="DOT" amountPair={2.62844} pair="BTC" />
            <OrderBookOrder sell={true} price={0.0349200} amountCoin={0.628144} coin="DOT" amountPair={2.62844} pair="BTC" />
            <OrderBookOrder sell={true} price={0.0349300} amountCoin={0.628244} coin="DOT" amountPair={2.62844} pair="BTC" />
            <OrderBookOrder sell={true} price={0.0349400} amountCoin={0.628444} coin="DOT" amountPair={2.62844} pair="BTC" />
            <OrderBookOrder sell={true} price={0.0344900} amountCoin={0.628144} coin="DOT" amountPair={2.62844} pair="BTC" />
          </S.Container>
        </S.Tbody>
      </S.WrapperSell>
    </S.Table>

  </S.Wrapper>
)

export default OrderBookTable
