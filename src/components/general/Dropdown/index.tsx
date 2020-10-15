import { useState } from "react"

import * as S from './styles'

type DropdownItem = {
  title: string
  link?: string
  action?:()=> void
}
export type DropdownProps = {
  title: string,
  children: DropdownItem[]
  active?: boolean
}

const Dropdown = ({ title="Dropdown", children, active = false}: DropdownProps) => {

  const [state, setState] = useState(false)
  return (
    <S.Wrapper>
      <S.Header onClick={() => setState(!state)}>
        <S.Title>{title}</S.Title>
        <S.WrapperImage>
          <S.Image src="/img/icons/ArrowTop.svg" active={state}/>
        </S.WrapperImage>
      </S.Header>
      {state &&
       <S.WrapperContent className="animation">
          <a href="#">Realizando un simple test</a>
        </S.WrapperContent>
      }
    </S.Wrapper>
  )
}

export default Dropdown
