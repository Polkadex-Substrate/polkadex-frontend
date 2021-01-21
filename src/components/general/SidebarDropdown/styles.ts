import styled, { css } from 'styled-components'

import { SidebarDropdownProps } from '.';

export const Image = styled.img<Partial<SidebarDropdownProps>>`

${({ rotation }) => css`
  transform: ${rotation};
`}
`
// NavbarDropdown Content
export const WrapperContent = styled.div`
  position: absolute;
  right: 0;

  color: white;
  border-radius: 0 1rem 1rem 1rem;
  padding: 1rem;
  -webkit-box-shadow: 0 7px 18px 0 rgba(0, 0, 0, 0.27);
  -moz-box-shadow: 0 7px 18px 0 rgba(0, 0, 0, 0.27);
  box-shadow: 0 7px 18px 0 rgba(0, 0, 0, 0.27);
  display: none;
  width: max-content;
  z-index:1;
  a {
    padding: 0.5rem;
    font-weight:200;
  }
`

export const Wrapper = styled.div<Partial<SidebarDropdownProps>>`

${({ hoverRotation }) => css`
  width: fit-content;
  position: relative;

  &:hover ${WrapperContent}{
      display: block;
  }

  &:hover ${Image} {
    transform: ${hoverRotation} ;
  }

`}`
;
export const WrapperImage = styled.div<Partial<SidebarDropdownProps>>`
${({ backgroundColor }) => css`
  display: flex;
  align-items:center;
  justify-content: center;
  background:${backgroundColor};
  border-radius: 0.5rem;
  width: 2rem;
	height: 2rem;

  :hover {
    opacity: 0.8;
  }
`}
`

