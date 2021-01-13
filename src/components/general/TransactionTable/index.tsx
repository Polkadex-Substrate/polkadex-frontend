import { ITransactionData, ITransactions } from 'templates/dashboard/blocks/Transactions/ITransactions'

import TransactionOrder from '../TransactionOrder'
import * as S from './styles'

type Props = {
  data?: ITransactionData[]
  remove?: (id:string) => void
  filters?: {
    hiddenPairs: boolean
    onlyBuy: boolean
    onlySell: boolean
    status: string
  }
}

const TransactionTable = ({ data, remove, filters }: Props) => (
  <>
    {data && <S.Wrapper>
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
          {
            data && data.filter(item => {
              if(filters.onlyBuy && !filters.onlySell) {
                return item.side === 'BidLimit'
              } else if(filters.onlySell && !filters.onlyBuy) {
                return item.side === 'AskLimit'
              } else {
                return true;
              }
            })
            .map((item, key) => (
              <TransactionOrder
                key={key}
                data={item}
                remove={() => remove(item.id)}
              />
            ))
          }
        </S.Tbody>
      </S.Table>
    </S.Wrapper> }
  </>

)

export default TransactionTable
