import Currencylist from 'components/general/Currencieslist'
import Icon from 'components/general/Icon'
import Searchbar from 'components/general/Searchbar'
import SidebarDropdown from 'components/general/SidebarDropdown'
import React, { useState , useEffect, useRef } from 'react'
import Swapbox from './blocks/Swapbox'
import * as S from './style'
import Graph from './blocks/Graph'
import { webSocket } from '../../components/dashboard/CustomChart/api/stream'




export default function Swap({ account, blockchainApi}){

     const textInput = useRef(null);


    const [state, setState] = useState(false)
    const [orderBookBids, setOrderBookBids] = useState([])
    const [orderBookAsks, setOrderBookAsks] = useState([])
    const [lastTradePrice, setLastTradePrice] = useState(0);
    const [lastTradePriceType, setLastTradePriceType] = useState();
    const [openOrders, setOpenOrders] = useState([]);
    const [price, setPrice] = useState<string>('0')
    const [amount, setAmount] = useState<string>('0')
    const [activeIndex, setActiveIndex] = useState(3);
    const [volume, setVolume] = useState(0);
    const [blockPrice, setBlockPrice] = useState("0.00");
    const [high, setHigh] = useState(0);
    const [low, setLow] = useState(0);

    const [cssclassname,setcssclassname] = useState("notactive")
     
      const fetchOrderBookBids = (socket) => {
        socket.on('bids_levels', async (bid_levels) => {
          let currentOrderBook = [];
    
          bid_levels.map(({ price, quantity }) => {
            currentOrderBook.push({
              id: currentOrderBook.length + 1,
              date: new Date(),
              pair: "DOT",
              coin: "BTC",
              side: "buy",
              price: price,
              amount: quantity,
              total: quantity * price,
            });
          });
          await setOrderBookBids(currentOrderBook.sort((first, second) => second.price - first.price));
        });
      }
    
      const fetchOrderBookAsks = (socket) => {
        socket.on('asks_levels', async (ask_levels) => {
          let currentOrderBook = [];
    
          ask_levels.map(({ price, quantity }) => {
            currentOrderBook.push({
              id: currentOrderBook.length + 1,
              date: new Date(),
              pair: "DOT",
              coin: "BTC",
              side: "sell",
              price: price,
              amount: quantity,
              total: quantity * price,
            });
          });
          await setOrderBookAsks(currentOrderBook.sort((first, second) => second.price - first.price));
        });
      }

      const fetchMarketData = (socket) => {
        socket.on('market-data-stream', ({ volume, open, close, low, high }) => {
          const blockPriceValue = open === 0 ? 0 : (open - close) * 100 / open;
          if (+blockPriceValue.toFixed(2) !== 0) {
            setBlockPrice(blockPriceValue.toFixed(2));
          }
          if (+high.toFixed(2) !== 0) {
            setHigh(high.toFixed(2))
          }
          if (+low.toFixed(2) !== 0) {
            setLow(low.toFixed(2))
          }
          setVolume(volume);
        });
      }
      const updateOpenOrders = order => {
        const finalOrders = [...openOrders, order];
        setOpenOrders(finalOrders);
    }
    const [isModalOpen,setisModalOpen] = useState(false)
    const [isPairAnalyticsVisible,setisPairAnalyticsVisible] = useState(false)
    const opencryptolistmodal =()=>{
          setisModalOpen(true)
          }
    const OnClickPairAnalyticspanel = ()=>{
                                                if(isPairAnalyticsVisible){
                                                setisPairAnalyticsVisible(false);
                                                setcssclassname("notactive")
                                                }
                                                else  
                                                {
                                                  scrollToBottom();
                                                 setcssclassname("Active");   
                                                setisPairAnalyticsVisible(true);
                                                }
         }

  const scrollToBottom = () =>{
                                textInput.current.scrollIntoView({ behavior: "smooth" });
                              }

    useEffect(() => {
        const webSocketInstance = webSocket;
        fetchMarketData(webSocketInstance)
        fetchOrderBookBids(webSocketInstance)
        fetchOrderBookAsks(webSocketInstance)
     
      }, [])
    
    return (<S.Root>
             <S.Wrapper className={cssclassname}> 
                  <S.ContentWrapper>               
                        <S.Header>
                            <S.PolkaLogo src="img/Logo.svg" alt="Polkadex"></S.PolkaLogo> 
                        </S.Header> 
                        <S.BottomContentWrapper> 
                            <S.LeftColumn>
                                <S.Iconcolumn>
                                    <S.Marginbottom>                                    
                                       <Icon source="Settings" size="Medium" background="Gray"/>
                                    </S.Marginbottom>  
                                    <span>
                                        <Icon source="Settings" size="Medium" background="Gray"/>
                                    </span>
                                </S.Iconcolumn>
                                <S.LabelWithIcon>
                                    <S.IconWrapper>
                                    <Icon source="Wallet" size="Small" background="None"/>
                                    </S.IconWrapper>
                                    <span>
                                    Connect to wallet
                                    </span>
                                </S.LabelWithIcon>
                            </S.LeftColumn>
                            <S.MiddleColumn>   
                                <Swapbox handlecryptolistmodal ={opencryptolistmodal}/>

 

                                <S.bottomlabel className={cssclassname}>
                                    <S.Bottomtextwrapper onClick={() => OnClickPairAnalyticspanel()}>
                                        <S.Image src={`/img/icons/show_chart-white.svg`}  />
                                        <span>
                                           Pair Analitycs
                                        </span>
                                        <span>
                                           <SidebarDropdown rotation = 'rotate(0deg)'  backgroundcolor='#1C2023' hoverrotation='rotate(180deg)' icon='ArrowTop'/>
                                        </span>
                                    </S.Bottomtextwrapper>
                                </S.bottomlabel>

                                {isPairAnalyticsVisible && (
                                   <S.WrapperGraph marketActive={state}>
                                   <Graph orderBookAsks={orderBookAsks}
                                          orderBookBids={orderBookBids}
                                          latestTransaction={lastTradePrice}
                                          latestTransactionType={lastTradePriceType}/>
                                
                                 </S.WrapperGraph>   
                                
                                 )}
                            </S.MiddleColumn>

                            <S.RightColumn>
                                <S.bottomrightcontentwrapper ref= {textInput}>
                                    <S.bottomcolor></S.bottomcolor> 1092049
                                </S.bottomrightcontentwrapper>
                            </S.RightColumn>
                        </S.BottomContentWrapper>    
                   </S.ContentWrapper>
             </S.Wrapper>

             {isModalOpen && (
                                <S.Overlay>
                                   <S.Dialog>  
                                        <S.LeftCurrencyColumn>
                                        <S.CryptocurrenciesWrapper>
                                            <S.WrapperTitle>
                                                Select Coin    
                                                {/* <button onClick={() => setisModalOpen(false)}>Close wrapper</button>  */}
                                                <S.Iconwrapper  onClick={() => setisModalOpen(false)}><Icon source="Close" size="XSmall" background="None"/>   </S.Iconwrapper>                  
                                                </S.WrapperTitle>
                                                <S.SearchWrapper>
                                                    <Searchbar placeholder="Search " type="search"/> 
                                                </S.SearchWrapper> 
                                                <Currencylist valuecolumn={false}/>
                                                <S.WrapperDefault>
                                                    <div>Default List</div>
                                                    <div>change</div>
                                                </S.WrapperDefault>
                                        </S.CryptocurrenciesWrapper>
                                    </S.LeftCurrencyColumn>
                                   </S.Dialog>
                                </S.Overlay>
                            )}
             </S.Root>        
            )
}