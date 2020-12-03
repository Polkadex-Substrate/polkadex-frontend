export type ITransactionData = {
  id: string
  date: Date
  pair: string
  coin: string
  side: 'AskLimit' | 'BidLimit'
  price: number
  quantity: number
  total: number
  status: boolean
}

export type ITransactions = {
  data?: ITransactionData[]
  newTradeData?: ITransactionData[];
  remove?: (id: string) => void
}

