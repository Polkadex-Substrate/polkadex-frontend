import NavbarItem from 'components/general/NavbarItem'
import NavbarPair from 'components/general/NavbarPair'

import * as S from './styles'

const Navbar = () => (
<S.Wrapper>
    <S.WrapperInfo>
      <S.ContainerPair>
        <NavbarPair coin={{
          name:"BTC",
          img:"/img/cryptocurrencies/dash.svg"
        }}
          pair={{
            name: "BTC"
          }}
        />
      </S.ContainerPair>
      <S.ContainerInfo>
        <NavbarItem label="Last Trade Price (BTC)" info="0.03209666" />
        <NavbarItem label="Price 24h" info="+52.47%" color='Red' />
        <NavbarItem label="Volume 24h (DOT)" info="71,459.80" />
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
      <a href="#">Market</a>
      <a href="#">Trade</a>
      <a href="#">Derivatives</a>
      <a href="#">Finance</a>
      <a href="#">EN/US</a>
    </S.WrapperLinks>
</S.Wrapper>
)

export default Navbar
