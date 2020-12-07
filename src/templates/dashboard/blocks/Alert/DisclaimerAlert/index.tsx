import React, { useEffect } from 'react'
import Swal from "sweetalert2"
import theme from '../../../../../styles/theme'

function DisclaimerAlert() {
  useEffect(() => {
    Swal.fire({
      title: 'Disclaimer',
      html:
        '<div style=\"text-align: left; margin-top: 1rem;\">' +
          '<p style=\"margin-bottom: 1rem; text-align: center; font-size: 1.5rem;\">The following interface shows simulated trades from one of the largest centralized exchanges, processing about 20-30 trades per second on average for BTC-USDT. In this release, the public cannot submit trades as it is a private testnet release to find the stability of Polkadex nodes. There will be frequent restarts of the testnet by our development team. The next release of our testnet will enable public to run a node, check the blocks and submit trades. Most of the features are disabled for now and will be enabled as per the following schedule.</p>' +
          '<div style="margin-bottom: 1rem; display: flex; flex-direction: column; align-items: center; font-size: 1.5rem;">' +
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
          '<div style="display: flex; justify-content: space-between; align-items: center; font-size: 1.5rem;">' +
            '<div>' +
              '<div>For further information,</div>' +
              '<div style="margin: 0.5rem 0;"><strong>Telegram:</strong> <a href="https://telegram.me/Polkadex" target="_blank">@Polkadex</a></div>' +
              '<div style="margin: 0.5rem 0;"><strong>Twitter:</strong> <a href="https://twitter.com/Polkadex" target="_blank">@Polkadex</a></div>' +
              '<div style="margin: 0.5rem 0;"><strong>Medium:</strong> <a href="https://polkadex.medium.com" target="_blank">Polkadex</a></div>' +
              '<div style="margin: 0.5rem 0;"><strong>Investors:</strong> business@polkadex.trade</div>' +
            '</div>' +
            '<p style="text-align: end;\"><img src="/img/logo_black.png" alt="Polkadex" style="width: 200px;"></p>' +
          '</div>' +
        '</div>',
      width: '60%',
      confirmButtonColor: theme.colors.primary
    }).then();
  })

  return (
    <></>
  )
}

export default DisclaimerAlert
