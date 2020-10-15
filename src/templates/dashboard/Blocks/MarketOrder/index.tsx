import Dropdown from 'components/general/Dropdown'
import Icon from 'components/general/Icon'

import * as S from './styles'

const MarketOrder = () => (
  <S.Section>
    <S.Header>
      <S.Tab>
      <li>Buy DOT</li>
      <li>Sell DOT</li>
    </S.Tab>
        <Dropdown title="Market Order" >
          <p>exmeplo</p>
        </Dropdown>
    </S.Header>

    <S.WrapperOrder>
      <S.ContainerWallet>
        <Icon source="Wallet" background="DarkGray" size="Medium" />
        <S.WrapperBalance>
          <span>Available</span>
          <S.Span>0.93871332 DOT</S.Span>
        </S.WrapperBalance>
      </S.ContainerWallet>
      <S.ContainerForm>
        <p>Price Buy Input</p>
        <p>Price Sell Input</p>
        <S.WrapperActions>
          <p>Equivalent ~
            <span> $92.54</span>
          </p>
          <Dropdown title="Fee">
            <p>test</p>
          </Dropdown>
        </S.WrapperActions>
        <p>Price Sell Input</p>
        <p>Slider</p>
        <button>
          Buy 12940 DOT
        </button>
      </S.ContainerForm>
    </S.WrapperOrder>

</S.Section>
)

export default MarketOrder
