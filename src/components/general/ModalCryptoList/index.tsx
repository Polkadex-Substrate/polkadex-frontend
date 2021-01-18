
import CurrencyValueSwapbox from 'components/general/CurrenciesValueSwapbox';
import Icon from 'components/general/Icon'
import SidebarDropdown from 'components/general/SidebarDropdown'
import { useState } from 'react';
import { Span } from '../Checkbox/styles';
import Currencylist from '../Currencieslist';
import Searchbar from '../Searchbar';
import * as S from './styles'

const ModalCryptoList = ({ ModalCloseHandler , SetCryptolistLefthandler ,leftalignvalue}) => {

   const  Clickhandler = () =>{
        ModalCloseHandler(false)
        SetCryptolistLefthandler(false)
  
   }

     return (
        
              
                    <S.LeftCurrencyColumn>
                         <S.CryptocurrenciesWrapper>
                              <S.WrapperTitle>
                                 <S.pointercursor  onClick={() => SetCryptolistLefthandler(true)}>  Select Coin </S.pointercursor>
                  {/* <button onClick={() => setisModalOpen(false)}>Close wrapper</button>  */}
                             
                                    <S.Iconwrapper onClick={Clickhandler}><Icon source="Close" size="XSmall" background="None" />   </S.Iconwrapper>
                              </S.WrapperTitle>
                              <S.SearchWrapper>
                                   <Searchbar placeholder="Search name or paste address " type="search" />
                              </S.SearchWrapper>
                              <S.TextWrapper>
                                   <S.Image src={`/img/icons/top-bottom-white.svg`}  />
                                   Coin
                              </S.TextWrapper>
                              <Currencylist valuecolumn={false} />
                              <S.WrapperDefault>
                                   <div>Default List</div>
                                   <div>change</div>
                              </S.WrapperDefault>
                         </S.CryptocurrenciesWrapper>
                    </S.LeftCurrencyColumn>
         
            
         

     )

}

export default ModalCryptoList