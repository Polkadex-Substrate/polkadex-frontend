
import CurrencyValueSwapBox from 'templates/swap/blocks/CurrenciesValueSwapbox';
import { useState } from 'react';
import * as S from './styles'

const MyOrders = ({ handleChange, cryptoList }) => {

     const [coinValue, setCoinValue] = useState(0);
     const [intialValue, setIntialValue] = useState(false);
     const onClick = () => {
          if (intialValue == true) {
               (setIntialValue(false),
                    handleChange(false),
                    setCoinValue(0))
          }
          else {
               setIntialValue(true),
               setCoinValue(144560),
               handleChange(true)
          }
     }

     const openCyptolistModal = () => {
          cryptoList()
     }

     return (<S.MyOrders>
          <S.FirstRow>
               <S.WrapperImage >
                    <S.Image src={`/img/icons/Wallet.svg`} />
               </S.WrapperImage>
               <S.WrapperBalance>
                    <S.SpanTextBlur>My Balance </S.SpanTextBlur>
                    <span>0.9645734 DOT</span>
               </S.WrapperBalance>
          </S.FirstRow>
          <S.SecondRow>
               <CurrencyValueSwapBox CoinValue={coinValue} 
               CoinType={"DOT"} 
               FromTo={"From"} 
               handleClickEvent={onClick} 
               />
               <S.WrapperImage>
                    <S.Image src={`/img/icons/Exchange_B.svg`} />
               </S.WrapperImage>
               <CurrencyValueSwapBox
                CoinValue={coinValue} 
                CoinType={"BTC"} 
                FromTo={"To"} 
                handleClickEvent={openCyptolistModal} 
                />
          </S.SecondRow>
          <S.ThirdRow>
               <S.LoginButton>Connect Wallet</S.LoginButton>
               <S.TextWrapper>
                    <span><S.Blur>Price</S.Blur> 0.01013 DOT per BTC</span>
               </S.TextWrapper>
          </S.ThirdRow>
     </S.MyOrders>
     )

}

export default MyOrders