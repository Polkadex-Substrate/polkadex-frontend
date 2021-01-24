import { useState } from 'react'

import CoinWrapper from 'components/general/CoinWrapperSmall'
import NavbarDropdown from 'components/general/NavbarDropdown'
import MyOrders from '../MyOrdersSwapbox'
import * as S from './styles'

const SwapBox = ({ handleCryptoListModal  }) => {
    const [intialValue, setIntialValue] = useState(false);
    const [hideContent, sethideContent] = useState("Active")
    const handleAction = (value) => {
        setIntialValue(value);
        value == false ? sethideContent("Active") : sethideContent("Not_Active");
    }
    const openModalCryptoList = () => {
        handleCryptoListModal()
    }
   

    return (
        <S.SwapBoxContainer>
            <S.SwapBoxWrapper className={hideContent}>
                <S.RowOne>
                    <div>
                    <S.TextWrapperWithoutBorder className={hideContent}>
                       Market Order
                     <S.IconWrapper> <NavbarDropdown title="" /></S.IconWrapper>
                    </S.TextWrapperWithoutBorder>
                    </div>
                    <S.TextWrapper>My Orders</S.TextWrapper>
                </S.RowOne>
                <S.RowTwo className={hideContent}>
                    <MyOrders handleChange={handleAction} cryptoList={openModalCryptoList} />
                </S.RowTwo>
                <S.RowThree className={hideContent}>
                    Transaction Route                    
                    <CoinWrapper CoinName= {"Polkadot"} CoinType = {"DOT"}/>
                    <S.Image src={`/img/icons/double_arrow-white.svg`} />
                    <CoinWrapper CoinName= {"Thether"} CoinType = {"USDT"}/>
                    <S.Image src={`/img/icons/double_arrow-white.svg`} />
                    <CoinWrapper CoinName= {"Bitcoin"} CoinType = {"BTC"}/>
                 </S.RowThree>
            </S.SwapBoxWrapper>
            <S.BottomRow className={hideContent}>
                <S.BottomTextWrapper>
                    <S.HelperIconImage src={`/img/icons/help_outline-white.svg`} />
                    <S.Blur>Minimum</S.Blur>
                    <S.NoBlurText>0.01008 DOT</S.NoBlurText>
                </S.BottomTextWrapper>
                <S.BottomTextWrapper>
                    <S.HelperIconImage src={`/img/icons/help_outline-white.svg`} />
                    <S.Blur>Liquidity Provider Fee</S.Blur>
                    <S.NoBlurText>0.00005991 BTC</S.NoBlurText>
                </S.BottomTextWrapper>
                <S.BottomTextWrapper>
                    <S.HelperIconImage src={`/img/icons/help_outline-white.svg`} />
                    <S.Blur>Price Impact</S.Blur>
                    <S.TextSpecialColor>8.49%</S.TextSpecialColor>
                </S.BottomTextWrapper>
            </S.BottomRow>
        </S.SwapBoxContainer>
    )
}

export default SwapBox