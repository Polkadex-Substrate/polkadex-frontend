import SidebarDropdown from '../../../../components/general/SidebarDropdown'
import * as S from './style'

const CurrencyValueSwapBox = ({ value, type, text, handleClickEvent }) => {

  return (
    <S.BlockWrapper onClick={handleClickEvent}>
      <S.NoDarkBlockWrapper>
        <S.SmallText>{text}</S.SmallText>
        <span>{value}</span>
      </S.NoDarkBlockWrapper>
      <S.DarkBlockWrapper>
        <S.RowInsideDarkBlockWrapper>
          <S.CoinImage src={`img/cryptocurrencies/${type}.png`} alt="cryptocurrencies icon"/>
          <span>{type}</span>
          <SidebarDropdown rotation='rotate(0deg)' backgroundColor='#ffffff' hoverRotation='rotate(180deg)'
                           icon='ArrowDownBlack'/>
        </S.RowInsideDarkBlockWrapper>
      </S.DarkBlockWrapper>
    </S.BlockWrapper>

  )
}

export default CurrencyValueSwapBox
