import 'react-tabs/style/react-tabs.css';

import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

import { io } from 'socket.io-client';

export const webSocket = io.connect("https://testnet.polkadex.trade:3000", {secure: true, transports: ['websocket']});

function App({ Component, pageProps }: AppProps) {
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
