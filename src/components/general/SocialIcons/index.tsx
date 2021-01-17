import * as S from './styles'
import React from 'react'

const SocialIcons = () => (
  <div style={{ display: 'flex', alignItems: 'flex-end', marginTop: '1rem'}}>
    <S.Link href="https://t.me/Polkadex" target="_blank">
      <S.LinkImage src="img/login/telegram.png" alt="Telegram" />
      @Polkadex
    </S.Link>
    <S.Link href="https://twitter.com/polkadex" target="_blank">
      <S.LinkImage src="img/login/twitter.png" alt="Twitter" />
      @Polkadex
    </S.Link>
    <S.Link href="https://polkadex.medium.com" target="_blank">
      <S.LinkImage src="img/login/medium.png" alt="Medium" />
      @Polkadex
    </S.Link>
  </div>
)



export default SocialIcons;
