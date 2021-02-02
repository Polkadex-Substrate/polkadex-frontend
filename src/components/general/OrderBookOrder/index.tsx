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
        <S.Image  >
          <img src={exchangeImg} width="100%" height="100%" alt="image"/>
          </S.Image>
        <span>{data.total} USDT</span>
      </S.ContainerFlex>
    </S.Td>
  </S.Tr>
)

export default OrderBookOrder
