import * as S from './styles'
import Icon from '../Icon'

type OpenOrderProps = {
  price: string;
  amount: string;
  tradeAmount: number;
  status: string;
  fee: number;
  side: string;
}

type Props = {
  data?: OpenOrderProps[]
  remove?: (id:string) => void
  filters?: {
    hiddenPairs: boolean
    onlyBuy: boolean
    onlySell: boolean
    status: string
  }
}

const OpenOrderTable = ({ data }: Props) => (
  <>
    {data && <S.Wrapper>
      <S.Table>
        <S.Thead>
          <S.Tr>
            <S.Th>Status</S.Th>
            <S.Th>Pair</S.Th>
            <S.Th>Side</S.Th>
            <S.Th>Price</S.Th>
            <S.Th>Amount</S.Th>
            <S.Th>Trade Amount</S.Th>
            <S.Th>Fee</S.Th>
          </S.Tr>
        </S.Thead>
        <S.Tbody>
          {data.map((order, index) => (
            <S.Tr key={index}>
              <S.Td>
                <S.Tag>Status</S.Tag>
                <S.Status>
                  {
                    order.status === 'isFinalized'
                    ? <Icon source='Clock-green' size={'Small'} background={'None'} />
                    : <Icon source='Clock' size={'Small'} background={'None'} />
                  }
                  {order.status}
                </S.Status>
              </S.Td>

              <S.Td>
                <S.Tag>Pair</S.Tag>
                <S.ContainerFlex>
                  <S.Image src={`img/cryptocurrencies/BTC.png`}  />
                  <span>BTC / USDT</span>
                </S.ContainerFlex>
              </S.Td>

              <S.Td>
                <S.Tag>Side</S.Tag>
                <S.ContainerFlex>
                  <S.Image src={`img/icons/${(order.side === 'AskLimit' || order.side === 'AskMarket' ) ? 'Sell' : 'Buy'}.svg`} />
                  <span>{(order.side === 'AskLimit' || order.side === 'AskMarket' ) ? 'Sell' : 'Buy'}</span>
                </S.ContainerFlex>
              </S.Td>

              <S.Td>
                <S.Tag>Price</S.Tag>
                <span>{order.price}</span>
              </S.Td>

              <S.Td>
                <S.Tag>Amount</S.Tag>
                <span>{order.amount}</span>
              </S.Td>

              <S.Td>
                <S.Tag>Trade Amount</S.Tag>
                <span>{order.tradeAmount}</span>
              </S.Td>

              <S.Td>
                <S.Tag>Fee</S.Tag>
                <span>{order.fee}</span>
              </S.Td>
            </S.Tr>
          ))}
        </S.Tbody>
      </S.Table>

    </S.Wrapper> }
  </>

)

export default OpenOrderTable
