import React  from 'react';
import 'react-tabs/style/react-tabs.css';

import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import Alert from '../templates/dashboard/blocks/Alert'

function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <ThemeProvider theme={theme}>
        <Alert />
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
