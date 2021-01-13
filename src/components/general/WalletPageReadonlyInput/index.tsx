import Icon from '../Icon'
import * as S from './styles'

export type InputProps = {
  label?: string
  icon?: 'None' | 'Wallet'
  placeholder?: string
  type?: 'text' | 'email' | 'password' | 'url' | 'number'
  value?: any
  inputInfo?: string
  fullWidth?: boolean
  setValue?: any
  readonly?:any
}

const WalletInput = ({ label = 'Label', placeholder = 'Text..', type = "text", value, icon = "None", inputInfo, fullWidth = true,readonly = false ,setValue}: InputProps) => {

  return (
    <S.Wrapper>
        <S.ContainerInput>
          <S.Label>
             {label}
          </S.Label>
          <S.Box inputInfo={inputInfo} fullWidth={fullWidth}>
            <S.Input placeholder={placeholder} type={type} value={value} readOnly ={readonly} onChange={(e) => setValue(e.target.value)}/>
            {inputInfo && <S.Span>{inputInfo}</S.Span>}
            {icon !== 'None' && <S.IconWrapper><Icon source="Wallet" size="Small" background="None"/></S.IconWrapper>}
          </S.Box>
        </S.ContainerInput>
    </S.Wrapper>
  )
}

export default WalletInput
