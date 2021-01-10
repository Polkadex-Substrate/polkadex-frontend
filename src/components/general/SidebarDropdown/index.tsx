import * as S from './styles'

export type NavbarDropdownProps = {
  title: string
}

const SidebarDropdown = () => {
  return (
    <S.Wrapper>
     
        <S.WrapperImage>
          <S.Image src="/img/icons/ArrowTop.svg" />
        </S.WrapperImage>
      
     
    </S.Wrapper>
  )
}

export default SidebarDropdown
