import * as S from './style'

const CoinWrapper = ({ name, type }) => {

  return (
    <S.CoinWrapper>
      <S.CoinImage alt="cryptocurrencyimage" src={`img/cryptocurrencies/${type}.png`}/>
      <S.NameAndValueColumn>
        <span>{type}</span>
        <S.BlurText>{name}</S.BlurText>
      </S.NameAndValueColumn>
    </S.CoinWrapper>

  )
}

export default CoinWrapper
