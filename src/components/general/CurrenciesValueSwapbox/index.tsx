import SidebarDropdown from '../SidebarDropdown'
import * as S from './style'


const CurrencyValueSwapbox =({CoinValue,Cointype , Fromto , handleclickevent})=>{

  
  return (
            <S.BlockWrapper onClick={handleclickevent} >
                <S.NoDarkBlockWrapper>
                <S.smalltext>{Fromto}</S.smalltext>
                <span>{CoinValue}</span>
                </S.NoDarkBlockWrapper>
                <S.DarkBlockWrapper>
                    <S.RowinsideDarkBlockWrapper>
                    <S.CoinImage src={`img/cryptocurrencies/${Cointype}.png`} />
                    <span>{Cointype}</span>
                    <SidebarDropdown rotation = 'rotate(0deg)'  backgroundcolor='#ffffff' hoverrotation='rotate(180deg)' icon='ArrowDownBlack' />
                    </S.RowinsideDarkBlockWrapper>
                </S.DarkBlockWrapper>
           </S.BlockWrapper> 
            
                        )
   }

export default CurrencyValueSwapbox