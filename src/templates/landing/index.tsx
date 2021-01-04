import React from 'react'
import Link from 'next/link'

import * as S from './styles'
import SocialIcons from '../../components/general/SocialIcons'
import BackgroundPattern from '../../components/general/BackgroundPattern'

export default function Landing() {

  return (
    <div style={{display: 'flex', height: '100vh', width: '100vw', backgroundColor: '#101213', padding: '1rem 2rem', position: 'fixed'}}>
      <BackgroundPattern/>

      <S.LeftWrapper>
        <div>
          <S.PolkaLogo src="img/Logo.svg" alt="Polkadex"></S.PolkaLogo>
          <S.ScheduleHeading>Upcoming Testnet Release Schedules</S.ScheduleHeading>
          <S.ReleasePoints>
            <S.PointWrapper><S.Number>01.</S.Number>Enable Public to Submit Trades </S.PointWrapper>
            <S.PointWrapper><S.Number>02.</S.Number>Enable Multiple Markets </S.PointWrapper>
            <S.PointWrapper><S.Number>03.</S.Number>Fluid Switch Protocol </S.PointWrapper>
            <S.PointWrapper><S.Number>04.</S.Number>Custom Trading Bots </S.PointWrapper>
            <S.PointWrapper><S.Number>05.</S.Number>Enable Asset Management Systems </S.PointWrapper>
            <S.PointWrapper><S.Number>06.</S.Number>Polkadex Parachain Integration </S.PointWrapper>
            <S.PointWrapper><S.Number>07.</S.Number>Polkadex Themed Block explorer</S.PointWrapper>
          </S.ReleasePoints>
        </div>
        <S.Copyright>
          &#169; 2020 Polkadex <br />
          All Rights, Terms & Conditions Apply
        </S.Copyright>
      </S.LeftWrapper>

      <S.ContentWrapper>
        <S.DisclaimerWrapper>
          <S.ContentHeading>Disclaimer</S.ContentHeading>
          <S.Content>The following interface shows simulated trades from one of the largest centralized exchanges, processing about 20-30 trades per second on average for BTC-USDT. In this release, the public cannot submit trades as it is a private testnet release to find the stability of Polkadex nodes. There will be frequent restarts of the testnet by our development team. The next release of our testnet will enable public to run a node, check the blocks and submit trades. Most of the features are disabled for now and will be enabled as per the following schedule.</S.Content>
          <S.ButtonWrapper>
            <Link href="/dashboard">
              <S.LoginButton>Login with PolkadotJS</S.LoginButton>
            </Link>
            <Link href="/twitter">
              <S.TweetButton>Get Testnet Tokens from Twitter</S.TweetButton>
            </Link>
          </S.ButtonWrapper>
        </S.DisclaimerWrapper>
        <S.SocialLinks>
          For further information:
          <SocialIcons/>
        </S.SocialLinks>
      </S.ContentWrapper>
    </div>
  );
}