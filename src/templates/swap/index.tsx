import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import * as S from './style'
import { useTheme ,Theme} from '../../Context/ThemeContext'

import BottomContent from './blocks/BottomContent'

export default function Swap({ account, blockchainApi }) {
  const [balance, setBalance] = useState(0.9645734);
  const { theme, setTheme } = useTheme();

  useEffect(() => {   
  setTheme(Theme.Dark);
  }, [])

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
