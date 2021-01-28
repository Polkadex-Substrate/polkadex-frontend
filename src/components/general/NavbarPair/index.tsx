import { useState } from 'react'
import Dropdown from '../Dropdown'
import DropdownItem from '../DropdownItem'
import Icon from '../Icon'
import * as S from './styles'
import { useTheme, Theme } from 'Context/ThemeContext';

type IPairs = {
  id: number
  name: string
}
export type NavbarPairProps = {
  coin?:string
  pairs?: IPairs[]

}

const NavbarPair = ({ coin, pairs }: NavbarPairProps) => {
  const [state, setState] = useState("USDT")
  const [dropdownState, setDropdownState] = useState(false)
  const { theme, setTheme } = useTheme();

  const handleChange = (select: string) => {
    setDropdownState(false);
    setState(select)
  }

  return (
    <S.Wrapper>
      <S.WrapperCoin>
        <S.Label>
          Coin
      </S.Label>
        <S.Container>
          <S.Image src={`img/cryptocurrencies/${coin}.png`} />
          <S.Name>
            {coin}
          </S.Name>
        </S.Container>
      </S.WrapperCoin>
      <S.WrapperExchange>
        <Icon source={theme === Theme.Dark? "Exchange" : "ExchangeDark"} background="None"/>
      </S.WrapperExchange>
      <S.WrapperCoin>
        <S.Label>
          Pair
      </S.Label>
        <Dropdown title={state} active={dropdownState} setDropdownState={setDropdownState}>
          <>
            {pairs.map( ({id, name}) => (
                <DropdownItem key={id} title={name} handleAction={handleChange} />
            ))}
          </>
        </Dropdown>
      </S.WrapperCoin>
    </S.Wrapper>
  )
}

export default NavbarPair
