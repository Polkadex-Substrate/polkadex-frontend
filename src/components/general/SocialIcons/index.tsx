import * as S from './styles'
import React from 'react'

const SocialIcons = () => (
  <div style={{ display: 'flex', alignItems: 'flex-end', marginTop: '1rem'}}>
    <S.Link>
      <S.LinkImage src="img/login/telegram.png" alt="Telegram" />
      @Polkadex
    </S.Link>
    <S.Link>
      <S.LinkImage src="img/login/twitter.png" alt="Twitter" />
      @Polkadex
    </S.Link>
    <S.Link>
      <S.LinkImage src="img/login/medium.png" alt="Medium" />
      @Polkadex
    </S.Link>
    <div>
      <div style={{fontWeight: 'bold', color: '#E60079', fontSize: '15px', lineHeight: '20px'}}>Investors:</div>
      <div>business@polkadex.trade</div>
    </div>
  </div>
)



export default SocialIcons;
