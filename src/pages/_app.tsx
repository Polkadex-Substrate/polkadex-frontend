import React, { useEffect, useState } from 'react'
import 'react-tabs/style/react-tabs.css';
import * as S from '../templates/landing/styles'

import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import WarningAlert from '../components/general/WarningAlert'
import { toast } from 'react-toastify'
import Toast from '../components/general/Toast'

function App({ Component, pageProps }: AppProps) {
  const [account, setAccount] = useState('');

  useEffect(() => {
    const getExtensionAddress = async () => {
      const polkadotExtensionDapp = await import('@polkadot/extension-dapp');
      const extensions = await polkadotExtensionDapp.web3Enable('Polkadex');
      if (extensions.length > 0) {
        const allAccounts = await polkadotExtensionDapp.web3Accounts();
        if (allAccounts.length > 0) {
          setAccount(allAccounts[0])
        } else {
          toast.warn('Please create account in Polka extension first.')
        }
      } else {
        toast.warn('Please install Polka Chrome extension first.')
      }
    }
    getExtensionAddress();
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
          <Component {...pageProps} account={account} />
        </S.Page>
      </ThemeProvider>
    </>
  )
}

export default App
