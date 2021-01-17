export type IOrderBookData = {
  id: string
  date: Date
  pair: string
  coin: string
  side: 'buy' | 'sell'
  price: number
  amount: number
  total: number
}

export type Trade = {
  date: number;
  low: number;
  high: number;
  volume: number;
  open: number;
  close: number;
}

export type IGraph = {
  orderBookAsks?: IOrderBookData[]
  orderBookBids?: IOrderBookData[]
  latestTransaction: any
  latestTransactionType: any
}
