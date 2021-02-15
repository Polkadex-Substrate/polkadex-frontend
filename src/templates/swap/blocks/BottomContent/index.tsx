import React, { useEffect, useState } from 'react'
import { animated, useSpring } from 'react-spring'
import { Accordion, useAccordionToggle } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as S from './styles'
import Link from 'next/link'

import { webSocket } from 'components/dashboard/CustomChart/api/stream'
import Icon from 'components/general/Icon'
import Graph from '../Graph'
import SwapBox from '../Swapbox'
import SidebarDropdown from 'components/general/SidebarDropdown'
import ModalCryptoList from 'components/general/ModalCryptoList'
import { CurrencyDetails } from '../../../wallet/blocks/CryptoCurrencies'

export type CurrentCurrency = {
  type: string
  value: number
}

const BottomContent = ({ balance }) => {
  const currenciesList = [
    {
      id: 1,
      name: 'Bitcoin',
      type: 'BTC',
      value: 0.456943324,
    },
    {
      id: 2,
      name: 'Dash',
      type: 'DASH',
      value: 0.100000000,
    },
    {
      id: 3,
      name: 'Ethreum',
      type: 'ETH',
      value: 0.200000000,
    },
    {
      id: 4,
      name: 'Polkadot',
      type: 'DOT',
      value: 0.300000000,
    },
    {
      id: 5,
      name: 'Riple',
      type: 'BNB',
      value: 0.400000000,
    },
    {
      id: 6,
      name: 'LiteCoin',
      type: 'LTC',
      value: 0.500000000,
    },
    {
      id: 7,
      name: 'Tether',
      type: 'ATOM',
      value: 0.600000000,
    }
    ,
    {
      id: 8,
      name: 'Fil',
      type: 'FIL',
      value: 0.700000000,
    },
    {
      id: 9,
      name: 'Ethreum',
      type: 'ETH',
      value: 0.000000000,
    },
    {
      id: 10,
      name: 'Polkadot',
      type: 'DOT',
      value: 0.000000000,
    },
    {
      id: 11,
      name: 'Riple',
      type: 'BNB',
      value: 0.000000000,
    },
    {
      id: 12,
      name: 'LiteCoin',
      type: 'LTC',
      value: 0.000000000,
    },
    {
      id: 13,
      name: 'Tether',
      type: 'ATOM',
      value: 0.000000000,
    },
  ]
  const [state, setState] = useState(false)
  const [orderBookBids, setOrderBookBids] = useState([])
  const [orderBookAsks, setOrderBookAsks] = useState([])
  const [lastTradePrice, setLastTradePrice] = useState(0)
  const [lastTradePriceType, setLastTradePriceType] = useState()
  const [openOrders, setOpenOrders] = useState([])
  const [volume, setVolume] = useState(0)
  const [blockPrice, setBlockPrice] = useState('0.00')
  const [high, setHigh] = useState(0)
  const [low, setLow] = useState(0)
  const [isAccordionActive, setIsAccordionActive] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalLeftAlign, setIsModalLeftAlign] = useState(false)
  const [currentCurrency, setCurrentCurrency] = useState<CurrentCurrency>({type: 'BTC', value: 144560});
  const [currencyList, setCurrencyList] = useState<CurrencyDetails[]>(currenciesList)

  const openCryptoListModal = () => {
    setIsModalOpen(true)
    setIsModalLeftAlign(false)
  }

  const animation = useSpring({
    config: {
      duration: 250,
    },
    transform: (isModalOpen || isModalLeftAlign) ? 'translateY(0%)' : 'translateY(100%)',
    height: '100%'
  })

  const animationLeft = useSpring({
    config: {
      duration: 250,
    },
    right: isModalLeftAlign ? '1.5%' : '50%',
    top: '0',
    position: 'absolute',
    borderRadius: '5px',
    height: '85vh',
    width: '25%',
    zIndex: 998,
    transform: isModalLeftAlign ? 'translateX(0)' : 'translateX(50%)',
  })

  const CustomToggle = ({ children, eventKey }) => {
    const decoratedOnClick = useAccordionToggle(eventKey, () => setIsAccordionActive(!isAccordionActive));

    return (
      <div onClick={decoratedOnClick} style={{cursor: 'pointer', display: 'flex', margin: 'auto'}}>
        {children}
      </div>
    );
  }

  const fetchOrderBookBids = (socket) => {
    socket.on('bids_levels', async (bid_levels) => {
      let currentOrderBook = []

      bid_levels.map(({ price, quantity }) => {
        currentOrderBook.push({
          id: currentOrderBook.length + 1,
          date: new Date(),
          pair: 'DOT',
          coin: 'BTC',
          side: 'buy',
          price: price,
          amount: quantity,
          total: quantity * price,
        })
      })
      await setOrderBookBids(currentOrderBook.sort((first, second) => second.price - first.price))
    })
  }
  const fetchOrderBookAsks = (socket) => {
    socket.on('asks_levels', async (ask_levels) => {
      let currentOrderBook = []

      ask_levels.map(({ price, quantity }) => {
        currentOrderBook.push({
          id: currentOrderBook.length + 1,
          date: new Date(),
          pair: 'DOT',
          coin: 'BTC',
          side: 'sell',
          price: price,
          amount: quantity,
          total: quantity * price,
        })
      })
      await setOrderBookAsks(currentOrderBook.sort((first, second) => second.price - first.price))
    })
  }
  const fetchMarketData = (socket) => {
    socket.on('market-data-stream', ({ volume, open, close, low, high }) => {
      const blockPriceValue = open === 0 ? 0 : (open - close) * 100 / open
      if (+blockPriceValue.toFixed(2) !== 0) {
        setBlockPrice(blockPriceValue.toFixed(2))
      }
      if (+high.toFixed(2) !== 0) {
        setHigh(high.toFixed(2))
      }
      if (+low.toFixed(2) !== 0) {
        setLow(low.toFixed(2))
      }
      setVolume(volume)
    })
  }
  const updateOpenOrders = order => {
    const finalOrders = [...openOrders, order]
    setOpenOrders(finalOrders)
  }

  useEffect(() => {
    const webSocketInstance = webSocket
    fetchMarketData(webSocketInstance)
    fetchOrderBookBids(webSocketInstance)
    fetchOrderBookAsks(webSocketInstance)
  }, [])

  return (
    <S.BottomContentWrapper>
      <S.LeftColumn>
        <S.IconColumn>
          <S.Marginbottom>
            <Icon source="Settings" size="Medium" background="Gray"/>
          </S.Marginbottom>
          <Icon source="Settings" size="Medium" background="Gray"/>
        </S.IconColumn>
        <Link href="/wallet">
        <S.LabelWithIcon>
          <S.IconWrapper>
            <Icon source="Wallet" size="Small" background="None"/>
          </S.IconWrapper>
          
            <span>Connect to wallet</span>
          
        </S.LabelWithIcon>
        </Link>
      </S.LeftColumn>
      <S.MiddleColumn>
        <SwapBox handleCryptoListModal={openCryptoListModal} balance={balance} currentCurrency={currentCurrency} />
        <Accordion defaultActiveKey="1">
          {/* <S.BottomLabel isAccordionActive={isAccordionActive}>
            <CustomToggle eventKey="0">
              <S.BottomTextWrapper>
                <S.Image src={`/img/icons/show_chart-white.svg`} alt="show_chart icon"/>
                <span>Pair Analytics</span>
                <SidebarDropdown rotation='rotate(0deg)'
                                 backgroundColor='#1C2023'
                                 hoverRotation='rotate(180deg)'
                                 icon='ArrowTop'/>
              </S.BottomTextWrapper>
            </CustomToggle>
          </S.BottomLabel> */}

          <Accordion.Collapse eventKey="0">
            <S.WrapperGraph>
              <Graph orderBookAsks={orderBookAsks}
                     orderBookBids={orderBookBids}
                     latestTransaction={lastTradePrice}
                     latestTransactionType={lastTradePriceType}/>
            </S.WrapperGraph>
          </Accordion.Collapse>
        </Accordion>
      </S.MiddleColumn>
      <S.RightColumn>
        {(isModalOpen || isModalLeftAlign) && (
          <S.Overlay>
            <animated.div style={animationLeft}>
              <animated.div style={animation}>
                <ModalCryptoList modalCloseHandler={setIsModalOpen} setCryptoListLeftHandler={setIsModalLeftAlign}
                                 currenciesList={currencyList} setCurrentCurrency={({ type, value }) => setCurrentCurrency({type, value})} />
              </animated.div>
             </animated.div>
          </S.Overlay>
        )}
        {/* <S.BottomRightContentWrapper>
          <S.BottomColor/> 1092049
        </S.BottomRightContentWrapper> */}
      </S.RightColumn>
    </S.BottomContentWrapper>
  )
}

export default BottomContent
