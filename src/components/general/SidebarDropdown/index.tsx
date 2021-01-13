import * as S from './styles'

export type SidebarDropdownProps = {
  backgroundcolor: string;
  rotation:string;
  hoverrotation:string;
}



const SidebarDropdown = ({ rotation = 'rotate(270deg)', backgroundcolor='#1C2023', hoverrotation='rotate(0deg)' }: SidebarDropdownProps) => {
  return (
    <S.Wrapper hoverrotation={hoverrotation}>
     
        <S.WrapperImage backgroundcolor = {backgroundcolor}>
          <S.Image src="/img/icons/ArrowTop.svg" rotation = {rotation} />
        </S.WrapperImage>
      
     
    </S.Wrapper>
  )
}

export default SidebarDropdown
