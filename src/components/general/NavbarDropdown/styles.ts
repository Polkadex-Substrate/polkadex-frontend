import styled, { css } from 'styled-components'

import { NavbarDropdownProps } from '.';

export const Image = styled.img<Partial<NavbarDropdownProps>>`
  transform: rotate(0deg);
`

// NavbarDropdown Content
export const WrapperContent = styled.div`
  position: absolute;
  right: 0;
   ${({ theme }) => css`
  background-color: ${theme.colors.dropdownBackgroundColor};
  `}  ;
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
`;
export const Wrapper = styled.div`
  width: fit-content;
  position: relative;

  &:hover ${WrapperContent}{
      display: block;
  }

  &:hover ${Image} {
    transform: rotate(180deg);
  }

`;

export const Header = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  margin:1rem 0;
  cursor: pointer;
  font-size:1.3rem;
`

export const Title = styled.span`
  margin-right:0.5rem;
  font-family: Work Sans Medium;
  font-size: 14px;
  ${({ theme }) => css`
    color: ${theme.colors.normalWhite} 
  `};  
`

export const WrapperImage = styled.div`
${({ theme }) => css`
  display: flex;
  align-items:center;
  justify-content: center;
  ${({ theme }) => css`
  background-color: ${theme.colors.dropdownBackgroundColor}
  `}  ;
  border-radius: 0.5rem;
  width: 2rem;
	height: 2rem;

  :hover {
    opacity: 0.8;
  }
`}
`

export const ContainerContent = styled.div`
  display: flex;
  flex-direction:column;
  align-items:flex-start;
`;
