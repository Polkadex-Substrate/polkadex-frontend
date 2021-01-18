import DateRange from 'components/general/DateRange'
import Icon from 'components/general/Icon'
import ListItemButton from 'components/general/ListItemButton'
import dynamic from 'next/dynamic'
import { useState } from 'react'

import OrderBook from '../OrderBook'
import { IGraph } from './IGraph'
import * as S from './styles'
const ChartContainer = dynamic(() => import('../../../../components/swappage/CustomChart').then(), { ssr: false })

const Graph = ({ orderBookAsks, orderBookBids, latestTransaction, latestTransactionType }: IGraph) => {

  const [filters, setFilters] = useState({
    type: "CandlestickSeries"
  })
  return (
    <S.Wrapper>
      <S.WrapperGraph>
        <S.Header>
          <S.FlexWrapper>
            {/* <Icon source="Edit" /> */}
            <S.HeaderFont>DOT/BTC</S.HeaderFont>
            <S.List>
              
              <S.Item >
                1H
              </S.Item>
              <S.Item selected>
                24H
              </S.Item>
              <S.Item>
                7D
              </S.Item>
              <S.Item>
                1M
              </S.Item>
              <S.Item>
                1Y
              </S.Item>
              <S.Item>
                All
              </S.Item>
              <DateRange position='left' backgroundcolor  = 'Black'/>
       
            </S.List>
          </S.FlexWrapper>
      
          <S.FlexWrapper>
            <S.List>
              
              <ListItemButton title="Baseline" size="Default" icon= {true}  icontype='show_chart-white' />
              <ListItemButton title="Candle" size="Default" icon= {true}  icontype='Candles' />
              <Icon source="Expand"/>
            </S.List>
          </S.FlexWrapper>
        </S.Header>
        <ChartContainer />
      </S.WrapperGraph>
      <OrderBook orderBookAsks={orderBookAsks} orderBookBids={orderBookBids} latestTransaction={latestTransaction} latestTransactionType={latestTransactionType}/>
    </S.Wrapper>
  )
}

export default Graph
