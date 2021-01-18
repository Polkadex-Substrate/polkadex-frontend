import React from 'react'
import * as S from './style'

import Icon from '../Icon'

export type RowProps = {
  active: boolean;
}

const Currency = ({ currency, setCurrency, active }) => {
    return (
        <S.Row onClick={setCurrency} active={active}>
            <S.DetailsWrapper>
                <S.ImageWrapper>
                    <S.Image src={`img/cryptocurrencies/${currency.type}.png`}/>
                </S.ImageWrapper>

                <S.NameWrapper>
                    <S.Name>{currency.name}</S.Name>
                    <S.Type>{currency.type}</S.Type>
                </S.NameWrapper>
            </S.DetailsWrapper>

            <S.ValueWrapper>
                <S.Value>{currency.value.toFixed(8)}</S.Value>
                <Icon source={"ArrowRight"} size={"XSmall"} />
            </S.ValueWrapper>
        </S.Row>
    )
}

export default Currency
