
import Icon from 'components/general/Icon'
import SidebarDropdown from 'components/general/SidebarDropdown'
import * as S from './styles'

const MyOrders =()=>{

    return( <S.Myorders>
              <S.FirstRow> 
                        <S.ContainerWallet>
                                        <S.Wrapper >
                                            <S.Image src={`/img/icons/Wallet.svg`}  />
                                        </S.Wrapper>                                                                   
                        </S.ContainerWallet>
                        <S.WrapperBalance>
                                <S.Spantextblur>My Balance </S.Spantextblur>
                                <S.Span>0.9645734 DOT</S.Span>
                        </S.WrapperBalance>
              </S.FirstRow>
              <S.SecondRow>    
                        <S.BlockWrapper>
                            <S.NoDarkBlockWrapper>
                                <S.smalltext>From</S.smalltext>
                                <span>14.4560</span>
                            </S.NoDarkBlockWrapper>
                            <S.DarkBlockWrapper>
                                 <S.RowinsideDarkBlockWrapper>
                                    <S.CoinImage src={`img/cryptocurrencies/DOT.png`} />
                                    <span>DOT</span>
                                    <SidebarDropdown rotation = 'rotate(0deg)'  backgroundcolor='#ffffff' hoverrotation='rotate(180deg)' icon='ArrowDownBlack' />
                                 </S.RowinsideDarkBlockWrapper>
                            </S.DarkBlockWrapper>

                        </S.BlockWrapper>                                                          
                        <S.Wrapper>
                             <S.Image src={`/img/icons/Exchange_B.svg`}  />
                        </S.Wrapper> 
                        <S.BlockWrapper>
                            <S.NoDarkBlockWrapper>
                            <S.smalltext>To</S.smalltext>
                                <span>14.4560</span>
                            </S.NoDarkBlockWrapper>
                            <S.DarkBlockWrapper>
                                <S.RowinsideDarkBlockWrapper>
                                <S.CoinImage src={`img/cryptocurrencies/BTC.png`} />
                                    <span>BTC</span>
                                    <SidebarDropdown rotation = 'rotate(0deg)'  backgroundcolor='#ffffff' hoverrotation='rotate(180deg)' icon='ArrowDownBlack' />
                                </S.RowinsideDarkBlockWrapper>
                            </S.DarkBlockWrapper>
                        </S.BlockWrapper>
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