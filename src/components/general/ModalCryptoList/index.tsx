import React, { useState } from 'react'

import Icon from 'components/general/Icon'
import SearchBar from '../SearchBar'
import * as S from './styles'
import Currency from '../Currency'
import { CurrencyDetails } from '../../../templates/wallet/blocks/CryptoCurrencies'

const ModalCryptoList = ({ ModalCloseHandler, SetCryptolistLefthandler, leftalignvalue }) => {

  const currenciesList = [
    {
      id: 1,
      name: 'Bitcoin',
      type: 'BTC',
      value: 0.456943324,
    },
    {
      id: 2,
      name: 'Dash',
      type: 'DASH',
      value: 0.100000000,
    },
    {
      id: 3,
      name: 'Ethreum',
      type: 'ETH',
      value: 0.200000000,
    },
    {
      id: 4,
      name: 'Polkadot',
      type: 'DOT',
      value: 0.300000000,
    },
    {
      id: 5,
      name: 'Riple',
      type: 'BNB',
      value: 0.400000000,
    },
    {
      id: 6,
      name: 'LiteCoin',
      type: 'LTC',
      value: 0.500000000,
    },
    {
      id: 7,
      name: 'Tether',
      type: 'ATOM',
      value: 0.600000000,
    }
    ,
    {
      id: 8,
      name: 'Fil',
      type: 'FIL',
      value: 0.700000000,
    },
    {
      id: 9,
      name: 'Ethreum',
      type: 'ETH',
      value: 0.000000000,
    },
    {
      id: 10,
      name: 'Polkadot',
      type: 'DOT',
      value: 0.000000000,
    },
    {
      id: 11,
      name: 'Riple',
      type: 'BNB',
      value: 0.000000000,
    },
    {
      id: 12,
      name: 'LiteCoin',
      type: 'LTC',
      value: 0.000000000,
    },
    {
      id: 13,
      name: 'Tether',
      type: 'ATOM',
      value: 0.000000000,
    },
  ]
  const [currencyList, setCurrencyList] = useState<CurrencyDetails[]>(currenciesList)

  const Clickhandler = () => {
    ModalCloseHandler(false)
    SetCryptolistLefthandler(false)
  }

  return (
    <S.LeftCurrencyColumn>
      <S.CryptocurrenciesWrapper>
        <S.WrapperTitle>
          <S.pointercursor onClick={() => SetCryptolistLefthandler(true)}> Select Coin </S.pointercursor>
          <S.Iconwrapper onClick={Clickhandler}><Icon source="Close" size="XSmall" background="None"/> </S.Iconwrapper>
        </S.WrapperTitle>
        <S.SearchWrapper>
          <SearchBar placeholder="Search name or paste address " type="search" value={''} setValue={null}/>
        </S.SearchWrapper>
        <S.TextWrapper>
          <S.Image src={`/img/icons/top-bottom-white.svg`}/>
          Coin
        </S.TextWrapper>
        { currencyList.map((currency, index) => <Currency currency={currency} key={index} active={false} setCurrency={null} />) }
        <S.WrapperDefault>
          <div>Default List</div>
          <div>change</div>
        </S.WrapperDefault>
      </S.CryptocurrenciesWrapper>
    </S.LeftCurrencyColumn>
  )
}

export default ModalCryptoList
