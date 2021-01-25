import React from 'react'
import * as S from './styles'

import NavbarDropdown from '../../../../components/general/NavbarDropdown'
import NavbarLanguage from '../../../../components/general/NavbarLanguage'

const Navigation = () => (
  <S.Wrapper>
    <S.Navbar>
      <S.Link href="#">Markets</S.Link>
      <NavbarDropdown title="Trade" />
      <NavbarDropdown title="Derivatives" />
      <NavbarDropdown title="Finance" />
      <NavbarLanguage />
    </S.Navbar>
  </S.Wrapper>
)

export default Navigation
