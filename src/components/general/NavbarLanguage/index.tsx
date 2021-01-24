import { useTheme ,Theme} from 'Context/ThemeContext';
import NavbarSingleCurrency from '../NavbarSingleCurrency'
import NavbarSingleLanguage from '../NavbarSingleLanguage'
import * as S from './styles'

const NavbarLanguage = () => {
  const { theme, setTheme } = useTheme();

  return (
    <S.Wrapper>
      <S.Header>
          <S.WrapperFlag>
            <S.Image src="/img/icons/EN.svg"/>
          </S.WrapperFlag>
          <S.Title>EN/USD</S.Title>
          <S.WrapperImage>
          {theme ==  Theme.Dark
          ?
          <S.Image src="/img/icons/ArrowTop.svg" />
          :
          <S.Image src={`/img/icons/ArrowDownBlack.svg`} />
          }
          </S.WrapperImage>
      </S.Header>
      <S.WrapperContent className="animation">
        <S.ContainerContent>
          <S.WrapperCountry>
            <S.TitleLanguage>
              Language
            </S.TitleLanguage>
            <NavbarSingleLanguage title="English" flag="EN" />
            <NavbarSingleLanguage title="Français" flag="FR" />
            <NavbarSingleLanguage title="Español" flag="ES" />
            <NavbarSingleLanguage title="Deutsch" flag="DE" />
            <NavbarSingleLanguage title="Português" flag="PT" />
          </S.WrapperCountry>
          <S.WrapperCurrency>
            <S.TitleLanguage>
              Currency
            </S.TitleLanguage>
            <NavbarSingleCurrency title="USD" />
            <NavbarSingleCurrency title="EUR" />
            <NavbarSingleCurrency title="BRL" />
            <NavbarSingleCurrency title="CAD" />
          </S.WrapperCurrency>
        </S.ContainerContent>
      </S.WrapperContent>
    </S.Wrapper>
  )
}

export default NavbarLanguage
