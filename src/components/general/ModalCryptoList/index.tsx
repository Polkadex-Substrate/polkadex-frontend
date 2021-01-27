import React from 'react'
import * as S from './styles'

import Icon from 'components/general/Icon'
import SearchBar from '../SearchBar'
import Currency from 'components/general/Currency'

const ModalCryptoList = ({ modalCloseHandler, setCryptoListLeftHandler, currenciesList, setCurrentCurrency }) => {

  const clickHandler = () => {
    modalCloseHandler(false);
    setCryptoListLeftHandler(false)
  }

  const moveLeftHandler = () => {
    setCryptoListLeftHandler(true);
    modalCloseHandler(false);
  }

  return (
    <S.LeftCurrencyColumn>
      <S.CryptoCurrenciesWrapper>
        <S.WrapperTitle>
          <S.PointerCursor onClick={moveLeftHandler}> Select Coin </S.PointerCursor>
          <div onClick={clickHandler}><Icon source="Close" size="XSmall" background="None"/> </div>
        </S.WrapperTitle>
        <S.SearchWrapper>
          <SearchBar placeholder="Search name or paste address" type="search" value={''} setValue={null} resize = "Active"/>
        </S.SearchWrapper>
        <S.TextWrapper>
          <S.Image src={`/img/icons/Top-bottom-white.svg`}/>
          Coin
        </S.TextWrapper>

        <S.CryptoListWrapper>
          {currenciesList.map((currency, index) => <Currency displayValue={false} currency={currency} key={index}
                                                           active={false} setCurrency={() => setCurrentCurrency(currency)}/>)}
        </S.CryptoListWrapper>
        <S.WrapperDefault>
          <div>Default List</div>
          <div>Change</div>
        </S.WrapperDefault>
      </S.CryptoCurrenciesWrapper>
    </S.LeftCurrencyColumn>
  )
}

export default ModalCryptoList
