import styled, { css } from 'styled-components'

export const Section = styled.section`
  margin-left: 1rem;
  width: 25%;
  grid-area:marketorder;
  z-index: 0;
  & .react-tabs__tab--selected {
    ${({ theme }) => css`
      color: ${theme.colors.green}
    `}
  }
  
    ${({ theme }) => css`
    color: ${theme.colors.normalWhite}
  `} 
`
// Header
export const Header = styled.div`
  display: flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  padding: 1.5rem 0;

`;

export const Fontcolor = styled.div`
${({ theme }) => css`
      color: ${theme.colors.dashboardFontColor}
    `} 
`
