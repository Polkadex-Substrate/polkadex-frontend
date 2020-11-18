import Dropdown from 'components/general/Dropdown'
import Heading from 'components/general/Heading'
import Icon from 'components/general/Icon'
import MarketTable from 'components/general/MarketTable'
import SearchInput from 'components/general/SearchInput'

import * as S from './styles'

const Market = ({ coins = [] }) => (
  <S.Section >
    <S.Header>
      <Heading title="Market" />
      <Dropdown title="Pair | USD">
        <p>...</p>
      </Dropdown>
    </S.Header>
    <S.WrapperActions>
      <SearchInput placeholder="Search.." type="search"/>
      <S.ContainerActions>
        <Icon source="Settings" size="Small" background="DarkGray"/>
        <Icon source="Star" size="Small" background="None" />
      </S.ContainerActions>
    </S.WrapperActions>
    <S.WrapperTokens>
      <MarketTable coins={coins}/>
    </S.WrapperTokens>
  </S.Section>
)

export default Market
