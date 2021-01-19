import React, { useState } from 'react'
import * as S from './style'

import Icon from 'components/general/Icon'
import HistoryTab from './HistoryTab'
import Dropdown from 'components/general/Dropdown'
import DropdownItem from 'components/general/DropdownItem'

const History = ({ historyList }) => {
  const [filter, setFilter] = useState('All')
  const [dropdownState, setDropdownState] = useState(false)
  const handleAction = (select: string) => {
    setDropdownState(false)
    setFilter(select)
  }

  return (
    <S.RightCurrencyColumn>
      <S.HistoryHeader>
        <div>History</div>
        <S.FilterAndSettingWrapper>
          <Dropdown title={filter} active={dropdownState} setDropdownState={setDropdownState}>
            <>
              <DropdownItem title="All" handleAction={handleAction}/>
              <DropdownItem title="AskLimit" handleAction={handleAction}/>
              <DropdownItem title="MarketLimit" handleAction={handleAction}/>
            </>
          </Dropdown>
          <S.IconWrapper><Icon source="Settings" size="Small" background="Gray"/></S.IconWrapper>
        </S.FilterAndSettingWrapper>
      </S.HistoryHeader>
      {
        historyList
          .filter(({ side }) => side === filter || filter === "All")
          .map((history, index) => <HistoryTab history={history} key={index}/>)
      }
    </S.RightCurrencyColumn>
  )
}

export default History