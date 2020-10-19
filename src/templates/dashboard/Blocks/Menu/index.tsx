import Icon from 'components/general/Icon'
import Logo from 'components/general/Logo'

import * as S from './styles'

const Menu = () => (
  <S.Wrapper>
    <S.WrapperLinks>
      <Logo size="Medium" />
      <S.Container>
        <S.WrapperIcon href="#">
          <Icon source="Graph" size="Small" background="None" />
          <S.Span>Markets</S.Span>
        </S.WrapperIcon>
        <S.WrapperIcon href="#">
        <Icon source="Exchange" size="Small" background="None"/>
          <S.Span>Exchange</S.Span>
        </S.WrapperIcon>
        <S.WrapperIcon href="#">
        <Icon source="Wallet" size="Small" background="None"/>
          <S.Span>Wallets</S.Span>
        </S.WrapperIcon>
      </S.Container>
      <S.Container>
        <S.WrapperIcon href="#">
        <Icon source="History" size="Small" background="None"/>
          <S.Span>My History</S.Span>
        </S.WrapperIcon>
        <S.WrapperIcon href="#">
        <Icon source="Transactions" size="Small" background="None"/>
          <S.Span>Transaction history</S.Span>
        </S.WrapperIcon>
      </S.Container>
      <S.Container>
        <S.WrapperIcon href="#">
          <Icon source="News" size="Small" background="None"/>
          <S.Span>Affiliates</S.Span>
        </S.WrapperIcon>
        <S.WrapperIcon href="#">
          <Icon source="Help" size="Small" background="None" />
          <S.Span>Support</S.Span>
        </S.WrapperIcon>
      </S.Container>
      <S.WrapperIcon onClick={() => console.log("Light Mode")} href="#">
        <Icon source="Sun" size="Small" background="LightGray"/>
        <S.Span>Dark Mode</S.Span>
      </S.WrapperIcon>
      </S.WrapperLinks>
    <S.WrapperProfile>
      <Icon source="Notifications" size="Small" background="None" />
      <S.Profile src="/img/Avatar.png"/>
    </S.WrapperProfile>
</S.Wrapper>
)

export default Menu
