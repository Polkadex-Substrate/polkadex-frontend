import React from 'react'
import { IOrderBookData } from 'templates/dashboard/blocks/Graph/IGraph'

import * as S from './styles'
import OrderBookTableBody from '../OrderBookTableBody'

export type OrderBookTableProps = {
  orderBookAsks: IOrderBookData[];
  orderBookBids: IOrderBookData[];
  latestTransaction: string;
  latestTransactionType: string;
}

const OrderBookTable = ({ latestTransaction, latestTransactionType, orderBookAsks, orderBookBids }: OrderBookTableProps) => {

  return (
  <S.Wrapper>
    <S.Table>
        <S.Thead>
        <S.Tr>
          <S.Th>Price</S.Th>
          <S.Th>Amount</S.Th>
        </S.Tr>
        </S.Thead>
        <OrderBookTableBody data={orderBookAsks} isScrollBottom={true} exchangeImg={"/img/icons/Exchange_B.svg"} />
    </S.Table>

    <S.LastTransaction>
      <p>
        Latest transaction&nbsp;
        {
          latestTransactionType ?
            (
              latestTransactionType === 'AskLimit'
                ? <S.VolumeLow>
                    {latestTransaction}
                </S.VolumeLow>
                : <S.VolumeHigh>
                    {latestTransaction}
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
        <OrderBookTableBody data={orderBookBids} isScrollBottom={false} exchangeImg={"/img/icons/Exchange_A.svg"}/>
    </S.Table>

  </S.Wrapper>
)}

export default OrderBookTable
