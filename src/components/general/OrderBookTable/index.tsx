import OrderBookOrder from '../OrderBookOrder'
import * as S from './styles'

export type OrderBookTableProps = {
  active?: number
}

const OrderBookTable = ({ active = 0.034900}:OrderBookTableProps) => (
  <S.Wrapper>
    <S.Table>
        <S.Thead>
        <S.Tr>
          <S.Th>Price</S.Th>
          <S.Th>Amount</S.Th>
        </S.Tr>
        </S.Thead>
        <S.Tbody>
            <OrderBookOrder price={0.03494} amountCoin={0.562844} coin="DOT" amountPair={2.62844} pair="BTC" />
            <OrderBookOrder price={0.03491} amountCoin={0.625844} coin="DOT" amountPair={2.62844} pair="BTC" />
            <OrderBookOrder price={0.04349} amountCoin={0.652844} coin="DOT" amountPair={2.62844} pair="BTC" />
            <OrderBookOrder price={0.03459} amountCoin={0.628441} coin="DOT" amountPair={2.62844} pair="BTC" />
            <OrderBookOrder price={0.03906} amountCoin={0.662844} coin="DOT" amountPair={2.62844} pair="BTC" />
      </S.Tbody>
      </S.Table>

      <S.LastTransaction active={active}>
        <p>Latest transaction <span>{active} </span></p>
    </S.LastTransaction>
    <S.Table>
        <S.Thead>
          <S.Tr>
            <S.Th>Price</S.Th>
            <S.Th>Amount</S.Th>
          </S.Tr>
        </S.Thead>
        <S.Tbody>
            <OrderBookOrder sell={true} price={0.0349200} amountCoin={0.628244} coin="DOT" amountPair={2.62844} pair="BTC" />
            <OrderBookOrder sell={true} price={0.0349200} amountCoin={0.628144} coin="DOT" amountPair={2.62844} pair="BTC" />
            <OrderBookOrder sell={true} price={0.0349300} amountCoin={0.628244} coin="DOT" amountPair={2.62844} pair="BTC" />
            <OrderBookOrder sell={true} price={0.0349400} amountCoin={0.628444} coin="DOT" amountPair={2.62844} pair="BTC" />
            <OrderBookOrder sell={true} price={0.0344900} amountCoin={0.628144} coin="DOT" amountPair={2.62844} pair="BTC" />
        </S.Tbody>
    </S.Table>

  </S.Wrapper>
)

export default OrderBookTable
