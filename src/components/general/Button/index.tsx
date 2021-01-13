import * as S from './styles'

export type ButtonProps = {
  title: string
  size?: 'Small' | 'Medium' | 'Large',
  darkMode?: boolean
  fullWidth?: boolean
  type?: "submit" | "button"
  click?: any
  disabled?: boolean
}

const Button = ({ title = "Button", size = "Medium", darkMode = true, fullWidth = false, type="button", click, disabled=false }: ButtonProps) => (
  <S.Wrapper type={type} size={size} darkMode={darkMode} fullWidth={fullWidth} onClick={click} disabled={disabled}>
    {title}
  </S.Wrapper>
)

export default Button
