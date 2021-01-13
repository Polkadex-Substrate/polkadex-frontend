import Icon from 'components/general/Icon'
import SidebarDropdown from 'components/general/SidebarDropdown'
import React, { useState } from 'react'
import * as S from './style'

export default function Swap({}){
 
    
    return (
             <S.Wrapper> 
                  <S.ContentWrapper>               
                        <S.Header>
                            <S.PolkaLogo src="img/Logo.svg" alt="Polkadex"></S.PolkaLogo> 
                        </S.Header> 
                        <S.BottomContentWrapper> 
                            <S.LeftColumn>
                                <S.Iconcolumn>
                                    <S.Marginbottom>                                    
                                       <Icon source="Settings" size="Medium" background="Gray"/>
                                    </S.Marginbottom>  
                                    <span>
                                        <Icon source="Settings" size="Medium" background="Gray"/>
                                    </span>
                                </S.Iconcolumn>
                                <S.LabelWithIcon>
                                    <S.IconWrapper>
                                    <Icon source="Wallet" size="Small" background="None"/>
                                    </S.IconWrapper>
                                    <span>
                                    Connect to wallet
                                    </span>
                                </S.LabelWithIcon>
                            </S.LeftColumn>
                            <S.MiddleColumn>
                                <S.bottomlabel>
                                 Pair Analitycs
                                 <SidebarDropdown/>
                                </S.bottomlabel>
                            </S.MiddleColumn>
                        </S.BottomContentWrapper>    
                   </S.ContentWrapper>
             </S.Wrapper>        
            )
}