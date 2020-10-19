import React from 'react'

import Graph from './blocks/Graph'
import MarketOrder from './blocks/MarketOrder'
import Menu from './blocks/Menu'
import Navbar from './blocks/Navbar'
import Transactions from './blocks/Transactions'
import * as S from './styles'

export default function Dashboard() {
  return (
    <S.Wrapper>
      <Menu />
      <S.WrapperMain>
        <Navbar />
        <S.WrapperGraph>
          <Graph />
          <MarketOrder />
      </S.WrapperGraph>

      {/* <Market /> */}
      <Transactions />
      </S.WrapperMain>

    </S.Wrapper>
  )
}
