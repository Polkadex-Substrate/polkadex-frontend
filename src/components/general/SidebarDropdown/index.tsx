import * as S from './styles'

export type SidebarDropdownProps = {
  backgroundcolor: string;
  rotation:string;
  hoverrotation:string;
  icon?: 'None' | 'ArrowTop' | 'ArrowDownBlack'
}



const SidebarDropdown = ({ rotation = 'rotate(270deg)', backgroundcolor='#1C2023', hoverrotation='rotate(0deg)' , icon='ArrowTop'}: SidebarDropdownProps) => {
  return (
    <S.Wrapper hoverrotation={hoverrotation}>
     
        <S.WrapperImage backgroundcolor = {backgroundcolor}>
          <S.Image src={`/img/icons/${icon}.svg`} rotation = {rotation} />
        </S.WrapperImage>
      
     
    </S.Wrapper>
  )
}

export default SidebarDropdown
