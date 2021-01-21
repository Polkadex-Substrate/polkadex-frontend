import SidebarDropdown from '../../../../components/general/SidebarDropdown'
import * as S from './style'


const CurrencyValueSwapBox = ({ CoinValue, CoinType, FromTo, handleClickEvent }) => {


    return (
        <S.BlockWrapper onClick={handleClickEvent} >
            <S.NoDarkBlockWrapper>
                <S.SmallText>{FromTo}</S.SmallText>
                <span>{CoinValue}</span>
            </S.NoDarkBlockWrapper>
            <S.DarkBlockWrapper>
                <S.RowInsideDarkBlockWrapper>
                    <S.CoinImage src={`img/cryptocurrencies/${CoinType}.png`} />
                    <span>{CoinType}</span>
                    <SidebarDropdown rotation='rotate(0deg)' backgroundColor='#ffffff' hoverRotation='rotate(180deg)' icon='ArrowDownBlack' />
                </S.RowInsideDarkBlockWrapper>
            </S.DarkBlockWrapper>
        </S.BlockWrapper>

    )
}

export default CurrencyValueSwapBox