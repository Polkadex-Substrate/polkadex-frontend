import { useState } from "react"

import * as S from './styles'

export type DropdownProps = {
  title: string,
  children: JSX.Element
}
const Dropdown = ({ title, children}: DropdownProps) => {

  const [state, setState] = useState(false)
  return (
    <>
      <S.Wrapper onClick={() => console.log("Active")}>
        <S.Title>{title}</S.Title>
        <S.WrapperImage>
          <S.Image src="/img/icons/ArrowTop.svg" />
        </S.WrapperImage>
      </S.Wrapper>
        {state && { children }}
    </>
  )
}

export default Dropdown
