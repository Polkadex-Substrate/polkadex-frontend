import Link from 'components/general/Link'
import NavbarDropdown from 'components/general/NavbarDropdown'
import NavbarLanguage from 'components/general/NavbarLanguage'

import * as S from './styles'

const Navbar = () => {
  return (
  <S.Wrapper>
   
    <S.WrapperLinks>
      <Link title="Market" href="#" />
      <NavbarDropdown title="Trade" />
      <NavbarDropdown title="Derivatives" />
      <NavbarDropdown title="Finance" />
      <NavbarLanguage />

    </S.WrapperLinks>
  </S.Wrapper>
)
}

export default Navbar
