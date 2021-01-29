import React from 'react'
import * as S from './styles'

import Icon from 'components/general/Icon'
import Logo from 'components/general/Logo'
import { useRouter } from 'next/router'
import ThemeSwitcher from 'components/general/ThemeSwitcher'
import { Theme, useTheme } from '../../Context/ThemeContext'

const Menu = () => {

  const { asPath } = useRouter()
  const { theme } = useTheme()

  return (
    <S.Wrapper>
      <S.WrapperLinks>
        <Logo size="Medium"/>
        <S.Container>
          <S.WrapperIcon>
            <div>
              <Icon source={(theme === Theme.Dark ? 'Graph' : 'GraphLm')} size="Small" background="None"/>
            </div>
            <S.Span>Markets</S.Span>
          </S.WrapperIcon>
          <S.WrapperIcon href={asPath === '/dashboard' ? '#' : '/dashboard'}
                         className={asPath === '/dashboard' && 'active'}>
            <div>
              <Icon source={theme === Theme.Dark ? 'Exchange' : 'ExchangeLm'} size="Small" background="None"/>
            </div>
            <div>
              <S.Span>Exchange</S.Span>
            </div>
          </S.WrapperIcon>
          <S.WrapperIcon href={asPath === '/wallet' ? '#' : '/wallet'} className={asPath === '/wallet' && 'active'}>
            <div>
              <Icon source={theme === Theme.Dark ? 'Wallet' : 'WalletLm'} size="Small" background="None"/>
            </div>
            <div>
              <S.Span>Wallets</S.Span>
            </div>
          </S.WrapperIcon>
          <S.WrapperIcon href={asPath === '/swap' ? '#' : '/swap'} className={asPath === '/swap' && 'active'}>
            <div>
              <Icon source={theme == Theme.Dark ? 'News' : 'NewsLm'} size="Small" background="None"/>
            </div>
            <div>
              <S.Span>Swap</S.Span>
            </div>
          </S.WrapperIcon>
        </S.Container>
        <S.Container>
          <S.WrapperIcon href="#">
            <div>
              <Icon source={theme == Theme.Dark ? 'History' : 'HistoryLm'} size="Small" background="None"/>
            </div>
            <S.Span>My History</S.Span>
          </S.WrapperIcon>
          <S.WrapperIcon href="#">
            <div>
              <Icon source={theme === Theme.Dark ? 'Transactions' : 'TransactionLm'} size="Small" background="None"/>
            </div>
            <S.Span>Transactions</S.Span>
          </S.WrapperIcon>
        </S.Container>
        <S.Container>
          <S.WrapperIcon href="#">
            <div>
              <Icon source={theme === Theme.Dark ? 'News' : 'NewsLm'} size="Small" background="None"/>
            </div>
            <S.Span>Affiliates</S.Span>
          </S.WrapperIcon>
          <S.WrapperIcon href="#">
            <div>
              <Icon source={theme === Theme.Dark ? 'Help' : 'HelpLm'} size="Small" background="None"/>
            </div>
            <S.Span>Support</S.Span>
          </S.WrapperIcon>
        </S.Container>
        <ThemeSwitcher/>
      </S.WrapperLinks>
      <S.WrapperProfile>
        <Icon source={theme === Theme.Dark ? 'Notifications' : 'NotificationLm'} size="Small" background="None"/>
        <S.Profile src="/img/Avatar.png"/>
      </S.WrapperProfile>
    </S.Wrapper>
  )
}

export default Menu
