import Link from 'components/general/Link'
import NavbarDropdown from 'components/general/NavbarDropdown'
import NavbarItem from 'components/general/NavbarItem'
import NavbarLanguage from 'components/general/NavbarLanguage'
import NavbarPair from 'components/general/NavbarPair'
import Dinero from "dinero.js"
import { IMarketToken } from 'utils/Interfaces'

import * as S from './styles'
const testPairs = [
  {
    id: 1,
    name: "USDT"
  },
]

type BlockProps = {
  volume: number;
  high: number;
  low: number;
  blockPrice: string;
}

type Props = {
  blockValues: BlockProps,
  lastTradePrice: number,
  lastTradePriceType: 'AskLimit' | 'BidLimit'
}
const Navbar = () => {
  return (
  <S.Wrapper>
   
    <S.WrapperLinks>
      <Link title="Market" href="#" />
      <NavbarDropdown title="Trade" />
      <NavbarDropdown title="Derivatives" />
      <NavbarDropdown title="Finance" />
      <NavbarLanguage />

    </S.WrapperLinks>
  </S.Wrapper>
)
}

export default Navbar
