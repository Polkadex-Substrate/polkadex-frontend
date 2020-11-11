import DateRange from 'components/general/DateRange'
import Dropdown from 'components/general/Dropdown'
import Icon from 'components/general/Icon'
import ListItemButton from 'components/general/ListItemButton'
import dynamic from 'next/dynamic'
import { useState } from 'react'

import OrderBook from '../OrderBook'
import { IGraph } from './IGraph'
import * as S from './styles'

const Chart = dynamic(() => import('components/dashboard/CustomChart'))

const Graph = ({ orderbook, graphData }: IGraph) => {
  const [filters, setFilters] = useState({
    type: 'CandlestickSeries',
  })
  return (
    <S.Wrapper>
      <S.WrapperGraph>
        <S.Header>
          <S.FlexWrapper>
            <S.List>
              <Icon source="Edit"/>

              <S.Item>
                1m
              </S.Item>

              <S.Item>
                1h
              </S.Item>
              <S.Item>
                24h
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
          <Dropdown title="Candles">
            <div>
              <div>Candled</div>
              <div>Area</div>
            </div>
          </Dropdown>
          <S.FlexWrapper>
            <S.List>
              <ListItemButton title="Original" size="Small"/>
              <ListItemButton title="Trading View" size="Small"/>
              <ListItemButton title="Deep Market" size="Small"/>
              <Icon source="Expand"/>
            </S.List>
          </S.FlexWrapper>
        </S.Header>
        {graphData.length > 1 ? <Chart data={graphData} type={filters.type}/> : <p>Loading..</p>}
      </S.WrapperGraph>
      <OrderBook data={orderbook}/>
    </S.Wrapper>
  )
}

export default Graph
