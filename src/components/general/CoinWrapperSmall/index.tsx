import SidebarDropdown from '../SidebarDropdown'
import * as S from './style'


const CoinWrapper =({CoinName,Cointype})=>{

  return (<S.coinwrapper>
            <S.CoinImage src={`img/cryptocurrencies/${Cointype}.png`} />
            <S.nameandvaluecolumn>
                <span>{Cointype}</span>
                <S.blurtext>{CoinName}</S.blurtext>
            </S.nameandvaluecolumn>
          </S.coinwrapper>
            
                        )
   }

export default CoinWrapper