import SidebarDropdown from '../SidebarDropdown'
import * as S from './style'


const CoinWrapper =({CoinName,CoinType})=>{

  return (<S.coinwrapper>
            <S.CoinImage src={`img/cryptocurrencies/${CoinType}.png`} />
            <S.nameandvaluecolumn>
                <span>{CoinType}</span>
                <S.blurtext>{CoinName}</S.blurtext>
            </S.nameandvaluecolumn>
          </S.coinwrapper>
            
                        )
   }

export default CoinWrapper