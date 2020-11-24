import DateRange from 'components/general/DateRange'
import Dropdown from 'components/general/Dropdown'
import Icon from 'components/general/Icon'
import ListItemButton from 'components/general/ListItemButton'
import dynamic from 'next/dynamic'
import { useState } from 'react'

import OrderBook from '../OrderBook'
import { IGraph } from './IGraph'
import * as S from './styles'
const ChartContainer = dynamic(() => import('../../../../components/dashboard/CustomChart'), { ssr: false })

const Graph = ({ orderBook, graphData }: IGraph) => {

  const [filters, setFilters] = useState({
    type: "CandlestickSeries"
  })
  return (
    <S.Wrapper>
      <S.WrapperGraph>
        <S.Header>
          <S.FlexWrapper>
            <S.List>
              <Icon source="Edit" />

              <S.Item>
                1h
              </S.Item>
              <S.Item>
                24h
              </S.Item>
              <S.Item>
                7d
              </S.Item>
              <S.Item>
                1m
              </S.Item>
              <S.Item>
                1y
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
              <ListItemButton title="Original" size="Default" />
              <ListItemButton title="Trading View" size="Default" />
              <ListItemButton title="Deep Market" size="Default" />
              <Icon source="Expand"/>
            </S.List>
          </S.FlexWrapper>
        </S.Header>
        {graphData.length > 1 ? <ChartContainer /> : <p>Loading..</p>}
      </S.WrapperGraph>
      <OrderBook data={orderBook}/>
    </S.Wrapper>
  )
}

export default Graph
