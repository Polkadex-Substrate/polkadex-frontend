import Icon from 'components/general/Icon'
import SearchBar from 'components/general/SearchBar'
import SidebarDropdown from 'components/general/SidebarDropdown'
import React, { useState } from 'react'
import Swapbox from './blocks/Swapbox'
import * as S from './style'
import { CurrencyDetails } from '../wallet/blocks/CryptoCurrencies'
import Currency from '../../components/general/Currency'

export default function Swap() {
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
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currencyList, setCurrencyList] = useState<CurrencyDetails[]>(currenciesList)

  return (
    <S.Root>
      <S.Wrapper>
        <S.ContentWrapper>
          <S.Header>
            <S.PolkaLogo src="img/Logo.svg" alt="Polkadex"/>
          </S.Header>
          <S.BottomContentWrapper>
            <S.LeftColumn>
              <S.Iconcolumn>
                <S.Marginbottom>
                  <Icon source="Settings" size="Medium" background="Gray"/>
                </S.Marginbottom>
                <Icon source="Settings" size="Medium" background="Gray"/>
              </S.Iconcolumn>
              <S.LabelWithIcon>
                <S.IconWrapper>
                  <Icon source="Wallet" size="Small" background="None"/>
                </S.IconWrapper>
                <span>Connect to wallet</span>
              </S.LabelWithIcon>
            </S.LeftColumn>
            <S.MiddleColumn>
              <Swapbox handlecryptolistmodal={() => setIsModalOpen(true)}/>
              <S.bottomlabel>
                <S.Bottomtextwrapper>
                  <S.Image src={`/img/icons/show_chart-white.svg`}/>
                  <span>Pair Analitycs</span>
                  <SidebarDropdown rotation='rotate(0deg)' backgroundcolor='#1C2023'
                                   hoverrotation='rotate(180deg)' icon='ArrowTop'/>
                </S.Bottomtextwrapper>
              </S.bottomlabel>
            </S.MiddleColumn>

            <S.RightColumn>
              <S.bottomrightcontentwrapper>
                <S.bottomcolor/> 1092049
              </S.bottomrightcontentwrapper>
            </S.RightColumn>
          </S.BottomContentWrapper>
        </S.ContentWrapper>
      </S.Wrapper>

      {
        isModalOpen && (
          <S.Overlay>
            <S.Dialog>
              <S.LeftCurrencyColumn>
                <S.CryptocurrenciesWrapper>
                  <S.WrapperTitle>
                    Select Coin
                    <S.Iconwrapper onClick={() => setIsModalOpen(false)}>
                      <Icon source="Close" size="Small" background="Black"/>
                    </S.Iconwrapper>
                  </S.WrapperTitle>
                  <S.SearchWrapper>
                    <SearchBar placeholder="Search " type="search" value={null} setValue={null}/>
                  </S.SearchWrapper>
                  {
                    currencyList.map((currency, index) => <Currency currency={currency} key={index}
                                                                    displayValue={false}
                                                                    active={false} setCurrency={null}/>)
                  }
                  <S.WrapperDefault>
                    <div>Default List</div>
                    <div>change</div>
                  </S.WrapperDefault>
                </S.CryptocurrenciesWrapper>
              </S.LeftCurrencyColumn>
            </S.Dialog>
          </S.Overlay>
        )
      }
    </S.Root>
  )
}
