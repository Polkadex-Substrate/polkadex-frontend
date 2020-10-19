import * as S from './styles'
export type OrderBookOrderProps = {
  price: number
  amountCoin: number
  coin: string
  amountPair: number
  pair: string
  sell?: boolean
}
const OrderBookOrder = ({ price, sell = false, amountCoin, coin, amountPair, pair}:OrderBookOrderProps) => (
  <S.Tr>
    <S.Td>
      {price}
    </S.Td>

    <S.Td>
      <S.ContainerFlex>
        <S.Span sell={sell}>{amountCoin} {coin}</S.Span>
        <S.Image src="/img/icons/Exchange.svg"/>
        <span>{amountPair} {pair}</span>
      </S.ContainerFlex>
    </S.Td>
  </S.Tr>
)

export default OrderBookOrder
