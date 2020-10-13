import * as S from './styles'
export type OrderBookOrderProps = {
  price: number
  amountCoin: number
  coin: string
  amountPair: number
  pair: string
}
const OrderBookOrder = ({ price, amountCoin, coin, amountPair, pair}:OrderBookOrderProps) => (
  <S.Tr>
    <S.Td>
      {price}
    </S.Td>

    <S.Td>
      <S.ContainerFlex>
        <span>{amountCoin} {coin}</span>
        <S.Image src="/img/icons/Exchange.svg"/>
        <span>{amountPair} {pair}</span>
      </S.ContainerFlex>
    </S.Td>
  </S.Tr>
)

export default OrderBookOrder
