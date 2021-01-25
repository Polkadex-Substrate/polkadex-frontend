import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%; 
  text-align: center;
  margin-top: 1rem;
  ${({ theme }) => css`
  font-weight: ${theme.font.normal};
  color :${theme.colors.NormalWhite} 
  `} 
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  font-family: Work Sans Medium;
  font-size: 14px;
  
  >div {
    margin-right: 2.5rem;
  }
`;

export const Link = styled.a`
  font-family: Work Sans Medium;
  font-size: 14px;
  margin-right: 2.5rem;
`;
