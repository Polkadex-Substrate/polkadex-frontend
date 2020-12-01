import * as S from './styles'

export type ListItemProps = {
  title?: string
  size?: 'Default' | 'Small' | 'Medium' | 'Large',
  darkMode?: boolean
  fullWidth?: boolean,
  selected?: boolean,
}

const ListItemButton = ({ title, size = "Medium", darkMode = true, fullWidth = false, selected = false}: ListItemProps) => (
  <S.Wrapper  size={size} darkMode={darkMode} fullWidth={fullWidth} selected={selected}  >
    {title}
</S.Wrapper>
)

export default ListItemButton
