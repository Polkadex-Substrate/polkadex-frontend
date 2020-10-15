import Icon from '../Icon'
import * as S from './styles'

export type TransactionOrderProps = {
  date: string
  coin: string
  pair: string
  side: "Buy" | "Sell"
  price: number
  fee: number
  total: number
}

const TransactionOrder = ({date, coin, pair, side, price, fee, total}:TransactionOrderProps) => (
  <S.Tr>
    <S.Td>
      <S.ContainerFlex>
        <S.Image src="/img/icons/Clock.svg" />
        <span>{date}</span>
      </S.ContainerFlex>
    </S.Td>

    <S.Td>
      <S.ContainerFlex>
        <S.Image src="/img/icons/Clock.svg" />
        <span>{coin} / {pair}</span>
      </S.ContainerFlex>
    </S.Td>

    <S.Td>
      <S.ContainerFlex>
        <S.Image src="/img/icons/Clock.svg" />
        <span>{side}</span>
      </S.ContainerFlex>
    </S.Td>

    <S.Td>
      <span>{price}</span>
    </S.Td>

    <S.Td>
      <span>{fee} {coin}</span>
    </S.Td>

    <S.Td>
      <span>{total} {pair}</span>
    </S.Td>

    <S.Td>
      <S.ContainerActions>
        <Icon source="Close" background="Primary" size="Small"/>
        <Icon source="Options" background="None"/>
      </S.ContainerActions>

    </S.Td>
  </S.Tr>
)

export default TransactionOrder
