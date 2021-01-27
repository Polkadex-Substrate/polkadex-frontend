import * as S from './styles'

import CurrencyValueSwapBox from 'templates/swap/blocks/CurrenciesValueSwapbox'
import Icon from '../../../../components/general/Icon'

const MyOrders = ({ handleChange, cryptoList, balance, currentCurrency }) => {
  return (
    <S.MyOrders>
      <S.FirstRow>
        <Icon background="Black" source="Wallet" size="Medium" />
        <S.WrapperBalance>
          <S.SpanTextBlur>My balance</S.SpanTextBlur>
          <span>{balance.toFixed(8)} DOT</span>
        </S.WrapperBalance>
      </S.FirstRow>
      <S.SecondRow>
        <CurrencyValueSwapBox value={balance} type={'DOT'}
                              text={'From'} handleClickEvent={handleChange}/>
        <Icon source="Exchange_B" size="XMedium" />
        <CurrencyValueSwapBox value={currentCurrency.value} type={currentCurrency.type}
                              text={'To'} handleClickEvent={cryptoList} />
      </S.SecondRow>
      <S.ThirdRow>
        <S.LoginButton>Connect Wallet</S.LoginButton>
        <S.TextWrapper>
          <S.Blur>Price</S.Blur> 0.01013 DOT per BTC
        </S.TextWrapper>
      </S.ThirdRow>
    </S.MyOrders>
  )

}

export default MyOrders
