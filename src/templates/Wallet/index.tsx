import React, { useEffect,useState } from 'react'
import Cryptocurrencies from './blocks/Cryptocurrencies'
import Menu from './blocks/Menu'
import Navbar from './blocks/Navbar'
import * as S from './styles'
import DespositBTC from '../../components/general/DepositBTC'
import WithdrawBTC from '../../components/general/WithdrawBTC'

import History from './blocks/History'
import { resetIdCounter } from "react-tabs";
import DepositWithdrawTAb from './blocks/DepositWithdrawTab'
import BalanceHeader from './blocks/BalanceHeader'



export type InputProps = {  
  tabcolor?: any
  
}

export default function Wallet({ account }) {
  const [state, setState] = useState(false) 

  return (
    <S.WalletWrapper>
      <Menu handleChange={() => setState(!state)} />
      <S.WalletWrapperMain >
        <Navbar/>
        <BalanceHeader/>
        <S.BottomContentWrapper>            
                 <Cryptocurrencies /> 
                  <DepositWithdrawTAb/>   
                  <History/>        
        </S.BottomContentWrapper>
      </S.WalletWrapperMain>  
    </S.WalletWrapper>
  )
}

