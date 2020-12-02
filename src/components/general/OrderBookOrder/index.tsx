import { IOrderBookData } from 'templates/dashboard/blocks/Graph/IGraph'

import * as S from './styles'

export type Props = {
  data: IOrderBookData
  exchangeImg: string
}
const OrderBookOrder = ({data, exchangeImg}:Props) => (
  <S.Tr>
    <S.Td>
      {data.price}
    </S.Td>
    <S.Td>
      <S.ContainerFlex>
        <S.Span data={data}>{data.amount} {data.coin}</S.Span>
        <S.Image src={exchangeImg} />
        <span>{data.total} USDT</span>
      </S.ContainerFlex>
    </S.Td>
  </S.Tr>
)

export default OrderBookOrder
