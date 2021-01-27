import React from 'react'
import * as S from './style'
import { useTheme, Theme } from 'Context/ThemeContext';

import Icon from '../Icon'

export type RowProps = {
  active: boolean;
  displayValue?:any;
}

const Currency = ({ currency, setCurrency, active, displayValue = true }) => {
  const { theme, setTheme } = useTheme();
  return (
    <S.Row onClick={setCurrency} active={active} displayValue = {displayValue}>
      <S.DetailsWrapper>
        <S.ImageWrapper>
          <S.Image src={`img/cryptocurrencies/${currency.type}.png`}/>
        </S.ImageWrapper>
        <S.NameWrapper>
          <S.Name>{currency.name}</S.Name>
          <S.Type>{currency.type}</S.Type>
        </S.NameWrapper>
      </S.DetailsWrapper>
      {
        displayValue &&
        <S.ValueWrapper>
          <S.Value>{currency.value.toFixed(8)}</S.Value>
          {theme ==  Theme.Dark
           ? <Icon source={'ArrowRight'} size={'XSmall'}/>
           :  <Icon source={'Arrow_rightblack'} size={'Small'} background = "WhiteThemeBackground"/>
          }
        </S.ValueWrapper>
      }
    </S.Row>
  )
}

export default Currency
