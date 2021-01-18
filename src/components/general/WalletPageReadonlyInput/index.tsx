import React from 'react'
import * as S from './styles'

import Icon from '../Icon'

export type InputProps = {
    label?: string
    icon?: 'None' | 'Wallet'
    placeholder?: string
    type?: 'text' | 'email' | 'password' | 'url' | 'number'
    value?: any
    inputInfo?: string
    fullWidth?: boolean
    setValue?: any
    readonly?: any
}

const WalletInput = ({ label = 'Label', placeholder = 'Text..', type = 'text', value, icon = 'None', inputInfo, fullWidth = true, readonly = false, setValue }: InputProps) => {

    return (
        <S.Wrapper>
            <S.ContainerInput>
                <S.Label>
                    {label}
                </S.Label>
                <S.Box inputInfo={inputInfo} fullWidth={fullWidth}>
                    <S.Input placeholder={placeholder} type={type} value={value} readOnly={readonly}
                             onChange={(e) => setValue && setValue(e.target.value)}/>
                    {inputInfo && <S.Span>{inputInfo}</S.Span>}
                    {
                        icon !== 'None' &&
                        <Icon source="Copy" size="Small" background="None"/>
                    }
                </S.Box>
            </S.ContainerInput>
        </S.Wrapper>
    )
}

export default WalletInput
