import React from 'react'
import * as S from './style'

export type InputProps = {
    btcBalance: number
    usdBalance: number
}

const BalanceHeader = ({ btcBalance, usdBalance }: InputProps) => {
    return (
        <S.BalanceHeaderWrapper>
            <S.ContentBlur>Total Balance</S.ContentBlur>
            <S.ContentHeading> {btcBalance.toFixed(8)} BTC</S.ContentHeading>
            <S.ContentBlur> ~{usdBalance.toFixed(2)} USD</S.ContentBlur>
        </S.BalanceHeaderWrapper>
    )
}


export default BalanceHeader
