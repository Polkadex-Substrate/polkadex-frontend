import DateRange from 'components/general/DateRange'
import Icon from 'components/general/Icon'
import ListItemButton from 'components/general/ListItemButton'
import dynamic from 'next/dynamic'
import { useState } from 'react'

import OrderBook from '../OrderBook'
import { IGraph } from './IGraph'
import * as S from './styles'
const ChartContainer = dynamic(() => import('../../../../components/dashboard/CustomChart').then(), { ssr: false })

const Graph = ({ orderBookAsks, orderBookBids, latestTransaction, latestTransactionType }: IGraph) => {

  const [filters, setFilters] = useState({
    type: "CandlestickSeries"
  })
  return (
    <S.Wrapper>
      <S.WrapperGraph>
        <S.Header>
          <S.FlexWrapper>
            <Icon source="Edit" />
            <S.List>
              <S.Item selected>
                3m
              </S.Item>
              <S.Item>
                1H
              </S.Item>
              <S.Item>
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
                all
              </S.Item>
              <DateRange position='left'/>
            </S.List>
          </S.FlexWrapper>
          {/*<Dropdown title="Candles">*/}
          {/*  <div>*/}
          {/*    /!* <div>Candled</div> *!/*/}
          {/*    /!* <div>Area</div> *!/*/}
          {/*</div>*/}
          {/*</Dropdown>*/}
          <S.FlexWrapper>
            <S.List>
              <ListItemButton title="Original" size="Default" selected />
              <ListItemButton title="Trading View" size="Default" />
              <ListItemButton title="Market Depth" size="Default" />
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
