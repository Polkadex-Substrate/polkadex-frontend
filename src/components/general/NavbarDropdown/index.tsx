import { useTheme,Theme } from 'Context/ThemeContext';
import * as S from './styles'

export type NavbarDropdownProps = {
  title: string
}

const NavbarDropdown = ({ title = "NavbarDropdown" }: NavbarDropdownProps) => {
  const { theme, setTheme } = useTheme();
  return (
    <S.Wrapper>
      <S.Header>
        <S.Wrapper>
        </S.Wrapper>
        <S.Title>{title}</S.Title>
        <S.WrapperImage>
          {theme ==  Theme.Dark
          ?
          <S.Image src="/img/icons/ArrowTop.svg" />
          :
          <S.Image src={`/img/icons/ArrowDownBlack.svg`} />
          }
        </S.WrapperImage>
      </S.Header>     
    </S.Wrapper>
  )
}

export default NavbarDropdown
