import Dropdown from 'components/general/Dropdown'
import DropdownItem from 'components/general/DropdownItem'
import Heading from 'components/general/Heading'
import Icon from 'components/general/Icon'
import OrderBookIcon from 'components/general/OrderBookIcon'
import OrderBookTable from 'components/general/OrderBookTable'
import Searchbar from 'components/general/Searchbar'
import {useMemo,useState} from "react"
import Currencylist from '../../../../components/general/Currencieslist'

import * as S from './styles'


const Cryptocurrencies = () => {
  

  return (
      <S.LeftCurrencyColumn>
          <S.CryptocurrenciesWrapper>
              <S.WrapperTitle>
                 Cryptocurrencies                  
                </S.WrapperTitle>
                <S.SearchWrapper>
                    <Searchbar placeholder="Search.." type="search"/>   
                    <S.Iconwrapper><Icon source="Settings" size="Small" background="Black"/></S.Iconwrapper>         
                </S.SearchWrapper> 

               <Currencylist/>
          </S.CryptocurrenciesWrapper>
      </S.LeftCurrencyColumn>
  )
}

export default Cryptocurrencies
