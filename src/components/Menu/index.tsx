import React from 'react'
import * as S from './styles'

import Icon from 'components/general/Icon'
import Logo from 'components/general/Logo'
import ActiveLink from '../general/ActiveLink'
import { useRouter } from 'next/router'

const Menu = () => {

  const { asPath } = useRouter()

  return (
    <S.Wrapper>
      <S.WrapperLinks>
        <Logo size="Medium"/>
        <S.Container>
          <S.WrapperIcon>
            <div>
              <Icon source="Graph" size="Small" background="None"/>
            </div>
            <S.Span>Markets</S.Span>
          </S.WrapperIcon>

          <S.WrapperIcon href={asPath === '/dashboard' ? '#' : '/dashboard'} className={asPath === '/dashboard' && 'active'}>
            <div>
              <Icon source="Exchange" size="Small" background="None"/>
            </div>
            <div>
              <S.Span>Exchange</S.Span>
            </div>
          </S.WrapperIcon>

          <S.WrapperIcon href={asPath === '/wallet' ? '#' : '/wallet'} className={asPath === '/wallet' && 'active'}>
            <div>
              <Icon source="Wallet" size="Small" background="None"/>
            </div>
            <div>
              <S.Span>Wallets</S.Span>
            </div>
          </S.WrapperIcon>

          <S.WrapperIcon href={asPath === '/swap' ? '#' : '/swap'} className={asPath === '/swap' && 'active'}>
            <div>
              <Icon source="News" size="Small" background="None"/>
            </div>
            <div>
              <S.Span>Swap</S.Span>
            </div>
          </S.WrapperIcon>
        </S.Container>

        <S.Container>
          <S.WrapperIcon href="#">
            <div>
              <Icon source="History" size="Small" background="None"/>
            </div>
            <S.Span>My History</S.Span>
          </S.WrapperIcon>
          <S.WrapperIcon href="#">
            <div>
              <Icon source="Transactions" size="Small" background="None"/>
            </div>
            <S.Span>Transactions</S.Span>
          </S.WrapperIcon>
        </S.Container>

        <S.Container>
          <S.WrapperIcon href="#">
            <div>
              <Icon source="News" size="Small" background="None"/>
            </div>
            <S.Span>Affiliates</S.Span>
          </S.WrapperIcon>
          <S.WrapperIcon href="#">
            <div>
              <Icon source="Help" size="Small" background="None"/>
            </div>
            <S.Span>Support</S.Span>
          </S.WrapperIcon>
        </S.Container>

        <S.WrapperIcon onClick={() => console.log('Light Mode')} href="#">
          <div>
            <Icon source="Sun" size="Small" background="LightGray"/>
          </div>
          <S.Span>Dark</S.Span>
        </S.WrapperIcon>
      </S.WrapperLinks>

      <S.WrapperProfile>
        <Icon source="Notifications" size="Small" background="None"/>
        <S.Profile src="/img/Avatar.png"/>
      </S.WrapperProfile>
    </S.Wrapper>
  )
}

export default Menu
