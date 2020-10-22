import React, { useState } from 'react'

import Graph from './blocks/Graph'
import Market from './blocks/Market'
import MarketOrder from './blocks/MarketOrder'
import Menu from './blocks/Menu'
import Navbar from './blocks/Navbar'
import Transactions from './blocks/Transactions'
import * as S from './styles'

export default function Dashboard() {
  const [state, setState] = useState(false)

  return (
    <S.Wrapper >
      <Menu handleChange={() => setState(!state)} />
      {state && <Market />}
      <S.WrapperMain >
        <Navbar />
        <S.WrapperGraph>
          <Graph />
          <MarketOrder />
        </S.WrapperGraph>
      <Transactions />
      </S.WrapperMain>

    </S.Wrapper>
  )
}
