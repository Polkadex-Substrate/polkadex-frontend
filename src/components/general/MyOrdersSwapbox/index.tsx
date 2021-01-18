
import CurrencyValueSwapbox from 'components/general/CurrenciesValueSwapbox';
import Icon from 'components/general/Icon'
import SidebarDropdown from 'components/general/SidebarDropdown'
import { useState } from 'react';
import * as S from './styles'

const MyOrders = ({ handlechange, cryptolist  }) => {

     const [coinValue, setCoinValue] = useState(0);
     const [intialValue, setIntialValue] = useState(false);
     const onClick = () => {
          intialValue == true
               ? (setIntialValue(false),
                    handlechange(false),
                    setCoinValue(0))

               : (setIntialValue(true),
                    setCoinValue(144560),
                    handlechange(true)
               )
     }

     const openCyptolistmodal = () => {
          cryptolist()
     }

     return (<S.Myorders>
          <S.FirstRow>
               <S.WrapperImage >
                    <S.Image src={`/img/icons/Wallet.svg`} />
               </S.WrapperImage>
               <S.WrapperBalance>
                    <S.Spantextblur>My Balance </S.Spantextblur>
                    <span>0.9645734 DOT</span>
               </S.WrapperBalance>
          </S.FirstRow>
          <S.SecondRow>
               <CurrencyValueSwapbox CoinValue={coinValue} Cointype={"DOT"} Fromto={"From"} handleclickevent={onClick} />
               <S.WrapperImage>
                    <S.Image src={`/img/icons/Exchange_B.svg`} />
               </S.WrapperImage>
               <CurrencyValueSwapbox CoinValue={coinValue} Cointype={"BTC"} Fromto={"To"} handleclickevent={openCyptolistmodal} />
          </S.SecondRow>
          <S.ThirdRow>
               <S.LoginButton>Connect Wallet</S.LoginButton>
               <S.TextWrapper>
                    <span><S.blur>Price</S.blur> 0.01013 DOT per BTC</span>
               </S.TextWrapper>
          </S.ThirdRow>
     </S.Myorders>
     )

}

export default MyOrders