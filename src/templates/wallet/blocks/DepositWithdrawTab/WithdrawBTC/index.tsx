import React, { useEffect, useState } from 'react'
import * as S from './styles'
import 'react-tabs/style/react-tabs.css'

import Icon from 'components/general/Icon'
import WalletInput from '../../../../../components/general/WalletPageReadonlyInput'
import Range from '../../../../../components/general/Range'
import Button from '../../../../../components/general/Button'
import { CurrencyDetails } from '../../CryptoCurrencies'

export type WalletProps = {
    currentCurrency: CurrencyDetails
    walletAddress: string
    setWalletAddress: any
}

const WithdrawBTC = ({ currentCurrency, walletAddress, setWalletAddress }: WalletProps) => {
    const [slider, setSlider] = useState({ values: [50] })
    const [amount, setAmount] = useState(0.0016108506)
    const [fiat, setFiat] = useState(0.0016108506)

    const setSliderValue = (sliderValue) => {
        setSlider(sliderValue);
        setAmount(+(currentCurrency.value * sliderValue.values[0] / 100).toFixed(8));
    }

    const updateAmount = (inputAmount) =>  {
      if (inputAmount > currentCurrency.value || isNaN(inputAmount)) {
        return;
      }
      setSlider({values: [+((inputAmount*100) / currentCurrency.value).toFixed(2)]});
      setAmount(inputAmount);
    }

    useEffect(() => {
        setAmount(+(currentCurrency.value * slider.values[0] / 100).toFixed(8));
    }, [currentCurrency])

    return (
        <>
            <S.Header>
                <S.SymbolWrapper>
                    <S.ImageWrapper>
                        <S.Image src={`img/cryptocurrencies/` + currentCurrency.type + `.png`}/>
                    </S.ImageWrapper>
                    <S.InnerWrapper>
                        <S.Name>{currentCurrency.name}</S.Name>
                        <S.Type>{currentCurrency.type}</S.Type>
                    </S.InnerWrapper>
                </S.SymbolWrapper>

                <S.AvailableWrapper>
                    <Icon source="Wallet" background="Black" size="XMedium"/>
                    <S.InnerWrapper>
                        <S.ContentHeading>Available </S.ContentHeading>
                        <S.Value>{currentCurrency.value.toFixed(8)} BTC</S.Value>
                    </S.InnerWrapper>
                </S.AvailableWrapper>

                <S.LockedWrapper>
                    <Icon source="Lock" background="Black" size="XMedium"/>
                    <S.InnerWrapper>
                        <S.ContentHeading>Locked </S.ContentHeading>
                        <S.Value>0</S.Value>
                    </S.InnerWrapper>
                </S.LockedWrapper>

            </S.Header>

            <S.FormWrapper>
                <WalletInput label="Wallet Address" icon="Wallet" placeholder="19BY2XCgbDe6WtTVbTyzM9eR3LYr6VitWK"
                             value={walletAddress} setValue={address => setWalletAddress(address)}
                             type="text" inputInfo="COPY" fullWidth={true} readonly={false}/>

                <S.AmountExchangeWrapper>
                    <WalletInput label="Amount" icon="None" placeholder="0.0000000" value={amount}
                                 type="text" inputInfo="BTC" fullWidth={true} readonly={false}
                                 setValue={(amount) => updateAmount(amount)}/>

                    <S.IconWrapper><Icon source="Exchange" size="XtraLarge" background="None"/></S.IconWrapper>

                    <WalletInput label="In fiat" icon="None" placeholder="0.0000000" value={fiat}
                                 type="text" inputInfo="USD" fullWidth={true} readonly={false}
                                 setValue={(fiat) => setFiat(fiat)}/>
                </S.AmountExchangeWrapper>

                <Range values={slider.values} setValues={(value) => setSliderValue(value)}/>

                <S.TextWrapper>
                    <span><S.Blur>Free</S.Blur> 0.0001 BTC</span>
                    <span><S.Blur>You will get</S.Blur>  0.00060 BTC</span>
                </S.TextWrapper>

                <Button type="button" title={'Withdraw'} fullWidth={true} disabled={false}/>
            </S.FormWrapper>

            <S.DisclaimerWrapper>
                Minimum withdrawal <S.Blur> : 0.002 BTC</S.Blur>
                <S.Disclaimer>
                    Please make sure you insert the correct BTC address. Withdrawals processed to an incorrect address are not reversible.
                </S.Disclaimer>
            </S.DisclaimerWrapper>
        </>
    )

}

export default WithdrawBTC
