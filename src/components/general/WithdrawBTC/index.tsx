import Dropdown from 'components/general/Dropdown'
import Icon from 'components/general/Icon'
import { Link } from 'components/general/Logo/styles'
import * as S from './styles'
import WalletInput from '../WalletPageReadonlyInput'
import Input from 'components/general/Input'
import Range from '../Range'
import { useState } from 'react'
import Button from '../Button'

export type WalletProps = {
   walletAddress:any
  }

  function SetwalletAddress(walletAddress){

  }
  


const WithdrawBTC =({ walletAddress }: WalletProps)=>{
    const [slider, setSlider] = useState({ values: [40] })

    const setSliderValue = (sliderValue) => {
          setSlider(sliderValue);
      }
    
    return (
        <S.Wrapper>
            <S.Header>         
                <S.leftconnercolumn>
                        <S.Imagewrapper>                    
                                    <S.Image src={`img/cryptocurrencies/BTC.png`} />                     
                        </S.Imagewrapper>
                        <S.Imagetitlewrapper>
                                <S.Spantext>Bitcoin</S.Spantext>
                                <S.Spantextblur>BTC</S.Spantextblur>
                        </S.Imagetitlewrapper>
                </S.leftconnercolumn>
           
                <S.middlecolumn>          

                        <S.ContainerWallet>
                            <Icon source="Wallet" background="Black" size="Medium" /> 
                        </S.ContainerWallet>
                        <S.WrapperBalance>
                        <S.Spantextblur>Available </S.Spantextblur>
                            <S.Span>0.9645734533 BTC</S.Span>
                        </S.WrapperBalance>

                </S.middlecolumn>

                <S.rightconnercolumn>                    
                <S.ContainerWallet>
                            <Icon source="News" background="Black" size="Medium" /> 
                        </S.ContainerWallet>
                        <S.WrapperBalance>
                        <S.Spantextblur>Locked </S.Spantextblur>
                            <S.Span>0</S.Span>
                        </S.WrapperBalance>
                </S.rightconnercolumn>

            </S.Header>

            <S.Header>
            <S.ContainerForm>
                <form onSubmit={() => console.log("Submiting..")}>
                <WalletInput label="Wallet Address" icon="Wallet" placeholder="0.0000000" value="qwe123wda34erwsdfdfgzxcvdgfwerffsfddge"
                        type="text" inputInfo="COPY" fullWidth={true}  readonly={true} setValue={(walletAddress) => SetwalletAddress(walletAddress)} />

                 <S.AmountExchangeWrapper>
                   <WalletInput label="Amount" icon="None" placeholder="0.0000000" value="0.4352456462"
                        type="text" inputInfo="BTC" fullWidth={true}  readonly={false} setValue={(walletAddress) => SetwalletAddress(walletAddress)} />
                     
                     <S.IconWrapper><Icon source="Swap2" background="None" size="XtraLarge" /></S.IconWrapper>

                    <WalletInput label="In fiat" icon="None" placeholder="0.0000000" value="0.4352456462"
                        type="text" inputInfo="USD" fullWidth={true}  readonly={false} setValue={(walletAddress) => SetwalletAddress(walletAddress)} />     
                </S.AmountExchangeWrapper>  

              
                <Range values={slider.values} setValues={(value) => setSliderValue(value)} />

                <S.TextWrapper>
                    <span><S.blur>Free</S.blur> 0.0001 BTC</span>
                    <span><S.blur>You will get</S.blur>  0.00060 BTC</span>
                </S.TextWrapper>
                <Button type="button" title={"Withdraw"} fullWidth={true} disabled={false} />    
                
                
                 
                </form>

                <S.textcenterwrapper>Minimum withdrawal <S.blur> : 0.002 BTC</S.blur></S.textcenterwrapper>
                <S.textnewwrapper> <S.blur> Please make sure you insert the correct BTC address. Withdrawals processed to an incorrect address are not reversible.</S.blur> </S.textnewwrapper>

            </S.ContainerForm>
                
            </S.Header>



        </S.Wrapper>
    )

}

export default WithdrawBTC
