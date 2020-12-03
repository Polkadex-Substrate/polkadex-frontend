import React, { useState } from 'react';
import { Tab, TabList, TabPanel,Tabs } from 'react-tabs';

import Dropdown from 'components/general/Dropdown'
import DropdownItem from 'components/general/DropdownItem';
import MarketOrderAction from 'components/general/MarketOrderAction'
import * as S from './styles'

const MarketOrder = () => {
  const [state, setState] = useState("Limit Order")
  const handleChange = (select: string) => setState(select)

  return (
    <S.Section>
      <Tabs>
        <S.Header>
          <TabList>
            <Tab style={{ color: "#0CA564"}}>Buy BTC</Tab>
            <Tab>Sell BTC</Tab>
          </TabList>
          <Dropdown title={state} >
            <>
              <DropdownItem title="Market Order" handleAction={handleChange} />
              <DropdownItem title="Limit Order" handleAction={handleChange} />
              <DropdownItem title="Stop Order" handleAction={handleChange} />
            </>
          </Dropdown>
        </S.Header>

        <TabPanel>
          <MarketOrderAction type="Buy" />
        </TabPanel>
        <TabPanel>
          <MarketOrderAction type="Sell" />
        </TabPanel>
      </Tabs>
    </S.Section>
  )
}

export default MarketOrder
