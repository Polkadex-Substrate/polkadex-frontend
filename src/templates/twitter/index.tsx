import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import * as S from './styles'
import SocialIcons from '../../components/general/SocialIcons'
import BackgroundPattern from '../../components/general/BackgroundPattern'
import { toast } from 'react-toastify'

export default function Twitter() {
  const [accountId, setAccountId] = useState('');
  const tweet = 'Hey @polkadex it\'s ' + accountId + ', give me some @polkadex testnet tokens for https://testnet.polkadex.trade';

  useEffect(() => {
    const getExtensionAddress = async () => {
      const polkadotExtensionDapp = await import('@polkadot/extension-dapp');
      const extensions = await polkadotExtensionDapp.web3Enable('Polkadex');
      if (extensions.length > 0) {
        const allAccounts = await polkadotExtensionDapp.web3Accounts();
        if (allAccounts.length > 0) {
          setAccountId(allAccounts[0].address)
        } else {
          toast.warn('Please create account in Polka extension first.')
        }
      } else {
        toast.warn('Please install Polka Chrome extension first.')
      }
    }
    getExtensionAddress();
  }, [])

  return (
    <S.ModalWrapper>
      <BackgroundPattern/>
      <S.PolkaLogo>
        <Link href="/">
          <img src="img/Logo.svg" alt="Polkadex" />
        </Link>
      </S.PolkaLogo>
      <S.Content>
        <S.Heading>
          Tweet at the Polkadex to get some tokens.
        </S.Heading>
      </S.Content>
      <S.MessageWrapper>
        <S.ExternalMessageBox>
          <img src="img/twitter-black.png" alt="Twitter" />
          {tweet} #Polkadex
        </S.ExternalMessageBox>
        <S.ExternalMessageBox>
          <img src="img/twitter-black.png" alt="Twitter" />
          {tweet} #Polkadex
        </S.ExternalMessageBox>
        <S.MessageBox>
          <img src="img/twitter.png" alt="Twitter" />
          {tweet} #Polkadex
        </S.MessageBox>
        <S.ExternalMessageBox>
          <img src="img/twitter-black.png" alt="Twitter" />
          {tweet} #Polkadex
        </S.ExternalMessageBox>
        <S.ExternalMessageBox>
          <img src="img/twitter-black.png" alt="Twitter" />
          {tweet} #Polkadex
        </S.ExternalMessageBox>
      </S.MessageWrapper>
      <S.ButtonWrapper>
        <S.BackButton>
          <Link href="/dashboard">
            Go to Dashboard
          </Link>
        </S.BackButton>
        <S.TwitterButton target="_blank"
                         // disabled={accountId === ''}
                         href={'https://twitter.com/intent/tweet?text=' + tweet.toString() + '&&hashtags=Polkadex'}
                         data-size="large">
          <S.TwitterImage src="img/twitter.png" alt="Twitter" />
          Tweet
        </S.TwitterButton>
      </S.ButtonWrapper>
      <S.SocialIconWrapper>
        <S.Text>For further information:</S.Text>
        <SocialIcons/>
      </S.SocialIconWrapper>
    </S.ModalWrapper>
  )
}
