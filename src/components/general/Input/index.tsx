import * as S from './styles'

export type InputProps = {
  label?: string
  icon?: 'None' | 'ArrowVerticalBottom' | 'ArrowVerticalTop'
  placeholder?: string
  type?: 'text' | 'email' | 'password' | 'url' | 'number'
  value?: any
  inputInfo?: string
  fullWidth?: boolean
  setValue?: any
}

const Input = ({ label = 'Label', placeholder = 'Text..', type = "text", value="", icon = "None", inputInfo, fullWidth = false, setValue }: InputProps) => {

  return (
    <S.Wrapper>
        <S.ContainerInput>
          <S.Label>
            {icon !== 'None' && <img src={`/img/icons/${icon}.svg`} />} {label}
          </S.Label>
          <S.Box inputInfo={inputInfo} fullWidth={fullWidth}>
            <S.Input placeholder={placeholder} type={type} value={value} onChange={(e) => setValue && setValue(e.target.value)}/>
            {inputInfo && <S.Span>{inputInfo}</S.Span>}
          </S.Box>
        </S.ContainerInput>
    </S.Wrapper>
  )
}

export default Input
