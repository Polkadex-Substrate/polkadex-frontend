import * as S from './styles'

export type ListItemProps = {
  title?: string
  size?: 'Default' | 'Small' | 'Medium' | 'Large',
  darkMode?: boolean
  fullWidth?: boolean,
  selected?: boolean,
  icon?: boolean,
  icontype?: any
}

const ListItemButton = ({ title, size = "Medium", darkMode = true, fullWidth = false, selected = false ,icon= false,icontype='News'}: ListItemProps) => (
  <S.Wrapper  size={size} darkMode={darkMode} fullWidth={fullWidth} selected={selected}  >
    {icon?<span>
          <S.Image src={`/img/icons/${icontype}.svg`} /> 
          {title} 
          </span>
    :<span>{title}</span>
    }
    

</S.Wrapper>
)

export default ListItemButton
