import React from 'react'
import * as S from './style'

import Icon from '../Icon'

export type RowProps = {
  active: boolean;
}

const Currency = ({ currency, setCurrency, active, displayValue = true }) => {
  return (
    <S.Row onClick={setCurrency} active={active}>
      <S.DetailsWrapper>
        { displayValue ?

            <S.ImageWrapper>
              <S.Image src={`img/cryptocurrencies/${currency.type}.png`}/>
            </S.ImageWrapper>
            :
            <S.ImageWrapper2>
            <S.Image2 src={`img/cryptocurrencies/${currency.type}.png`}/>
            </S.ImageWrapper2>

         }
        <S.NameWrapper>
          <S.Name>{currency.name}</S.Name>
          <S.Type>{currency.type}</S.Type>
        </S.NameWrapper>
      </S.DetailsWrapper>

      {
        displayValue &&
        <S.ValueWrapper>
          <S.Value>{currency.value.toFixed(8)}</S.Value>
          <Icon source={'ArrowRight'} size={'XSmall'}/>
        </S.ValueWrapper>
      }
    </S.Row>
  )
}

export default Currency
