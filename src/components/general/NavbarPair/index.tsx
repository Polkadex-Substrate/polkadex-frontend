import { useState } from 'react'

import Dropdown from '../Dropdown'
import DropdownItem from '../DropdownItem'
import Icon from '../Icon'
import * as S from './styles'

type IPairs = {
  id: number
  name: string
}
export type NavbarPairProps = {
  coin?:string
  pairs?: IPairs[]

}

const NavbarPair = ({ coin, pairs }: NavbarPairProps) => {
  const [state, setState] = useState("BTC")
  const handleChange = (select: string) => setState(select)

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
        <Icon source="Exchange" />
      </S.WrapperExchange>
      <S.WrapperCoin>
        <S.Label>
          Pair
      </S.Label>

        <Dropdown title={state}>
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
