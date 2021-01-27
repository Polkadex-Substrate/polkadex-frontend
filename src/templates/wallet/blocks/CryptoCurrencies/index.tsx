import React from 'react'
import * as S from './styles'

import Icon from 'components/general/Icon'
import SearchBar from 'components/general/SearchBar'
import Currency  from '../../../../components/general/Currency'
import { useTheme, Theme } from 'Context/ThemeContext';

export type CurrencyDetails = {
    id: number
    name: string
    type: string
    value: number
}

const CryptoCurrencies = ({ currentCurrency, currencyList, setCurrency, searchValue, setValue }) => {
    const { theme, setTheme } = useTheme();

    return (
        <S.LeftCurrencyColumn>
            <S.CryptoCurrenciesWrapper>
                <S.WrapperTitle>
                    Cryptocurrencies
                </S.WrapperTitle>
                <S.SearchWrapper>
                    <SearchBar placeholder="Search..." type="search" value={searchValue} setValue={setValue}/>
                    {theme ==  Theme.Dark
                    ?
                    <S.IconWrapper><Icon source="Settings" size="Small" background="Black"/></S.IconWrapper>
                    :
                    <S.IconWrapper><Icon source="SettingsBlack" size="Small" background="WhiteThemeBackground"/></S.IconWrapper>  
                    }
                </S.SearchWrapper>
                <S.CryptoListWrapper>
                    { currencyList.map((currency, index) => <Currency currency={currency} key={index} active={currentCurrency.id === currency.id} setCurrency={() => setCurrency(currency)} />) }
                </S.CryptoListWrapper>
            </S.CryptoCurrenciesWrapper>
        </S.LeftCurrencyColumn>
    )
}

export default CryptoCurrencies
