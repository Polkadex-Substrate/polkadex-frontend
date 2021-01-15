import Currencylist from 'components/general/Currencieslist'
import Icon from 'components/general/Icon'
import Searchbar from 'components/general/Searchbar'
import SidebarDropdown from 'components/general/SidebarDropdown'
import React, { useState } from 'react'
import Cryptocurrencies from 'templates/Wallet/blocks/Cryptocurrencies'
import Swapbox from './blocks/Swapbox'
import * as S from './style'

export default function Swap({}){
    const [isModalOpen,setisModalOpen] = useState(false)
    const opencryptolistmodal =()=>{
          setisModalOpen(true)

    }
    
    return (<S.Root>
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
                                <Swapbox handlecryptolistmodal ={opencryptolistmodal}/>
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

             {isModalOpen && (
        <S.Overlay>
          <S.Dialog>
           
            {/*  */}
            <S.LeftCurrencyColumn>
            <S.CryptocurrenciesWrapper>
                   <S.WrapperTitle>
                    Select Coin    
                    {/* <button onClick={() => setisModalOpen(false)}>Close wrapper</button>  */}
                    <S.Iconwrapper  onClick={() => setisModalOpen(false)}><Icon source="Close" size="Small" background="Black"/>   </S.Iconwrapper>                  
                    </S.WrapperTitle>
                    <S.SearchWrapper>
                        <Searchbar placeholder="Search " type="search"/>   
                        
                    </S.SearchWrapper> 
                    <Currencylist valuecolumn={false}/>
                    <S.WrapperDefault>
                        <div>Default List</div>
                        <div>change</div>
                    </S.WrapperDefault>
            </S.CryptocurrenciesWrapper>
           </S.LeftCurrencyColumn>
             

          </S.Dialog>
        </S.Overlay>
      )}
             </S.Root>        
            )
}