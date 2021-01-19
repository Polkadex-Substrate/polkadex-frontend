import * as S from './styles'

export type SidebarDropdownProps = {
  backgroundColor: string;
  rotation:string;
  hoverRotation:string;
  icon?: 'None' | 'ArrowTop' | 'ArrowDownBlack'
}



const SidebarDropdown = ({ rotation = 'rotate(270deg)', backgroundColor='#1C2023', hoverRotation='rotate(0deg)' , icon='ArrowTop'}: SidebarDropdownProps) => {
  return (
    <S.Wrapper hoverRotation={hoverRotation}>
     
        <S.WrapperImage backgroundColor = {backgroundColor}>
          <S.Image src={`/img/icons/${icon}.svg`} rotation = {rotation} />
        </S.WrapperImage>
      
     
    </S.Wrapper>
  )
}

export default SidebarDropdown
