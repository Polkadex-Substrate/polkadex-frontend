import React from 'react'
import * as S from './styles'

import WalletInput from 'components/general/WalletPageReadonlyInput'

const DepositBTC = () => {

    const setWalletAddress = (walletAddress) => {
        console.log(walletAddress)
    }

    return (
        <>
           <S.TextWrapper>Send only BTC to this deposit address </S.TextWrapper>
           <S.NormalTextWrapper>Sending coin or token other than BTC to this address may result in the loss of your deposit.</S.NormalTextWrapper>
           <S.QrHeading>Scan QR Code</S.QrHeading>
           <S.AddressWrapper>
               <S.Image src={`/img/QrImage/a1/a1.png`} alt="QR Code" />
               <WalletInput label="Address" icon="Wallet" placeholder="0.0000000" value="qwe123wda34erwsdfdfgzxcvd"
                            type="text" inputInfo="COPY" fullWidth={true}  readonly={true} setValue={(walletAddress) => setWalletAddress(walletAddress)} />
           </S.AddressWrapper>
        </>
    )

}

export default DepositBTC
