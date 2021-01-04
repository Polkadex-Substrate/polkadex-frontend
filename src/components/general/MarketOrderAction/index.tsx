import { useState } from 'react'

const {ApiPromise, WsProvider} = require('@polkadot/api');
import { toast } from 'react-toastify';

import Button from '../Button'
import Dropdown from '../Dropdown'
import Icon from '../Icon'
import Input from '../Input'
import Link from '../Link'
import Range from '../Range'
import * as S from './styles'

export type MarketOrderActionProps = {
  type?: 'Sell' | 'Buy'
  setOpenOrder: any
  price: number
  amount: number
  setPrice: any
  setAmount: any
}
const MarketOrderAction = ({ type = 'Buy', setOpenOrder, price, amount, setPrice, setAmount }: MarketOrderActionProps) => {
  const wsProvider = new WsProvider('ws://0.0.0.0:9944');
  const [slider, setSlider] = useState({ values: [50] })
  const [available, setAvailable] = useState(2)

  const tradingPairID = "0xf28a3c76161b8d5723b6b8b092695f418037c747faa2ad8bc33d8871f720aac9";
  const UNIT = 1000000000000;

  const startTransaction = async () => {
    const api = await ApiPromise.create({
      provider: wsProvider,
      types: {
        "OrderType": {
          "_enum": [
            "BidLimit",
            "BidMarket",
            "AskLimit",
            "AskMarket"
          ]
        },
        "Order": {
          "id": "Hash",
          "trading_pair": "Hash",
          "trader": "AccountId",
          "price": "FixedU128",
          "quantity": "FixedU128",
          "order_type": "OrderType"
        },
        "MarketData": {
          "low": "FixedU128",
          "high": "FixedU128",
          "volume": "FixedU128",
          "open": "FixedU128",
          "close": "FixedU128"

        },
        "LinkedPriceLevel": {
          "next": "Option<FixedU128>",
          "prev": "Option<FixedU128>",
          "orders": "Vec<Order>"
        },
        "Orderbook": {
          "trading_pair": "Hash",
          "base_asset_id": "u32",
          "quote_asset_id": "u32",
          "best_bid_price": "FixedU128",
          "best_ask_price": "FixedU128"
        },
        "LookupSource": "AccountId",
        "Address": "AccountId"
      },
    });
    const polkadotExtensionDapp = await import('@polkadot/extension-dapp');
    const extensions = await polkadotExtensionDapp.web3Enable('Polkadex');

    if (extensions && extensions.length > 0) {
      const allAccounts = await polkadotExtensionDapp.web3Accounts();
      let transferExtrinsic;
      if (allAccounts.length > 0) {
        const account = allAccounts[0];
        const injector = await polkadotExtensionDapp.web3FromSource(account.meta.source);
        if (type === 'Buy') {
          toast.success('Buy initiated');
          transferExtrinsic = api.tx.polkadex.submitOrder(
            "BidLimit",
            tradingPairID,
            (parseFloat(price + '') * UNIT),
            (parseFloat(amount + '') * UNIT)
          );
        } else if (type === 'Sell') {
          toast.success('Sold initiated');
          transferExtrinsic = api.tx.polkadex.submitOrder(
            "AskLimit",
            tradingPairID,
            (parseFloat(price + '') * UNIT),
            (parseFloat(amount + '') * UNIT)
          );
        }

        transferExtrinsic.signAndSend(account.address, { signer: injector.signer }, ({ status }) => {
          setOpenOrder({price, amount, tradeAmount: price * amount,status: status.type, fee: (0.2*price*amount), side: type === 'Sell' ? 'AskLimit' : 'BidLimit'});
          setPrice('');
          setAmount('');
          if (status.isInBlock) {
            toast.success('Transaction successful');
            console.log(`Completed at block hash #${status.asInBlock.toString()}`);
          } else {
            console.log(`Current status: ${status.type}`);
          }
        }).catch((error: any) => {
          console.log(':( transaction failed', error);
        });
      }
    } else if (extensions && extensions.length === 0) {
      toast.info('Please create account in Polka Extension');
    } else {
      toast.warn('Please install the Polka Extension');
    }
  }

  return (
    <S.WrapperOrder>
      <S.ContainerWallet>
        <Icon source="Wallet" background="DarkGray" size="Medium" />
        <S.WrapperBalance>
          <span>Available</span>
          <S.Span>{available} { type === 'Buy' ? 'USDT' : 'BTC' }</S.Span>
        </S.WrapperBalance>
      </S.ContainerWallet>
      <S.ContainerForm>
        <form onSubmit={() => console.log("Submiting..")}>
          <Input label="Price" icon="ArrowVerticalTop" placeholder="0.0000000" value={price}
                 type="text" inputInfo="BTC" fullWidth={true} setValue={(inputPrice) => setPrice(inputPrice)} />
          <Input label="Amount" icon="ArrowVerticalBottom" placeholder={available*slider.values[0].toFixed(0)} value={amount}
                 type="text" inputInfo="USDT" fullWidth={true} setValue={(inputAmount) => setAmount(inputAmount)} />
          <S.WrapperActions>
            <p>Equivalent ~
            <span> $0</span>
            </p>
            <Dropdown title="Fee 0 PDX">
              <Link title="Custom Fee" />
            </Dropdown>
          </S.WrapperActions>
          <Range values={slider.values} setValues={(value) => setSlider(value)} />
          <Button type="button" title={type} fullWidth={true} click={startTransaction} />
        </form>
      </S.ContainerForm>
    </S.WrapperOrder>
  )
}

export default MarketOrderAction
