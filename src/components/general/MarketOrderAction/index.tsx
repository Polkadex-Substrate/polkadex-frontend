import { useEffect, useState } from 'react'

import { ApiPromise, WsProvider } from '@polkadot/api';
import { toast } from 'react-toastify';

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
  const wsProvider = new WsProvider('wss://blockchain.polkadex.trade:9955');
  const wsProviderInstance = webSocket;


  const [slider, setSlider] = useState({ values: [50] })
  const [available, setAvailable] = useState(2)

  const tradingPairID = "0xf28a3c76161b8d5723b6b8b092695f418037c747faa2ad8bc33d8871f720aac9";
  const UNIT = 1000000000000;

  useEffect(() => {
    const fetchAvailableBalance = async () => {
      const api = await ApiPromise.create({ provider: wsProvider });
      // Wait until we are ready and connected
      await api.isReady;

      // Do something
      console.log(api.genesisHash.toHex());
      api.query.genericAsset.FreeBalance(type === 'Buy' ? 1 : 2, account.address, (data) => {
        console.log('Market Order');
        console.log(data);
      });
    }
    fetchAvailableBalance()
  }, [])

  const startTransaction = async () => {
    if (account.address) {
      const api = await ApiPromise.create({ provider: wsProviderInstance });
      const polkadotExtensionDapp = await import('@polkadot/extension-dapp');
      const injector = await polkadotExtensionDapp.web3FromSource(account.meta.source);
      let transferExtrinsic;
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
        setOpenOrder({
          price,
          amount,
          tradeAmount: price * amount,
          status: status.type,
          fee: (0.2 * price * amount),
          side: type === 'Sell' ? 'AskLimit' : 'BidLimit'
        });
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
  }

  const setSliderValue = (sliderValue) => {
    setAmount(available*(sliderValue.values[0].toFixed(0)));
    setSlider(sliderValue);
  }

  useEffect(() => {
    setAmount(available * (slider.values[0].toFixed(0)))
  }, [])

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
                 type="text" inputInfo="USDT" fullWidth={true} setValue={(inputPrice) => setPrice(inputPrice)} />
          <Input label="Amount" icon="ArrowVerticalBottom" placeholder="0.0000000" value={amount}
                 type="text" inputInfo="BTC" fullWidth={true} setValue={(inputAmount) => setAmount(inputAmount)} />
          <S.WrapperActions>
            <p>Equivalent ~
            <span> $0</span>
            </p>
            <Dropdown title="Fee 0 PDX">
              <Link title="Custom Fee" />
            </Dropdown>
          </S.WrapperActions>
          <Range values={slider.values} setValues={(value) => setSliderValue(value)} />
          <Button type="button" title={type} fullWidth={true} click={startTransaction} disabled={!account.address} />
        </form>
      </S.ContainerForm>
    </S.WrapperOrder>
  )
}

export default MarketOrderAction
