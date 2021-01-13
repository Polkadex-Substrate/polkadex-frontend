import NavbarDropdown from 'components/general/NavbarDropdown'
import SidebarDropdown from 'components/general/SidebarDropdown'
import MyOrders from '../MyOrders'
import * as S from './styles'

const Swapbox =()=>{

    return( <S.SwapboxContainer>
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

                    </S.Rowthree>
                </S.SwapboxWrapper>
           </S.SwapboxContainer>
    )       

}

export default Swapbox