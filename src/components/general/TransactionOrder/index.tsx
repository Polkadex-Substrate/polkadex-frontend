import moment from "moment"
import { ITransactionData,ITransactions } from 'templates/dashboard/blocks/Transactions/ITransactions'

import Icon from '../Icon'
import * as S from './styles'

type Props = {
  data?: ITransactionData
  remove?: () => void
}

const TransactionOrder = ({ data, remove }: Props) => (
  <S.Tr>
    <S.Td>
      <S.Tag>Date</S.Tag>
      <S.ContainerFlex>
        {data.status ?
          <>
            <S.Image src="/img/icons/Clock.svg" />
            <span>Pending</span>
          </> :
          moment(data.date).format("LLL")
        }

      </S.ContainerFlex>
    </S.Td>

    <S.Td>
      <S.Tag>Pair</S.Tag>
      <S.ContainerFlex>
        <S.Image src={`img/cryptocurrencies/${data.coin}.png`}  />
        <span>{data.coin} / {data.pair}</span>
      </S.ContainerFlex>
    </S.Td>

    <S.Td>
      <S.Tag>Side</S.Tag>
      <S.ContainerFlex>
        <S.Image src={`img/icons/${data.side}.svg`} />
        <span>{data.side}</span>
      </S.ContainerFlex>
    </S.Td>

    <S.Td>
      <S.Tag>Side</S.Tag>
      <span>{data.price}</span>
    </S.Td>

    <S.Td>
      <S.Tag>Side</S.Tag>
      <span>{data.fee} {data.coin}</span>
    </S.Td>

    <S.Td>
      <S.Tag>Side</S.Tag>
      <span>{data.total} {data.pair}</span>
    </S.Td>

    <S.Td>
      <S.Tag>Actions</S.Tag>
      <S.ContainerActions>
        {data.status && <Icon source="Close" background="Primary" size="XSmall" action={remove} />}
        <Icon source="Options" background="None" size='Small'/>
      </S.ContainerActions>

    </S.Td>
  </S.Tr>
)

export default TransactionOrder
