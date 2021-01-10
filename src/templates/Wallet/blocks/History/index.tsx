import * as S from './style'
import NavbarDropdown from 'components/general/NavbarDropdown'
import Icon from 'components/general/Icon'
import HistoryListComponent from '../../../../components/general/Historylist'


  const History = () =>{
    return(   <S.RightCurrencyColumn>
                 <S.HistoryWrapper>
                      <S.HistoryHeader>
                        <div> History </div>
                        <S.AllPlusSettingIconWrapper>
                              <NavbarDropdown title="All" />
                              <S.Iconwrapper><Icon source="Settings" size="Small" background="Gray"/></S.Iconwrapper>
                        </S.AllPlusSettingIconWrapper>                        
                      </S.HistoryHeader>     
                      <HistoryListComponent/>
                  </S.HistoryWrapper>
              </S.RightCurrencyColumn>
         )
}


export default History