import React, { useRef } from 'react'

import * as S from '../OrderBookTable/styles'
import OrderBookOrder from '../OrderBookOrder'

const OrderBookTableBody = ({ data, isScrollBottom, exchangeImg }) => {
  let tableEndRef = useRef();

  const scrollToBottom = () => {
    if (tableEndRef && tableEndRef.current) {
      const scroll = tableEndRef.current.scrollHeight - tableEndRef.current.clientHeight;
      tableEndRef.current.scrollTo(0, scroll);
    }
  }

  return (
    <S.Tbody ref={tableEndRef}>
      {data.map(item => <OrderBookOrder key={item.id} data={item} exchangeImg={exchangeImg}/>)}
      {isScrollBottom && scrollToBottom()}
    </S.Tbody>
  )
}

export default OrderBookTableBody;
