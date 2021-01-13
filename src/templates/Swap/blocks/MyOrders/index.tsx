
import Icon from 'components/general/Icon'
import * as S from './styles'

const MyOrders =()=>{

    return( <S.Myorders>
              <S.FirstRow>
                 <S.middlecolumn>  

                        <S.ContainerWallet>
                            <Icon source="Wallet" background="Black" size="Medium" /> 
                        </S.ContainerWallet>
                        <S.WrapperBalance>
                        <S.Spantextblur>My Balance </S.Spantextblur>
                            <S.Span>0.9645734 DOT</S.Span>
                        </S.WrapperBalance>

                    </S.middlecolumn>   
              </S.FirstRow>
              <S.SecondRow>
                  
              </S.SecondRow>
              <S.ThirdRow></S.ThirdRow>
                
           </S.Myorders>
    )       

}

export default MyOrders