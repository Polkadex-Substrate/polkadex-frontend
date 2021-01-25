import React, { useState } from 'react'
import { animated, useSpring } from 'react-spring'
import Link from 'next/link'
import * as S from './style'

import ModalCryptoList from 'components/general/ModalCryptoList'
import BottomContent from './blocks/BottomContent'

export default function Swap({ account, blockchainApi }) {
  const [isModalOpen, setisModalOpen] = useState(false)
  const [isModalLeftAlign, setisModalLeftAlign] = useState(false)

  const openCryptoListModal = () => {
    setisModalOpen(true)
    setisModalLeftAlign(false)
  }
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: isModalOpen ? 1 : 0,
    transform: isModalOpen ? 'translateY(0%)' : 'translateY(100%)',
    height: '100%',

  })
  const animationLeft = useSpring({
    config: {
      duration: 250,
    },
    left: isModalLeftAlign ? '85%' : '50%',
    top: '40%',
    position: 'absolute',
    borderRadius: '5px',
    height: isModalLeftAlign ? '74rem' : '70rem',

    width: '25%',
    zIndex: 998,
    transform: 'translate(-50%,-50%)',
  })

  return (
    <S.Root>
      <S.Wrapper>
        <Link href="/dashboard">
          <S.Header>
            <S.PolkaLogo src="img/Logo.svg" alt="Polkadex" />
          </S.Header>
        </Link>
        <BottomContent openCryptoListModal={openCryptoListModal} />
      </S.Wrapper>
      {isModalOpen && (    
        <S.Overlay> 
          <animated.div style={animationLeft}>
            <animated.div style={animation}>
              <ModalCryptoList modalCloseHandler={setisModalOpen} setCryptoListLeftHandler={setisModalLeftAlign}
                />
            </animated.div>
          </animated.div>
          </S.Overlay>         
      )}
    </S.Root>
  )
}
