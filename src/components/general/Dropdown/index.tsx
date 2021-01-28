import { useEffect, useState } from 'react'
import { useTheme,Theme } from 'Context/ThemeContext';

import * as S from './styles'


export type DropdownProps = {
  title: string | number,
  children?: JSX.Element
  active?: boolean
  setDropdownState?: any
  action?: (name:void)=> void
}

const Dropdown = ({ title="Select Value", children, active, setDropdownState }: DropdownProps) => {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setState(active);
  }, [active])

  const [state, setState] = useState(false)
  return (
    <S.Wrapper>
      <S.Header onClick={() => setDropdownState(!active)}>
        <S.Title>{title}</S.Title>
        <S.WrapperImage>
        <S.Image src={theme ===  Theme.Dark ? "/img/icons/ArrowTop.svg" : "/img/icons/ArrowDownBlack.svg"} active={state} />
       </S.WrapperImage>
      </S.Header>
      {state &&
        <S.WrapperContent className="animation">
        <S.ContainerContent>
            {children}
          </S.ContainerContent>
        </S.WrapperContent>
      }
    </S.Wrapper>
  )
}

export default Dropdown
