import { IOrderBookData } from 'templates/dashboard/blocks/Graph/IGraph'

import * as S from './styles'

export type Props = {
  data: IOrderBookData
}
const OrderBookOrder_b = ({data}:Props) => (
  <S.Tr>
    <S.Td>
      {data.price}
    </S.Td>
    <S.Td>
      <S.ContainerFlex>
        <S.Span data={data}>{data.amount} {data.coin}</S.Span>
        <S.Image src="/img/icons/Exchange_B.svg"/>
        <span>{data.total} {data.pair}</span>
      </S.ContainerFlex>
    </S.Td>
  </S.Tr>
)

export default OrderBookOrder_b
