import React, { useEffect, useState } from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import Dropdown from 'components/general/Dropdown'
import DropdownItem from 'components/general/DropdownItem';
import MarketOrderAction from 'components/general/MarketOrderAction'
import * as S from './styles'

const MarketOrder = ({ setOpenOrder, price, amount, setPrice, setAmount, validAccount, latestTransaction, blockchainApi }) => {
  const [state, setState] = useState("Limit Order")
  const handleChange = (select: string) => setState(select)

  useEffect(() => {
    setPrice(latestTransaction)
  }, [latestTransaction !== 0])

  return (
    <S.Section>
      <Tabs>
        <S.Header>
          <TabList>
            <Tab>Buy BTC</Tab>
            <Tab>Sell BTC</Tab>
          </TabList>
          <Dropdown title={state} >
            <>
              <DropdownItem title="Limit Order" handleAction={handleChange} />
            </>
          </Dropdown>
        </S.Header>

        <TabPanel>
          <MarketOrderAction type="Buy" setOpenOrder={setOpenOrder}
                             account={validAccount}
                             blockchainApi={blockchainApi}
                             price={price} setPrice={setPrice}
                             amount={amount} setAmount={setAmount} />
        </TabPanel>
        <TabPanel>
          <MarketOrderAction type="Sell" setOpenOrder={setOpenOrder}
                             account={validAccount}
                             blockchainApi={blockchainApi}
                             price={price} setPrice={setPrice}
                             amount={amount} setAmount={setAmount} />
        </TabPanel>
      </Tabs>
    </S.Section>
  )
}

export default MarketOrder
