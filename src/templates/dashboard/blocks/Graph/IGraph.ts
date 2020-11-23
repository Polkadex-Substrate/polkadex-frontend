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
export type IGraph = {
  orderBook?: IOrderBookData[]
  graphData: any
}
