import CoinWrapper from 'components/general/CoinWrapperSmall'
import NavbarDropdown from 'components/general/NavbarDropdown'
import { useState } from 'react'
import MyOrders from '../../../../components/general/MyOrdersSwapbox'
import * as S from './styles'

const Swapbox = ({ handlecryptolistmodal  }) => {


    const [intialValue, setIntialValue] = useState(false);
    const [cssclassname, setcssclassname] = useState("Active")

    const handleaction = (value) => {
        setIntialValue(value);
        value == false ? setcssclassname("Active") : setcssclassname("Not_Active");
    }
    const openmodalcryptolist = () => {
        handlecryptolistmodal()
    }

    return (
        <S.SwapboxContainer>
            <S.SwapboxWrapper className={cssclassname}>
                <S.Rowone>
                    <div>
                    <S.TextWrapperwithoutborder className={cssclassname}>
                       Market Order
                     <S.IconWrapper> <NavbarDropdown title="" /></S.IconWrapper>
                    </S.TextWrapperwithoutborder>
                    </div>
                    <S.TextWrapper>My Orders</S.TextWrapper>
                </S.Rowone>
                <S.Rowtwo className={cssclassname}>
                    <MyOrders handlechange={handleaction} cryptolist={openmodalcryptolist} />
                </S.Rowtwo>
                <S.Rowthree className={cssclassname}>
                    Transaction Route                    
                    <CoinWrapper CoinName= {"Polkadot"} Cointype = {"DOT"}/>
                    <S.Image src={`/img/icons/double_arrow-white.svg`} />
                    <CoinWrapper CoinName= {"Thether"} Cointype = {"USDT"}/>
                    <S.Image src={`/img/icons/double_arrow-white.svg`} />
                    <CoinWrapper CoinName= {"Bitcoin"} Cointype = {"BTC"}/>
                 </S.Rowthree>
            </S.SwapboxWrapper>
            <S.bottomrow className={cssclassname}>
                <S.bottomtextwrapper>
                    <S.HelperIconImage src={`/img/icons/help_outline-white.svg`} />
                    <S.blur>Minimum</S.blur>
                    <S.noblurtext>0.01008 DOT</S.noblurtext>
                </S.bottomtextwrapper>
                <S.bottomtextwrapper>
                    <S.HelperIconImage src={`/img/icons/help_outline-white.svg`} />
                    <S.blur>Liquidity Provider Fee</S.blur>
                    <S.noblurtext>0.00005991 BTC</S.noblurtext>
                </S.bottomtextwrapper>
                <S.bottomtextwrapper>
                    <S.HelperIconImage src={`/img/icons/help_outline-white.svg`} />
                    <S.blur>Price Impact</S.blur>
                    <S.textspecialcolor>8.49%</S.textspecialcolor>
                </S.bottomtextwrapper>
            </S.bottomrow>
        </S.SwapboxContainer>
    )
}

export default Swapbox