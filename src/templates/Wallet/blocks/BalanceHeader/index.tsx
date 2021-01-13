import * as S from './style'
import NavbarDropdown from 'components/general/NavbarDropdown'
import Icon from 'components/general/Icon'

export type InputProps = {  
    coloricon?: any
    rotation?: any    
  }

const BalanceHeader =()=>{      
    return(  
            <S.BalanceHeaderWrapper>
                <S.ContentBlur>Total Balance</S.ContentBlur>
                <S.ContentHeading>0.93871332 BTC</S.ContentHeading>
                <S.ContentBlur>~4243.00 USD</S.ContentBlur>
            </S.BalanceHeaderWrapper> 
         )    
}


export default BalanceHeader