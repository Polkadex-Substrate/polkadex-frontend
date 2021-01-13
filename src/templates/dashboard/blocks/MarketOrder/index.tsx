import React, { useEffect, useState } from 'react'
import { Tab, TabList, TabPanel, Tabs, resetIdCounter } from 'react-tabs';

import Dropdown from 'components/general/Dropdown'
import DropdownItem from 'components/general/DropdownItem';
import MarketOrderAction from 'components/general/MarketOrderAction'
import * as S from './styles'

const MarketOrder = ({ setOpenOrder, price, amount, setPrice, setAmount, validAccount, latestTransaction, blockchainApi, setActiveIndex }) => {
  const [orderType, setOrderType] = useState("Limit Order")
  const [dropdownState, setDropdownState] = useState(false)

  const handleChange = (select: string) => {
    setDropdownState(false);
    setOrderType(select)
  }

  useEffect(() => {
    setPrice(latestTransaction.toFixed(4))
  }, [latestTransaction !== 0])

  resetIdCounter();

  return (
    <S.Section>
      <Tabs>
        <S.Header>
          <TabList>
            <Tab>Buy BTC</Tab>
            <Tab>Sell BTC</Tab>
          </TabList>
          <Dropdown title={orderType} active={dropdownState} setDropdownState={setDropdownState}>
            <>
              <DropdownItem title="Limit Order" handleAction={handleChange} />
              <DropdownItem title="Market Order" handleAction={handleChange} />
            </>
          </Dropdown>
        </S.Header>

        <TabPanel>
          <MarketOrderAction type="Buy" setOpenOrder={setOpenOrder}
                             orderType={orderType}
                             account={validAccount}
                             blockchainApi={blockchainApi}
                             setActiveIndex={setActiveIndex}
                             price={price} setPrice={setPrice}
                             amount={amount} setAmount={setAmount} />
        </TabPanel>
        <TabPanel>
          <MarketOrderAction type="Sell" setOpenOrder={setOpenOrder}
                             orderType={orderType}
                             account={validAccount}
                             blockchainApi={blockchainApi}
                             setActiveIndex={setActiveIndex}
                             price={price} setPrice={setPrice}
                             amount={amount} setAmount={setAmount} />
        </TabPanel>
      </Tabs>
    </S.Section>
  )
}

export default MarketOrder
