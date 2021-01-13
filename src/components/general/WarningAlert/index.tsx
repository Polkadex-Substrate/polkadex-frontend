import React  from 'react'
import * as S from './styles'

function WarningAlert() {
  return (
    <S.Wrapper>
      <S.Heading>
        Warning
      </S.Heading>
      <S.Message>
        Polkadex trade is not compatible with your device. Please view it in desktop
      </S.Message>
    </S.Wrapper>
  )
}

export default WarningAlert
