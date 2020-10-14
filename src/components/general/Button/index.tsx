import * as S from './styles'

export type ButtonProps = {
  title: string
  size: 'Small' | 'Medium' | 'Large',
  darkMode: boolean
  fullWidth: boolean
}

const Button = ({ title = "Button", size = "Medium", darkMode = true, fullWidth = false}: ButtonProps) => (
  <S.Wrapper size={size} darkMode={darkMode} fullWidth={fullWidth} >
    {title}
</S.Wrapper>
)

export default Button
