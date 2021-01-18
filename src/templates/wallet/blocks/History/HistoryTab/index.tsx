import React from 'react'
import * as S from './styles'

const HistoryTab = ({ history }) => {

    return (
        <S.MainWrapper>
            <S.TimeAndHashWrapper>
                <div>{history.time}</div>
                <S.Hash>{history.hash}</S.Hash>
            </S.TimeAndHashWrapper>

            <S.CurrencyWrapper>
                <S.Image src={`img/icons/${history.side === 'AskLimit' ? 'Sell' : 'Buy'}.svg`} />
                <S.Currency side={history.side}>0.23422 DOT</S.Currency>
            </S.CurrencyWrapper>
        </S.MainWrapper>
    )
}

export default HistoryTab
