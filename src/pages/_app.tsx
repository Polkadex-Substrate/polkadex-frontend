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
      html:
        '<div style=\"text-align: left\">' +
          '<p style=\"margin-bottom: 1rem; text-align: center;\">The following interface shows simulated trades from one of the largest centralized exchanges, processing about 20-30 trades per second on average for BTC-USDT. In this release, the public cannot submit trades as it is a test release to find the stability of Polkadex nodes. There will be frequent restarts of the testnet by our development team. Most of the features are disabled for now and will be enabled as per the following schedule.</p>' +
          '<div style="margin-bottom: 1rem; display: flex; flex-direction: column; align-items: center;">' +
            '<h4>Upcoming Testnet Release Schedules</h4>' +
            '<ol style=\"margin-left: 1rem; margin-top: 0.5rem;\">' +
              '<li>Enable Public to Submit Trades</li>' +
              '<li>Enable Multiple Markets</li>' +
              '<li>Fluid Switch Protocol</li>' +
              '<li>Custom Trading Bots</li>' +
              '<li>Enable Asset Management Systems</li>' +
              '<li>Polkadex Parachain Integration</li>' +
              '<li>Polkadex Themed Block explorer</li>' +
            '</ol>' +
          '</div>' +
          '<p>For further information,</p>' +
          '<div style=\"margin: 0.5rem 0;\"><strong>Telegram:</strong> <a href=\"https://telegram.me/Polkadex\" target="_blank">@Polkadex</a></div>' +
          '<div style="margin: 0.5rem 0;"><strong>Twitter:</strong> <a href="https://twitter.com/Polkadex" target="_blank">@Polkadex</a></div>' +
          '<div style="margin: 0.5rem 0;"><strong>Medium:</strong> <a href="https://polkadex.medium.com" target="_blank">Polkadex</a></div>' +
          '<div style="margin: 0.5rem 0;"><strong>Investors:</strong> business@polkadex.trade</div>' +
          '<p style=\"text-align: end;\"><img src="/img/logo_black.png" alt="Polkadex" style="width: 80px;" /> </p>' +
        '</div>',
      width: '800px',
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
