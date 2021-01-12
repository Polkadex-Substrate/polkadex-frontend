import { useEffect, useState } from 'react'

import * as S from './styles'

// type DropdownItem = {
//  title: string
//  link?: string
//  action?:()=> void
// }
export type DropdownProps = {
  title: string | number,
  children?: JSX.Element
  active?: boolean
  setDropdownState?: any
  action?: (name:void)=> void
}

const Dropdown = ({ title="Select Value", children, active, setDropdownState }: DropdownProps) => {

  useEffect(() => {
    setState(active);
  }, [active])

  const [state, setState] = useState(false)
  return (
    <S.Wrapper>
      <S.Header onClick={() => setDropdownState(!active)}>
        <S.Title>{title}</S.Title>
        <S.WrapperImage>
          <S.Image src="/img/icons/ArrowTop.svg" active={state}/>
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
