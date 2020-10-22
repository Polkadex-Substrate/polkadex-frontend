import Checkbox from 'components/general/Checkbox'
import Dropdown from 'components/general/Dropdown'
import DropdownItem from 'components/general/DropdownItem';
import Icon from 'components/general/Icon'
import Link from 'components/general/Link';
import TransactionTable from 'components/general/TransactionTable'
import { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import * as S from './styles'

const Transactions = () => {
  const [filterState, setFilterState] = useState("All Transactions")
  const handleChange = (select: string) => setFilterState(select)
  return (
    <S.Section>
      <Tabs>
        <S.Header>
          <TabList>
            <Tab>Open Orders</Tab>
            <Tab>Order History</Tab>
            <Tab>Trade History</Tab>
            <Tab>Funds</Tab>
          </TabList>
          <S.WrapperActions>
            <Checkbox title="Hide Other Pairs" checked={true} />
            <S.ContainerActions>
              <Checkbox title="Buy" />
              <Checkbox title="Sell" />
            </S.ContainerActions>
            <S.ContainerTransactions>
              <Dropdown title={filterState}>
                <>
                  <DropdownItem title="All Transactions" handleAction={handleChange} />
                  <DropdownItem title="Pending" handleAction={handleChange} />
                  <DropdownItem title="Completed" handleAction={handleChange} />
                  <DropdownItem title="Canceled" handleAction={handleChange} />
                </>
              </Dropdown>
              <Icon source="Transactions" background="Gray" size="Medium" />
            </S.ContainerTransactions>
          </S.WrapperActions>
        </S.Header>
        <TabPanel>
          <TransactionTable />
        </TabPanel>
        <TabPanel>
          <TransactionTable />
        </TabPanel>
        <TabPanel>
          <TransactionTable />
        </TabPanel>
        <TabPanel>
          <TransactionTable />
        </TabPanel>
      </Tabs>

    </S.Section>
  )
}

export default Transactions
