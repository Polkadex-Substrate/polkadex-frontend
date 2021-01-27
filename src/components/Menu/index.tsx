import React from 'react'
import * as S from './styles'

import Icon from 'components/general/Icon'
import Logo from 'components/general/Logo'
import LogoBlack from 'components/general/LogoBlack'
import { useRouter } from 'next/router'
import ThemeSwitcher from 'components/general/ThemeSwitcher'
import { useTheme ,Theme} from '../../Context/ThemeContext'

const Menu = ( ) => {

  const { asPath } = useRouter()
  const { theme, setTheme } = useTheme();

  return (
    <S.Wrapper>
      <S.WrapperLinks>
      {theme ==  Theme.Dark
            ? <Logo size="Medium"/>
            : <LogoBlack size="Medium"/> 
            }  
      
        <S.Container>
          <S.WrapperIcon>
            <div>
            {theme ==  Theme.Dark
            ?<Icon source="Graph" size="Small" background="None"/>
            : <Icon source="GraphLm" size="Small" background="None"/>
            }  
            </div>
            <S.Span>Markets</S.Span>
          </S.WrapperIcon>
          <S.WrapperIcon href={asPath === '/dashboard' ? '#' : '/dashboard'} className={asPath === '/dashboard' && 'active'}>
            <div>              
              {theme ==  Theme.Dark
            ?
            <Icon source="Exchange" size="Small" background="None"/>
            :
             <Icon source="ExchangeLm" size="Small" background="None"/>
            } 
            </div>
            <div>
              <S.Span>Exchange</S.Span>
            </div>
          </S.WrapperIcon>
          <S.WrapperIcon href={asPath === '/wallet' ? '#' : '/wallet'} className={asPath === '/wallet' && 'active'}>
            <div>
            {theme ==  Theme.Dark
            ?
             <Icon source="Wallet" size="Small" background="None"/>
            :
             <Icon source="WalletLm" size="Small" background="None"/>
            } 
            
            </div>
            <div>
              <S.Span>Wallets</S.Span>
            </div>
          </S.WrapperIcon>
          <S.WrapperIcon href={asPath === '/swap' ? '#' : '/swap'} className={asPath === '/swap' && 'active'}>
            <div>
            
              {theme ==  Theme.Dark
            ?
             <Icon source="News" size="Small" background="None"/>
            :
             <Icon source="NewsLm" size="Small" background="None"/>
            } 
            </div>
            <div>
              <S.Span>Swap</S.Span>
            </div>
          </S.WrapperIcon>
        </S.Container>
        <S.Container>
          <S.WrapperIcon href="#">
            <div>
             
              {theme ==  Theme.Dark
            ?
            <Icon source="History" size="Small" background="None"/>
            :
             <Icon source="HistoryLm" size="Small" background="None"/>
            } 
            </div>
            <S.Span>My History</S.Span>
          </S.WrapperIcon>
          <S.WrapperIcon href="#">
            <div>
            
            {theme ==  Theme.Dark
            ?
            <Icon source="Transactions" size="Small" background="None"/>
            :
             <Icon source="TransactionLm" size="Small" background="None"/>
            } 
            </div>
            <S.Span>Transactions</S.Span>
          </S.WrapperIcon>
        </S.Container>
        <S.Container>
          <S.WrapperIcon href="#">
            <div>
            {theme ==  Theme.Dark
            ?
             <Icon source="News" size="Small" background="None"/>
            :
             <Icon source="NewsLm" size="Small" background="None"/>
            } 
            </div>
            <S.Span>Affiliates</S.Span>
          </S.WrapperIcon>
          <S.WrapperIcon href="#">
            <div>
            
            {theme ==  Theme.Dark
            ?
            <Icon source="Help" size="Small" background="None"/>
            :
             <Icon source="HelpLm" size="Small" background="None"/>
            } 
            </div>
            <S.Span>Support</S.Span>
          </S.WrapperIcon>
        </S.Container>    
         <ThemeSwitcher/>       
      </S.WrapperLinks>
        
      <S.WrapperProfile>
      
        {theme ==  Theme.Dark
            ?
            <Icon source="Notifications" size="Small" background="None"/>
            :
            <Icon source="NotificationLm" size="Small" background="None"/>
            } 
        <S.Profile src="/img/Avatar.png"/>
      </S.WrapperProfile>
    </S.Wrapper>
  )
}

export default Menu
