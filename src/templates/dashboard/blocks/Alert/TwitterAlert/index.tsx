import React from 'react';

import * as S from './styles'

function TwitterAlert({polkadotId, closeModal}) {

  const tweet = 'Hey @polkadex it\'s ' + polkadotId + ', give me some tokens on Layer2! https://testnet.polkadex.trade';
  
  return (
    <S.ModalWrapper>
      <S.Close onClick={closeModal}>X</S.Close>
      <S.Content>
        <S.Heading>
          Tweet at the Polkadex to get some tokens.
        </S.Heading>
        <S.MessageWrapper>
          {tweet}
        </S.MessageWrapper>
        <S.TwitterButton target="_blank"
                         href={'https://twitter.com/intent/tweet?text=' + tweet.toString()}
                         data-size="large">
          <S.TwitterImage src="img/twitter.png" alt="Twitter" />
          Tweet
        </S.TwitterButton>
        <S.DopeButton>Dope</S.DopeButton>
      </S.Content>
    </S.ModalWrapper>
  )
}

export default TwitterAlert;
