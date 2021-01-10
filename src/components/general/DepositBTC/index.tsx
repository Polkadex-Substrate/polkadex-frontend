import WalletInput from 'components/general/WalletPageReadonlyInput'
import * as S from './styles'

const DespositBTC =()=>{

    function SetwalletAddress(walletAddress){

    }
    return (
        <S.Wrapper>
           <S.TextWrapper>Send only BTC to this deposit address </S.TextWrapper>
           <S.NormalTextWrapper>Sending coin or token other than BTC to this address may result in the loss of your deposit.</S.NormalTextWrapper>
           <S.NormalQRWrapper>Scan QR Code</S.NormalQRWrapper>
           <S.ImageplusinputWrapper>
           <img src={`/img/QrImage/a1/a1.png`} />
           <WalletInput label="Address" icon="Wallet" placeholder="0.0000000" value="qwe123wda34erwsdfdfgzxcvd"
                        type="text" inputInfo="COPY" fullWidth={true}  readonly={true} setValue={(walletAddress) => SetwalletAddress(walletAddress)} />
           </S.ImageplusinputWrapper>
        </S.Wrapper>
    )

}

export default DespositBTC
