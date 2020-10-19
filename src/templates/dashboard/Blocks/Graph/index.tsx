import Dropdown from 'components/general/Dropdown'
import Icon from 'components/general/Icon'
import ListItemButton from 'components/general/ListItemButton'

import OrderBook from '../OrderBook'
import * as S from './styles'

const Graph = () => (
  <S.Wrapper>
    <S.WrapperGraph>
      <S.Header>
      <S.FlexWrapper>
        <S.List>
          <Icon source="Edit" />
          <p> Date here</p>
          <Icon source="History" />
        </S.List>
      </S.FlexWrapper>
      <Dropdown title="Candles" />
      <S.FlexWrapper>
        <S.List>
          <ListItemButton title="Original" size="Small" />
          <ListItemButton title="Trading View" size="Small" />
          <ListItemButton title="Deep Market" size="Small" />
          <Icon source="Expand" />
        </S.List>
      </S.FlexWrapper>
    </S.Header>
    <S.Graph>
      Graph
    </S.Graph>
    </S.WrapperGraph>
    <OrderBook />

</S.Wrapper>
)

export default Graph
