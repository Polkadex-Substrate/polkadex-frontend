import React, { useState } from 'react'

import CoinWrapper from 'components/general/CoinWrapperSmall'
import MyOrders from '../MyOrdersSwapbox'
import * as S from './styles'
import DropdownItem from '../../../../components/general/DropdownItem'
import Dropdown from '../../../../components/general/Dropdown'

const SwapBox = ({ handleCryptoListModal, balance, currentCurrency }) => {
  const [hideContent, setHideContent] = useState('Active')
  const [orderType, setOrderType] = useState('Market Order')
  const [dropdownState, setDropdownState] = useState(false)

  const handleChangeDropdown = (select: string) => {
    setDropdownState(false)
    setOrderType(select)
  }

  const handleAction = () => {
    setHideContent(hideContent === 'Active' ? 'Not_Active' : 'Active')
  }

  return (
    <S.SwapBoxContainer>
      <S.SwapBoxWrapper className={hideContent}>
        <S.RowOne>
          <S.DropdownWrapper>
            <Dropdown title={orderType} active={dropdownState} setDropdownState={setDropdownState}>
              <>
                <DropdownItem title="Limit Order" handleAction={handleChangeDropdown}/>
                <DropdownItem title="Market Order" handleAction={handleChangeDropdown}/>
              </>
            </Dropdown>
          </S.DropdownWrapper>
          <S.OrdersWrapper>
            <S.TextWrapper>My Orders</S.TextWrapper>
            <S.OrdersBorder/>
          </S.OrdersWrapper>
        </S.RowOne>
        <S.RowTwo className={hideContent}>
          <MyOrders handleChange={handleAction} cryptoList={handleCryptoListModal} balance={balance}
                    currentCurrency={currentCurrency}/>
        </S.RowTwo>
        <S.RowThree className={hideContent}>
          Transaction Route
          <CoinWrapper name={'Polkadot'} type={'DOT'}/>
          <S.Image src={`/img/icons/double_arrow-white.svg`}/>
          <CoinWrapper name={'Thether'} type={'USDT'}/>
          <S.Image src={`/img/icons/double_arrow-white.svg`}/>
          <CoinWrapper name={'Bitcoin'} type={'BTC'}/>
        </S.RowThree>
      </S.SwapBoxWrapper>
      <S.BottomRow className={hideContent}>
        <S.BottomTextWrapper>
          <S.HelperIconImage src={`/img/icons/help_outline-white.svg`}/>
          <S.Blur>Minimum</S.Blur>
          <S.NoBlurText>0.01008 DOT</S.NoBlurText>
        </S.BottomTextWrapper>
        <S.BottomTextWrapper>
          <S.HelperIconImage src={`/img/icons/help_outline-white.svg`}/>
          <S.Blur>Liquidity Provider Fee</S.Blur>
          <S.NoBlurText>0.00005991 BTC</S.NoBlurText>
        </S.BottomTextWrapper>
        <S.BottomTextWrapper>
          <S.HelperIconImage src={`/img/icons/help_outline-white.svg`}/>
          <S.Blur>Price Impact</S.Blur>
          <S.TextSpecialColor>8.49%</S.TextSpecialColor>
        </S.BottomTextWrapper>
      </S.BottomRow>
    </S.SwapBoxContainer>
  )
}

export default SwapBox
