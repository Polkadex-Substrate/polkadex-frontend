import { transform } from '@babel/core';
import styled, { css } from 'styled-components'

import { DropdownProps } from '.';

export const Wrapper = styled.div`
  width: fit-content;
`;

export const Header = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  cursor: pointer;
`

export const Title = styled.span`
  margin-right:0.5rem;
`

export const WrapperImage = styled.div`
${({ theme }) => css`
  display: flex;
  align-items:center;
  justify-content: center;
  background: ${theme.colors.darkGray};
  border-radius: 0.5rem;
  width: 2rem;
	height: 2rem;

  :hover {
    opacity: 0.8;
  }
`}
`

export const Image = styled.img<Partial<DropdownProps>>`
  ${({active }) => css`
    transform: ${active ? "rotate(180deg)" : "rotate(0deg)"};
  `}
  width: 0.8rem;
`

// Dropdown Content
export const WrapperContent = styled.div`
  background-color:#2E303C;
  color: white;
  border-radius: 0 1rem 1rem 1rem;
  width: auto;
  padding: 1rem;
  margin-top: 0.3rem;

  a {
    padding: 0.5rem;
  }
  a:not(:last-child){
    border-bottom: 0.1rem solid white;
  }
`;
