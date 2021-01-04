import React  from 'react';
import 'react-tabs/style/react-tabs.css';
import * as S from '../templates/landing/styles'

import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import WarningAlert from '../components/general/WarningAlert'

function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <S.Warning>
          <WarningAlert/>
        </S.Warning>
        <S.Page>
          <Component {...pageProps} />
        </S.Page>
      </ThemeProvider>
    </>
  )
}

export default App
