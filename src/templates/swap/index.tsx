import React, { useState } from 'react'
import Link from 'next/link'
import * as S from './style'

import BottomContent from './blocks/BottomContent'

export default function Swap({ account, blockchainApi }) {
  const [balance, setBalance] = useState(0.9645734);

  return (
    <S.Root>
      <S.Wrapper>
        <Link href="/dashboard">
          <S.Header>
            <S.PolkaLogo src="img/Logo.svg" alt="Polkadex" />
          </S.Header>
        </Link>
        <BottomContent balance={balance} />
      </S.Wrapper>
    </S.Root>
  )
}
