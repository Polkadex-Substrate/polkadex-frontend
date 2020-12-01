import React, { useEffect, useRef } from 'react'

import * as S from '../OrderBookTable/styles'
import OrderBookOrder from '../OrderBookOrder'

const OrderBookTableBody = ({ data, scrollBottom, exchangeImg }) => {
  let elementRef = useRef(null);

  useEffect(() => scrollBottom && elementRef.current.scrollIntoView({ behavior: 'smooth' }), []);

  return (
    <S.Tbody>
      { data.map(item => <OrderBookOrder key={item.id} data={item} exchangeImg={exchangeImg} /> ) }
      {scrollBottom && <div ref={elementRef} />}
    </S.Tbody>
  )
}

export default OrderBookTableBody;
