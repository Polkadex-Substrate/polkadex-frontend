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
    name: "BTC"
  }
]
type Props = {
  currentToken: IMarketToken
}
const Navbar = ({ currentToken }: Props) => {
  return (
  <S.Wrapper>
    <S.WrapperInfo>
      <S.ContainerPair>
          <NavbarPair coin={currentToken.symbol} pairs={testPairs} />
      </S.ContainerPair>
      <S.ContainerInfo>
        <NavbarItem label="Last Trade Price (BTC)" info={Dinero({ amount: Math.round(currentToken.quote.USD.price * 100) }).toFormat('$0,0.00')} />
        <NavbarItem label="Price 24h" info={Dinero({ amount: Math.round(currentToken.quote.USD.percent_change_24h * 100) }).toFormat('$0,0.00')} />
        <NavbarItem label="Volume 24h (DOT)" info={Dinero({ amount: Math.round(currentToken.quote.USD.volume_24h * 100) }).toFormat('$0,0').toString().slice(0, 6)} />
        <S.WrapperVolume>
          <S.VolumeHigh>
            <S.Span>
              24h High
            </S.Span>
            <p>
              0.5020201
            </p>
          </S.VolumeHigh>
          <S.VolumeLow>
            <S.Span>
              24h High
            </S.Span>
            <p>
              0.5020201
            </p>
          </S.VolumeLow>

        </S.WrapperVolume>
      </S.ContainerInfo>
    </S.WrapperInfo>
    <S.WrapperLinks>
      <Link title="Market" href="#" />
      <NavbarDropdown title="Trade">
        <>
          <S.WrapperDropdownContent href="#">
            <S.DropdownTitle>
              Coming Soon
            </S.DropdownTitle>
          </S.WrapperDropdownContent>
        </>
      </NavbarDropdown>
      <NavbarDropdown title="Derivatives">
        <>
          <S.WrapperDropdownContent href="#">
            <S.DropdownTitle>
              Coming Soon
           </S.DropdownTitle>
          </S.WrapperDropdownContent>
        </>
      </NavbarDropdown>
      <NavbarDropdown title="Finance">
        <>
          <S.WrapperDropdownContent href="#">
            <S.DropdownTitle>
              Coming Soon
            </S.DropdownTitle>
          </S.WrapperDropdownContent>
        </>
      </NavbarDropdown>
      <NavbarLanguage />

    </S.WrapperLinks>
  </S.Wrapper>
)
}

export default Navbar
