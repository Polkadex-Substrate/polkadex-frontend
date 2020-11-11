import { IOrderBookData } from 'templates/dashboard/blocks/Graph/IGraph'

import OrderBookOrder from '../OrderBookOrder'
import * as S from './styles'

export type OrderBookTableProps = {
  data: IOrderBookData[];
  latestTransaction: number;
  latestTransactionType: string;
}

const OrderBookTable = ({ latestTransaction, latestTransactionType, data }: OrderBookTableProps) => {
  console.log(latestTransaction)

  const filterBy = (side) => data.filter(item => item.side === side)

  return (
    <S.Wrapper>
      <S.Table>
        <S.Thead>
        <S.Tr>
          <S.Th>Price</S.Th>
          <S.Th>Amount</S.Th>
        </S.Tr>
        </S.Thead>
        <S.Tbody>
          {data && filterBy('sell').map(item => ( <OrderBookOrder key={item.id} data={item}/> ))}
        </S.Tbody>
      </S.Table>


      <S.LastTransaction>
        <p>
          Latest transaction&nbsp;
          {
            latestTransactionType ?
              (
                latestTransactionType === 'AskLimit'
                  ? <S.VolumeLow>
                    <span>
                      {latestTransaction}
                    </span>
                  </S.VolumeLow>
                  : <S.VolumeHigh>
                    <span>
                      {latestTransaction}
                    </span>
                  </S.VolumeHigh>
              )
              : <span>
                {latestTransaction}
              </span>
          }
        </p>
      </S.LastTransaction>

      <S.Table>
        <S.Thead>
          <S.Tr>
            <S.Th>Price</S.Th>
            <S.Th>Amount</S.Th>
          </S.Tr>
        </S.Thead>
        <S.Tbody>
          {data && filterBy('buy').map(item => ( <OrderBookOrder key={item.id} data={item}/> ))}
        </S.Tbody>
      </S.Table>
    </S.Wrapper>
  )
}

export default OrderBookTable
