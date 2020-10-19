import Button from 'components/general/Button'
import Dropdown from 'components/general/Dropdown'
import Icon from 'components/general/Icon'
import Input from 'components/general/Input'
import Range from 'components/general/Range'

import * as S from './styles'

const MarketOrder = () => (
  <S.Section>
    <S.Header>
      <S.Tab>
      <li>Buy DOT</li>
      <li>Sell DOT</li>
    </S.Tab>
        <Dropdown title="Market Order" >
          <p>Testing..</p>
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
        <form onSubmit={()=> console.log("Submiting..")}>
        <Input label="Price" icon="ArrowVerticalTop" placeholder="0.0000000" type="text" inputInfo="BTC" fullWidth={true}/>
        <Input label="Amount" icon="ArrowVerticalBottom" placeholder="0.0000000" type="text" inputInfo="DOT" fullWidth={true}/>
        <S.WrapperActions>
          <p>Equivalent ~
            <span> $92.54</span>
          </p>
            <Dropdown title="Fee 0.0001 BTC">
            <p>test</p>
          </Dropdown>
        </S.WrapperActions>
          <Range />
          <Button type="button" title="Buy 12940 DOT" fullWidth={true} />
        </form>
      </S.ContainerForm>
    </S.WrapperOrder>

</S.Section>
)

export default MarketOrder
