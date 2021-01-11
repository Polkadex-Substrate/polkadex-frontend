import React, { useEffect, useState } from 'react'
import 'react-tabs/style/react-tabs.css';
import { ApiPromise, WsProvider } from '@polkadot/api'
import * as S from '../templates/landing/styles'

import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import WarningAlert from '../components/general/WarningAlert'
import { toast } from 'react-toastify'
import Toast from '../components/general/Toast'

function App({ Component, pageProps }: AppProps) {
  const [account, setAccount] = useState<any>();
  const [allAccounts, setAllAccounts] = useState<any>();
  const [blockchainApi, setBlockchainApi] = useState<any>();

  useEffect(() => {
    const getExtensionAddress = async () => {
      const polkadotExtensionDapp = await import('@polkadot/extension-dapp');
      const extensions = await polkadotExtensionDapp.web3Enable('Polkadex');
      if (extensions.length > 0) {
        const allAccounts = await polkadotExtensionDapp.web3Accounts();
        if (allAccounts.length > 0) {
          setAllAccounts(allAccounts)
          setAccount(allAccounts[0])
        } else {
          toast.warn('Please create account in Polka extension first.')
        }
      } else {
        toast.warn('Please install Polka Chrome extension first.')
      }
    }
    const connectBlockchain = async () => {
      const wsProvider = new WsProvider('wss://blockchain.polkadex.trade');
      const api = await ApiPromise.create({
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
          "Order4RPC": {
            "id": "[u8;32]",
            "trading_pair": "[u8;32]",
            "trader": "[u8;32]",
            "price": "Vec<u8>",
            "quantity": "Vec<u8>",
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
          "LinkedPriceLevelRpc": {
            "next": "Vec<u8>",
            "prev": "Vec<u8>",
            "orders": "Vec<Order4RPC>"
          },
          "Orderbook": {
            "trading_pair": "Hash",
            "base_asset_id": "u32",
            "quote_asset_id": "u32",
            "best_bid_price": "FixedU128",
            "best_ask_price": "FixedU128"
          },
          "OrderbookRPC": {
            "trading_pair": "[u8;32]",
            "base_asset_id": "u32",
            "quote_asset_id": "u32",
            "best_bid_price": "Vec<u8>",
            "best_ask_price": "Vec<u8>"
          },
          "OrderbookUpdates": {
            "bids": "Vec<FrontendPricelevel>",
            "asks": "Vec<FrontendPricelevel>"
          },
          "FrontendPricelevel": {
            "price": "FixedU128",
            "quantity": "FixedU128"
          },
          "LookupSource": "AccountId",
          "Address": "AccountId"
        },
        rpc: {
          polkadex: {
            getAllOrderbook: {
              description: " Blah",
              params: [],
              type: "Vec<OrderbookRpc>"
            },
            getAskLevel: {
              description: " Blah",
              params: [
                {
                  name: "trading_pair",
                  type: "Hash"
                }
              ],
              type: "Vec<FixedU128>"
            },
            getBidLevel: {
              description: " Blah",
              params: [
                {
                  name: "trading_pair",
                  type: "Hash"
                }
              ],
              type: "Vec<FixedU128>"
            },
            getMarketInfo: {
              description: " Blah",
              params: [
                {
                  name: "trading_pair",
                  type: "Hash"
                },
                {
                  name: "blocknum",
                  type: "u32"
                }
              ],
              type: "MarketDataRpc"
            },
            getOrderbook: {
              description: " Blah",
              params: [
                {
                  name: "trading_pair",
                  type: "Hash"
                }
              ],
              type: "OrderbookRpc"
            },
            getOrderbookUpdates: {
              description: "Gets best 10 bids & asks",
              params: [
                {
                  name: "at",
                  type: "Hash"
                },
                {
                  name: "trading_pair",
                  type: "Hash"
                }
              ],
              type: "OrderbookUpdates"
            },
            getPriceLevel: {
              description: " Blah",
              params: [
                {
                  name: "trading_pair",
                  type: "Hash"
                }
              ],
              type: "Vec<LinkedPriceLevelRpc>"
            },
          }
        },
        provider: wsProvider
      });
      await setBlockchainApi(api);
    }
    getExtensionAddress();
    connectBlockchain();
  }, [])

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <S.Warning>
          <WarningAlert/>
        </S.Warning>
        <Toast/>
        <S.Page>
          <Component {...pageProps} account={account} setAccount={address => setAccount(address)} allAccounts={allAccounts} blockchainApi={blockchainApi} />
        </S.Page>
      </ThemeProvider>
    </>
  )
}

export default App
