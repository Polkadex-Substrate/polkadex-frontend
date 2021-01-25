import React, { useState } from 'react';
import * as S from './style'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import 'react-tabs/style/react-tabs.css'
import WithdrawBTC from './WithdrawBTC'
import DepositBTC from './DepositBTC'
import { CurrencyDetails } from '../CryptoCurrencies'

export type InputProps = {
  currentCurrency: CurrencyDetails
  lastTradePrice: any
}

const DepositWithdrawTab = ({ currentCurrency, lastTradePrice }: InputProps) => {

    const [activeIndex, setActiveIndex] = useState(0)
    const [walletAddress, setWalletAddress] = useState()

    return (
        <S.MiddleCurrencyColumn>
            <S.TabSection>
                <Tabs selectedIndex={activeIndex} onSelect={(index) => setActiveIndex(index)}>
                    <S.TabHeader currentTab={activeIndex}>
                        <TabList>
                            <Tab>Withdraw BTC</Tab>
                            <Tab>Deposit BTC</Tab>
                        </TabList>
                    </S.TabHeader>
                    <TabPanel>
                        <S.Wrapper>
                            <WithdrawBTC currentCurrency={currentCurrency}
                                         lastTradePrice={lastTradePrice}
                                         walletAddress={walletAddress} setWalletAddress={setWalletAddress} />
                        </S.Wrapper>
                    </TabPanel>
                    <TabPanel>
                        <S.Wrapper>
                            <DepositBTC/>
                        </S.Wrapper>
                    </TabPanel>
                </Tabs>
            </S.TabSection>
        </S.MiddleCurrencyColumn>
    )
}

export default DepositWithdrawTab
