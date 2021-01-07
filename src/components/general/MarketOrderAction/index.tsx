import { useEffect, useState } from 'react'

import { ApiPromise, WsProvider } from '@polkadot/api'
import { toast } from 'react-toastify'

import Button from '../Button'
import Dropdown from '../Dropdown'
import Icon from '../Icon'
import Input from '../Input'
import Link from '../Link'
import Range from '../Range'
import * as S from './styles'
import { webSocket } from '../../dashboard/CustomChart/api/stream'

export type MarketOrderActionProps = {
  type?: 'Sell' | 'Buy'
  setOpenOrder: any
  price: number
  amount: number
  setPrice: any
  setAmount: any
  account: any
}
const MarketOrderAction = ({ type = 'Buy', setOpenOrder, price, amount, setPrice, setAmount, account }: MarketOrderActionProps) => {
  const wsProvider = new WsProvider('wss://blockchain.polkadex.trade');
  const wsProviderInstance = webSocket


  const [slider, setSlider] = useState({ values: [50] })
  const [available, setAvailable] = useState(2)

  const tradingPairID = '0xf28a3c76161b8d5723b6b8b092695f418037c747faa2ad8bc33d8871f720aac9'
  const UNIT = 1000000000000

  useEffect(() => {
    const fetchAvailableBalance = async () => {
      const api = await ApiPromise.create({
        types: {
          'OrderType': {
            '_enum': [
              'BidLimit',
              'BidMarket',
              'AskLimit',
              'AskMarket',
            ],
          },
          'Order': {
            'id': 'Hash',
            'trading_pair': 'Hash',
            'trader': 'AccountId',
            'price': 'FixedU128',
            'quantity': 'FixedU128',
            'order_type': 'OrderType',
          },
          'Order4RPC': {
            'id': '[u8;32]',
            'trading_pair': '[u8;32]',
            'trader': '[u8;32]',
            'price': 'Vec<u8>',
            'quantity': 'Vec<u8>',
            'order_type': 'OrderType',
          },
          'MarketData': {
            'low': 'FixedU128',
            'high': 'FixedU128',
            'volume': 'FixedU128',
            'open': 'FixedU128',
            'close': 'FixedU128',

          },
          'LinkedPriceLevel': {
            'next': 'Option<FixedU128>',
            'prev': 'Option<FixedU128>',
            'orders': 'Vec<Order>',
          },
          'LinkedPriceLevelRpc': {
            'next': 'Vec<u8>',
            'prev': 'Vec<u8>',
            'orders': 'Vec<Order4RPC>',
          },
          'Orderbook': {
            'trading_pair': 'Hash',
            'base_asset_id': 'u32',
            'quote_asset_id': 'u32',
            'best_bid_price': 'FixedU128',
            'best_ask_price': 'FixedU128',
          },
          'OrderbookRPC': {
            'trading_pair': '[u8;32]',
            'base_asset_id': 'u32',
            'quote_asset_id': 'u32',
            'best_bid_price': 'Vec<u8>',
            'best_ask_price': 'Vec<u8>',
          },
          'OrderbookUpdates': {
            'bids': 'Vec<FrontendPricelevel>',
            'asks': 'Vec<FrontendPricelevel>',
          },
          'FrontendPricelevel': {
            'price': 'FixedU128',
            'quantity': 'FixedU128',
          },
          'LookupSource': 'AccountId',
          'Address': 'AccountId',
        },
        rpc: {
          polkadex: {
            getAllOrderbook: {
              description: ' Blah',
              params: [],
              type: 'Vec<OrderbookRpc>',
            },
            getAskLevel: {
              description: ' Blah',
              params: [
                {
                  name: 'trading_pair',
                  type: 'Hash',
                },
              ],
              type: 'Vec<FixedU128>',
            },
            getBidLevel: {
              description: ' Blah',
              params: [
                {
                  name: 'trading_pair',
                  type: 'Hash',
                },
              ],
              type: 'Vec<FixedU128>',
            },
            getMarketInfo: {
              description: ' Blah',
              params: [
                {
                  name: 'trading_pair',
                  type: 'Hash',
                },
                {
                  name: 'blocknum',
                  type: 'u32',
                },
              ],
              type: 'MarketDataRpc',
            },
            getOrderbook: {
              description: ' Blah',
              params: [
                {
                  name: 'trading_pair',
                  type: 'Hash',
                },
              ],
              type: 'OrderbookRpc',
            },
            getOrderbookUpdates: {
              description: 'Gets best 10 bids & asks',
              params: [
                {
                  name: 'at',
                  type: 'Hash',
                },
                {
                  name: 'trading_pair',
                  type: 'Hash',
                },
              ],
              type: 'OrderbookUpdates',
            },
            getPriceLevel: {
              description: ' Blah',
              params: [
                {
                  name: 'trading_pair',
                  type: 'Hash',
                },
              ],
              type: 'Vec<LinkedPriceLevelRpc>',
            },
          },
        },
        provider: wsProvider,
      })
      api.query.genericAsset.FreeBalance(type === 'Buy' ? 1 : 2, account?.address, (data) => {
        console.log('Market Order');
        console.log(data);
      });
    }
    fetchAvailableBalance()
  }, [])

  const startTransaction = async () => {
    if (account.address) {
      const api = await ApiPromise.create({ provider: wsProviderInstance })
      const polkadotExtensionDapp = await import('@polkadot/extension-dapp')
      const injector = await polkadotExtensionDapp.web3FromSource(account.meta.source)
      let transferExtrinsic
      if (type === 'Buy') {
        toast.success('Buy initiated')
        transferExtrinsic = api.tx.polkadex.submitOrder(
          'BidLimit',
          tradingPairID,
          (parseFloat(price + '') * UNIT),
          (parseFloat(amount + '') * UNIT),
        )
      } else if (type === 'Sell') {
        toast.success('Sold initiated')
        transferExtrinsic = api.tx.polkadex.submitOrder(
          'AskLimit',
          tradingPairID,
          (parseFloat(price + '') * UNIT),
          (parseFloat(amount + '') * UNIT),
        )
      }

      transferExtrinsic.signAndSend(account.address, { signer: injector.signer }, ({ status }) => {
        setOpenOrder({
          price,
          amount,
          tradeAmount: price * amount,
          status: status.type,
          fee: (0.2 * price * amount),
          side: type === 'Sell' ? 'AskLimit' : 'BidLimit',
        })
        setPrice('')
        setAmount('')
        if (status.isInBlock) {
          toast.success('Transaction successful')
          console.log(`Completed at block hash #${status.asInBlock.toString()}`)
        } else {
          console.log(`Current status: ${status.type}`)
        }
      }).catch((error: any) => {
        console.log(':( transaction failed', error)
      })
    }
  }

  const setSliderValue = (sliderValue: { values: number[] }) => {
    setAmount(available * (+sliderValue.values[0].toFixed(0)))
    setSlider(sliderValue)
  }

  useEffect(() => {
    setAmount(available * (+slider.values[0].toFixed(0)))
  }, [])

  return (
    <S.WrapperOrder>
      <S.ContainerWallet>
        <Icon source="Wallet" background="DarkGray" size="Medium"/>
        <S.WrapperBalance>
          <span>Available</span>
          <S.Span>{available} {type === 'Buy' ? 'USDT' : 'BTC'}</S.Span>
        </S.WrapperBalance>
      </S.ContainerWallet>
      <S.ContainerForm>
        <form onSubmit={() => console.log('Submiting..')}>
          <Input label="Price" icon="ArrowVerticalTop" placeholder="0.0000000" value={price}
                 type="text" inputInfo="USDT" fullWidth={true} setValue={(inputPrice) => setPrice(inputPrice)}/>
          <Input label="Amount" icon="ArrowVerticalBottom" placeholder="0.0000000" value={amount}
                 type="text" inputInfo="BTC" fullWidth={true} setValue={(inputAmount) => setAmount(inputAmount)}/>
          <S.WrapperActions>
            <p>Equivalent ~
              <span> $0</span>
            </p>
            <Dropdown title="Fee 0 PDX">
              <Link title="Custom Fee"/>
            </Dropdown>
          </S.WrapperActions>
          <Range values={slider.values} setValues={(value) => setSliderValue(value)}/>
          <Button type="button" title={type} fullWidth={true} click={startTransaction} disabled={!account?.address}/>
        </form>
      </S.ContainerForm>
    </S.WrapperOrder>
  )
}

export default MarketOrderAction
