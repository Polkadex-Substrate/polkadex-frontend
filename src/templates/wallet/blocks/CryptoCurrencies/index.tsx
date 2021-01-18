import React from 'react'
import * as S from './styles'

import Icon from 'components/general/Icon'
import SearchBar from 'components/general/SearchBar'
import Currency  from '../../../../components/general/Currency'

export type CurrencyDetails = {
    id: number
    name: string
    type: string
    value: number
}

const CryptoCurrencies = ({ currentCurrency, currencyList, setCurrency, searchValue, setValue }) => {

    return (
        <S.LeftCurrencyColumn>
            <S.CryptoCurrenciesWrapper>
                <S.WrapperTitle>
                    Cryptocurrencies
                </S.WrapperTitle>

                <S.SearchWrapper>
                    <SearchBar placeholder="Search..." type="search" value={searchValue} setValue={setValue}/>
                    <S.IconWrapper><Icon source="Settings" size="Small" background="Black"/></S.IconWrapper>
                </S.SearchWrapper>

                <S.CryptoListWrapper>
                    { currencyList.map((currency, index) => <Currency currency={currency} key={index} active={currentCurrency.id === currency.id} setCurrency={() => setCurrency(currency)} />) }
                </S.CryptoListWrapper>
            </S.CryptoCurrenciesWrapper>
        </S.LeftCurrencyColumn>
    )
}

export default CryptoCurrencies
