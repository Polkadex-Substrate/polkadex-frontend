const fakeTransactionsOrders = [
  {
    id: 1,
    date: new Date("2020-01-01"),
    pair: "DOT",
    coin: "BTC",
    side: "sell",
    price: 0.00798219,
    fee: 0.000129,
    total: 0.001434442,
    status: true
  },
  {
    id: 2,
    date: new Date("2020-01-01"),
    pair: "DOT",
    coin: "BTC",
    side: "buy",
    price: 0.013567863,
    fee: 0.000340,
    total: 0.002579643,
    status: false
  },
  {
    id: 3,
    date: new Date("2020-01-01"),
    pair: "DOT",
    coin: "BTC",
    side: "sell",
    price: 0.00542224,
    fee: 0.0000202,
    total: 0.001343441,
    status: false
  },
  {
    id: 4,
    date: new Date("2020-01-01"),
    pair: "BTC",
    coin: "DOT",
    side: "buy",
    price: 0.002134564,
    fee: 0.000143,
    total: 0.006467852,
    status: true
  },
  {
    id: 5,
    date: new Date("2020-01-01"),
    pair: "BTC",
    coin: "DOGE",
    side: "buy",
    price: 0.015753518,
    fee: 0.000521,
    total: 0.026764236,
    status: true
  },
]

export default fakeTransactionsOrders
