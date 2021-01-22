import React, { useState } from 'react'
import Link from 'next/link'

import * as S from './styles'
import SocialIcons from '../../components/general/SocialIcons'
import BackgroundPattern from '../../components/general/BackgroundPattern'
import DropdownItem from '../../components/general/DropdownItem'
import Dropdown from '../../components/general/Dropdown'

export default function Landing({ account, allAccounts, setAccount }) {

  const [dropdownState, setDropdownState] = useState(false)

  const setAccountDropdown = (account) => {
    setAccount(account);
    setDropdownState(false);
  }

  return (
    <div style={{display: 'flex', height: '100vh', width: '100vw', backgroundColor: '#101213', padding: '1rem 2rem', position: 'fixed'}}>
      <BackgroundPattern/>

      <S.LeftWrapper>
        <div>
          <S.PolkaLogo src="img/Logo.svg" alt="Polkadex"></S.PolkaLogo>
          <S.ScheduleHeading>Upcoming Testnet Release Schedules</S.ScheduleHeading>
          <S.ReleasePoints>
            <S.PointWrapper><S.Number>01.</S.Number>Enable Multiple Markets </S.PointWrapper>
            <S.PointWrapper><S.Number>02.</S.Number>Fluid Switch Protocol </S.PointWrapper>
            <S.PointWrapper><S.Number>03.</S.Number>Custom Trading Bots </S.PointWrapper>
            <S.PointWrapper><S.Number>04.</S.Number>Polkadex Parachain Integration </S.PointWrapper>
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
          <S.Content>The following interface shows simulated trades from one of the largest centralized exchanges, processing about 20-30 trades per second on average for BTC-USDT. In this release, the public can place trades and play around with the exchange interface. The testnet tokens required for this can be asks in the Polkadex telegram group. There will be frequent restarts of the testnet by our development team. The next release of our testnet will enable public to run a node. Most of the features are disabled for now and will be enabled as per the following schedule.</S.Content>
          <S.Account>
            <S.DropdownWrapperWithErrorMessage>
              <S.DropdownWrapper>
                <S.AccountHeading>Select Account:</S.AccountHeading>
                {
                  allAccounts?.length > 0
                  && <Dropdown title={account?.meta?.name} active={dropdownState} setDropdownState={setDropdownState}>
                      {
                        allAccounts?.map((account, index) => {
                          return <DropdownItem title={account.meta.name} handleAction={() => setAccountDropdown(account)}
                                               key={index}/>
                        })
                      }
                    </Dropdown>
                }
              </S.DropdownWrapper>
              {
                !allAccounts &&
                <S.AccountMessage>Please install <a href="https://github.com/polkadot-js/extension" target="_blank"> PolkadotJS extension</a>, create an account and refresh</S.AccountMessage>
              }
            </S.DropdownWrapperWithErrorMessage>

            <S.ButtonWrapper>
              <Link href="/dashboard">
                <S.LoginButton>Login with PolkadotJS</S.LoginButton>
              </Link>
              <div>
                <a href="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fblockchain.polkadex.trade#/explorer" target="_blank">
                  <S.ExplorerButton>Go to Polkadex Explorer</S.ExplorerButton>
                </a>
              </div>
              {/*<Link href="/twitter">*/}
                {/*<S.TweetButton disabled={!account}>Get Testnet Tokens from Twitter</S.TweetButton>*/}
              {/*</Link>*/}
            </S.ButtonWrapper>
          </S.Account>
        </S.DisclaimerWrapper>
        <S.SocialLinks>
          For further information:
          <SocialIcons/>
        </S.SocialLinks>
      </S.ContentWrapper>
    </div>
  );
}
