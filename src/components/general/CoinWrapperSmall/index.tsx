import SidebarDropdown from '../SidebarDropdown'
import * as S from './style'


const CoinWrapper =({CoinName,CoinType})=>{

  return (<S.CoinWrapper>
            <S.CoinImage src={`img/cryptocurrencies/${CoinType}.png`} />
            <S.NameandValueColumn>
                <span>{CoinType}</span>
                <S.BlurText>{CoinName}</S.BlurText>
            </S.NameandValueColumn>
          </S.CoinWrapper>
            
                        )
   }

export default CoinWrapper