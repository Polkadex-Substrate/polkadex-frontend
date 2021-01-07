import { useEffect, useState } from 'react'
import BN from 'bn.js';
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
  account: any
  blockchainApi: any
}
const MarketOrderAction = ({ type = 'Buy', setOpenOrder, price, amount, setPrice, setAmount, account, blockchainApi }: MarketOrderActionProps) => {

  const [slider, setSlider] = useState({ values: [50] })
  const [available, setAvailable] = useState(0)

  const tradingPairID = "0xf28a3c76161b8d5723b6b8b092695f418037c747faa2ad8bc33d8871f720aac9";
  const UNIT = 1000000000000;

  useEffect(() => {
    blockchainApi?.query.genericAsset.freeBalance(type === 'Buy' ? 1 : 2, account.address, (data) => {
      setAvailable(+data.toString() / UNIT);
    });
  }, [blockchainApi])

  const cleanString = (value) => {
    let pos = value.indexOf(".");
    if (pos === -1 ){
      return value;
    } else {
      return value.substring(0, pos);
    }
  }

  const startTransaction = async () => {
    if (account.address) {
      const polkadotExtensionDapp = await import('@polkadot/extension-dapp');
      const injector = await polkadotExtensionDapp.web3FromSource(account.meta.source);

      toast.success(type + ' initiated');
      let transferExtrinsic = blockchainApi.tx.polkadex.submitOrder(
        type === 'Buy' ? "BidLimit" : "AskLimit",
        tradingPairID,
        new BN(cleanString((parseFloat(price + '') * UNIT).toString()),10),
        new BN(cleanString((parseFloat(amount + '') * UNIT).toString()),10)
      );

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
        toast.success(`Transaction status: ${status.type}`);
      }).catch((error: any) => {
        toast.success('Transaction failed: ' + error);
      });
    }
  }

  const setSliderValue = (sliderValue: {values: number[]}) => {
    setAmount(available * (+sliderValue.values[0].toFixed(0)));
    setSlider(sliderValue);
  }

  useEffect(() => {
    setAmount((available * (+slider.values[0].toFixed(0))) / 100)
  })

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
          <Button type="button" title={type} fullWidth={true} click={startTransaction} disabled={!account?.address} />
        </form>
      </S.ContainerForm>
    </S.WrapperOrder>
  )
}

export default MarketOrderAction
