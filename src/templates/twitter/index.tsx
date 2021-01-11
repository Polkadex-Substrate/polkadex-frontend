import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { webSocket } from '../../components/dashboard/CustomChart/api/stream'
import * as S from './styles'
import SocialIcons from '../../components/general/SocialIcons'
import BackgroundPattern from '../../components/general/BackgroundPattern'

export default function Twitter({ account }) {
  const [buttonClick, setButtonClick] = useState(false);
  const tweet = 'Hey @polkadex it\'s ' + account?.address + ', give me some @polkadex testnet tokens for https://testnet.polkadex.trade';
  const router = useRouter()

  const webSocketInstance = webSocket;

  const listeningTweet = () => {
    setButtonClick(true);
    webSocketInstance.emit('new-token-request', account?.address);
    webSocketInstance.on('tweet-success', (data) => {
      console.log(data);
      setButtonClick(false);
      router.push('/dashboard');
    })
  }

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
      {
        buttonClick ?
          <S.Loader>
            <p>Listening to Tweet</p>
            <img src="img/loader.gif" alt="Loader"/>
          </S.Loader>
          :
          <S.ButtonWrapper>
            <S.BackButton>
              <Link href="/dashboard">
                Go to Dashboard
              </Link>
            </S.BackButton>
            <S.TwitterButton target="_blank"
               // disabled={!(account && account.address)}
               onClick={() => listeningTweet()}
               href={'https://twitter.com/intent/tweet?text=' + tweet.toString() + '&&hashtags=Polkadex'}
               data-size="large">
              <S.TwitterImage src="img/twitter.png" alt="Twitter"/>
              Tweet
            </S.TwitterButton>
          </S.ButtonWrapper>
      }
      <S.SocialIconWrapper>
        <S.Text>For further information:</S.Text>
        <SocialIcons/>
      </S.SocialIconWrapper>
    </S.ModalWrapper>
  )
}
