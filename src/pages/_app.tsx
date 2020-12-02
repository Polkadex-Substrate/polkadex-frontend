import React, { useEffect } from 'react';
import 'react-tabs/style/react-tabs.css';
import Swal from 'sweetalert2'

import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    Swal.fire({
      title: 'Disclaimer',
      type: 'success',
      text: 'This is a testnet application.',
      confirmButtonColor: theme.colors.primary
    });
  })

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
