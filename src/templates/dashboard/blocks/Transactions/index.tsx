import Checkbox from 'components/general/Checkbox'
import DateRange from 'components/general/DateRange';
import Dropdown from 'components/general/Dropdown'
import DropdownItem from 'components/general/DropdownItem';
import Icon from 'components/general/Icon'
import TransactionTable from 'components/general/TransactionTable'
import { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import { ITransactions } from './ITransactions';
import * as S from './styles'

const initialFilters = {
  hiddenPairs: false,
  onlyBuy: false,
  onlySell: false,
  status: "All Transactions"
}

const Transactions = ({ data, newTradeData, remove }: ITransactions, pair = "DOT") => {
  const [filters, setFilters] = useState(initialFilters)

  // Filters Actions
  const handleChangeHidden = () =>  setFilters({ ...filters, hiddenPairs: !filters.hiddenPairs })
  const handleChangeStatus = (status: string) => setFilters({ ...filters, status })
  const handleChangeBuy = () => setFilters({ ...filters, onlyBuy: !filters.onlyBuy })
  const handleChangeSell = () => setFilters({ ...filters, onlySell: !filters.onlySell! })

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
            <Checkbox title="Hide Other Pairs" checked={filters.hiddenPairs} action={handleChangeHidden} />
            <S.ContainerActions>
              <Checkbox title="Buy" checked={filters.onlyBuy} action={handleChangeBuy}/>
              <Checkbox title="Sell" checked={filters.onlySell} action={handleChangeSell}/>
            </S.ContainerActions>
            <S.ContainerTransactions>
              <Dropdown title={filters.status}>
                <>
                  <DropdownItem title="All Transactions" handleAction={handleChangeStatus} />
                  <DropdownItem title="Pending" handleAction={ handleChangeStatus} />
                  <DropdownItem title="Completed" handleAction={handleChangeStatus} />
                  <DropdownItem title="Canceled" handleAction={handleChangeStatus} />
                </>
              </Dropdown>
              {/*<DateRange /> */}
            </S.ContainerTransactions>
          </S.WrapperActions>
        </S.Header>
        <TabPanel>
          <TransactionTable data={data} remove={remove} filters={filters}/>
        </TabPanel>
        <TabPanel>
          <TransactionTable data={data} remove={remove} filters={filters}/>
        </TabPanel>
        <TabPanel>
          <TransactionTable data={data} remove={remove} filters={filters} />
        </TabPanel>
        <TabPanel>
          <TransactionTable data={newTradeData} remove={remove} filters={filters} />
        </TabPanel>
      </Tabs>

    </S.Section>
  )
}

export default Transactions
