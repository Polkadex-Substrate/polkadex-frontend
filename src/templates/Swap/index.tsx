import Icon from 'components/general/Icon'
import SidebarDropdown from 'components/general/SidebarDropdown'
import React, { useState } from 'react'
import Swapbox from './blocks/Swapbox'
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
                                <Swapbox/>
                                <S.bottomlabel>
                                    <S.Bottomtextwrapper>
                                        <S.Image src={`/img/icons/show_chart-white.svg`}  />
                                        <span>
                                           Pair Analitycs
                                        </span>
                                        <span>
                                           <SidebarDropdown rotation = 'rotate(0deg)'  backgroundcolor='#1C2023' hoverrotation='rotate(180deg)' icon='ArrowTop'/>
                                        </span>
                                    </S.Bottomtextwrapper>
                                </S.bottomlabel>
                            </S.MiddleColumn>

                            <S.RightColumn>
                                <S.bottomrightcontentwrapper>
                                    <S.bottomcolor></S.bottomcolor> 1092049
                                </S.bottomrightcontentwrapper>
                            </S.RightColumn>
                        </S.BottomContentWrapper>    
                   </S.ContentWrapper>
             </S.Wrapper>        
            )
}