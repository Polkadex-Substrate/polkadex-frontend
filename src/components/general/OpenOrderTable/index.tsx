import * as S from './styles'

type OpenOrderProps = {
  price: string;
  amount: string;
  tradeAmount: number;
  status: string;
  fee: number;
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
                <span>{order.status}</span>
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
                  <S.Image src={`img/icons/${data.side === 'AskLimit' ? 'Sell' : 'Buy'}.svg`} />
                  <span>{data.side === 'AskLimit' ? 'Sell' : 'Buy'}</span>
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
