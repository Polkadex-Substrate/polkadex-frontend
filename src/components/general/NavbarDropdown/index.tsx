import React from 'react';
import { useTheme, Theme } from 'Context/ThemeContext';
import * as S from './styles'

export type NavbarDropdownProps = {
  title: string
}

const NavbarDropdown = ({ title = "NavbarDropdown" }: NavbarDropdownProps) => {
  const { theme, setTheme } = useTheme();
  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>{title}</S.Title>
        <S.WrapperImage>
        <S.Image src = {theme === Theme.Dark ? "/img/icons/ArrowTop.svg" : `/img/icons/ArrowDownBlack.svg` }/>
         </S.WrapperImage>
      </S.Header>     
    </S.Wrapper>
  )
}

export default NavbarDropdown
