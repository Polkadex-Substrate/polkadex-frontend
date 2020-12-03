import React, { useEffect, useRef } from 'react'

import * as S from '../OrderBookTable/styles'
import OrderBookOrder from '../OrderBookOrder'

const OrderBookTableBody = ({ data, isScrollBottom, exchangeImg }) => {
  let tableEndRef = useRef(null);

  const scrollToBottom = () => {
    if (tableEndRef?.current) {
      const scroll = tableEndRef?.current?.scrollHeight - tableEndRef?.current?.clientHeight;
      tableEndRef.current.scrollTo(0, scroll);
    }
  }

  useEffect(() => {
    if (isScrollBottom) {
      scrollToBottom();
    }

    return;
  }, [data]);

  return (
    <S.Tbody ref={tableEndRef}>
      {data.map(item => <OrderBookOrder key={item.id} data={item} exchangeImg={exchangeImg}/>)}
    </S.Tbody>
  )
}

export default OrderBookTableBody;
