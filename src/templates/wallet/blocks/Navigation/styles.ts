import styled ,{css}from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%; 
  text-align: center;
  margin-top: 0.5rem;
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
  
  
  div {
    margin-left: 0.75rem;
  }
`;
