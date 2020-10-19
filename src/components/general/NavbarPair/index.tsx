import Dropdown from '../Dropdown'
import Icon from '../Icon'
import * as S from './styles'
export type NavbarPairProps = {
  coin: {
    name: string
    img: string
  }
  pair: {
    name: string
  }
}
const NavbarPair = ({coin, pair}: NavbarPairProps) => (
  <S.Wrapper>
    <S.WrapperCoin>
      <S.Label>
        Coin
      </S.Label>
      <S.Container>
        <S.Image src={coin.img} />
        <S.Name>
        {coin.name}
      </S.Name>
      </S.Container>

    </S.WrapperCoin>
    <S.WrapperExchange>
      <Icon source="Exchange" />
    </S.WrapperExchange>
    <S.WrapperCoin>
      <S.Label>
        Pair
      </S.Label>

      <Dropdown title={pair.name}/>
    </S.WrapperCoin>
</S.Wrapper>
)

export default NavbarPair
