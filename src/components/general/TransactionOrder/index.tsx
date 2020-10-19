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
  pending?: boolean
}

const TransactionOrder = ({date, pending = false, coin, pair, side, price, fee, total}:TransactionOrderProps) => (
  <S.Tr>
    <S.Td>
      <S.ContainerFlex>
        {pending ?
          <>
          <S.Image src="/img/icons/Clock.svg" />
          <span>Pending</span>
          </> :
          date
        }

      </S.ContainerFlex>
    </S.Td>

    <S.Td>
      <S.ContainerFlex>
        <S.Image src={`img/cryptocurrencies/${pair}.svg`}  />
        <span>{coin} / {pair}</span>
      </S.ContainerFlex>
    </S.Td>

    <S.Td>
      <S.ContainerFlex>
        <S.Image src={`img/icons/${side}.svg`} />
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
        {pending && <Icon source="Close" background="Primary" size="XSmall" />}

        <Icon source="Options" background="None" size='Small'/>
      </S.ContainerActions>

    </S.Td>
  </S.Tr>
)

export default TransactionOrder
