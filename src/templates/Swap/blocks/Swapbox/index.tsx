import NavbarDropdown from 'components/general/NavbarDropdown'
import SidebarDropdown from 'components/general/SidebarDropdown'
import MyOrders from '../MyOrders'
import * as S from './styles'

const Swapbox =()=>{

    return(
           <S.SwapboxContainer>
                <S.SwapboxWrapper>
                    <S.Rowone>
                          <div>
                            <S.TextWrapperwithoutborder>Market Order  
                                <S.IconWrapper> <NavbarDropdown title=""/></S.IconWrapper>
                                </S.TextWrapperwithoutborder>                          
                          </div>
                          <S.TextWrapper>My Orders</S.TextWrapper>
                    </S.Rowone>
                    <S.Rowtwo>
                          <MyOrders/>
                    </S.Rowtwo>
                    <S.Rowthree>
                          <S.smallfont>
                           Transaction Route
                          </S.smallfont>
                          <S.coinwrapper>
                               <S.CoinImage src={`img/cryptocurrencies/DOT.png`} />
                               <S.nameandvaluecolumn>
                                   <span>DOT</span>
                                   <S.blurtext>Polkadot</S.blurtext>
                               </S.nameandvaluecolumn>
                          </S.coinwrapper>
                          <S.Image src={`/img/icons/double_arrow-white.svg`}  />
                          <S.coinwrapper>                              
                           <S.CoinImage src={`img/cryptocurrencies/USDT.png`} />
                               <S.nameandvaluecolumn>
                                   <span>USDT</span>
                                   <S.blurtext>Thether</S.blurtext>
                               </S.nameandvaluecolumn>
                          </S.coinwrapper>  
                          <S.Image src={`/img/icons/double_arrow-white.svg`}  />                          
                          <S.coinwrapper>                              
                           <S.CoinImage src={`img/cryptocurrencies/BTC.png`} />
                               <S.nameandvaluecolumn>
                                   <span>BTC</span>
                                   <S.blurtext>Bitcoin</S.blurtext>
                               </S.nameandvaluecolumn>
                          </S.coinwrapper>
                    </S.Rowthree>
                </S.SwapboxWrapper>                
                <S.bottomrow>
                      <S.bottomtextwrapper>
                          <S.HelperIconImage src={`/img/icons/help_outline-white.svg`}  />
                          <S.blur>Minimum</S.blur>
                          <S.noblurtext>0.01008 DOT</S.noblurtext>                         
                      </S.bottomtextwrapper>
                      <S.bottomtextwrapper>
                          <S.HelperIconImage src={`/img/icons/help_outline-white.svg`}  />
                          <S.blur>Liquidity Provider Fee</S.blur>
                          <S.noblurtext>0.00005991 BTC</S.noblurtext>                         
                      </S.bottomtextwrapper>
                      <S.bottomtextwrapper>
                          <S.HelperIconImage src={`/img/icons/help_outline-white.svg`}  />
                          <S.blur>Price Impact</S.blur>
                          <S.textspecialcolor>8.49%</S.textspecialcolor>
                      </S.bottomtextwrapper>
                </S.bottomrow>
           </S.SwapboxContainer>
          
           
           
    )       

}

export default Swapbox