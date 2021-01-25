import React, { useState } from 'react'
import * as S from './styles'

import CryptoCurrencies, { CurrencyDetails } from './blocks/CryptoCurrencies'
import History from './blocks/History'
import DepositWithdrawTab from './blocks/DepositWithdrawTab'
import BalanceHeader from './blocks/BalanceHeader'
import Menu from '../../components/Menu'
import Navigation from './blocks/Navigation'

export type InputProps = {}

export default function Wallet() {
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
  const historyList = [
    {
      id: 1,
      time: '10 mintues ago',
      hash: 'dvfgdgszdgsd234234',
      value: '1232435456352341',
      side: 'AskLimit',
    },
    {
      id: 2,
      time: '04 August, 2011 12:21 ',
      hash: 'dvfgdgszdgsd234234',
      value: '6232435456352341',
      side: 'MarketLimit',
    },
    {
      id: 3,
      time: '05 June, 2011 12:21',
      hash: 'dvfgdgszdgsd234234',
      value: '2342435456352341',
      side: 'MarketLimit',
    },
    {
      id: 4,
      time: '10 mintues ago',
      hash: 'dvfgdgszdgsd234234',
      value: '23412435456352341',
      side: 'AskLimit',
    },
  ]
  const [btcBalance, setBtcBalance] = useState(0.93871332)
  const [usdBalance, setUsdBalance] = useState(4243)
  const [currentCurrency, setCurrentCurrency] = useState(currenciesList[0])
  const [currencyList, setCurrencyList] = useState<CurrencyDetails[]>(currenciesList)
  const [searchInput, setSearchInput] = useState('')

  const filterResults = searchInput => {
    setSearchInput(searchInput)
    setCurrencyList(currenciesList.filter(({ name, type }) => name.toLowerCase().search(searchInput.toLowerCase()) > -1 || type.toLowerCase().search(searchInput.toLowerCase()) > -1))
  }

  return (
    <S.WalletWrapper>
      <Menu  />
      <S.WalletWrapperMain>
        <Navigation />
        <BalanceHeader btcBalance={btcBalance} usdBalance={usdBalance}/>
        <S.BottomContentWrapper>
          <CryptoCurrencies currencyList={currencyList} setCurrency={currency => setCurrentCurrency(currency)}
                            currentCurrency={currentCurrency}
                            searchValue={searchInput} setValue={(input) => filterResults(input)}/>
          <DepositWithdrawTab currentCurrency={currentCurrency}/>
          <History historyList={historyList}/>
        </S.BottomContentWrapper>
      </S.WalletWrapperMain>
    </S.WalletWrapper>
  )
}

