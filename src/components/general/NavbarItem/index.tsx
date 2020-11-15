
import * as S from './styles'

export type NavbarItemPops = {
  label?: string
  info?: string
}
const NavbarItem = ({label, info}: NavbarItemPops) => (
<S.Wrapper>
    <S.Label>
      {label}
    </S.Label>
    <S.Info>
      {info}
    </S.Info>
</S.Wrapper>
)

export default NavbarItem
