import Button from 'components/general/Button'

import OrderBook from '../OrderBook'
import * as S from './styles'

const Graph = () => (
  <S.Wrapper>
    <S.WrapperGraph>
      <Button title="Trading View"/>
    </S.WrapperGraph>
    <OrderBook />
</S.Wrapper>
)

export default Graph
