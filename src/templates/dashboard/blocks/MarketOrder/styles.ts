import styled, { css } from 'styled-components'


type TabHeaderProps = {
  currentTab: number
}


export const Section = styled.section`
  margin-left: 1rem;
  width: 25%;
  grid-area:marketorder;
  z-index: 0;  
    ${({ theme }) => css`
    color: ${theme.colors.normalWhite}
  `} 
`
// Header
export const Header = styled.div<TabHeaderProps>`
${({ currentTab, theme }) => css`
  display: flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  padding: 1.5rem 0;
  & .react-tabs__tab--selected {
    ${({ theme }) => css`
    color: ${currentTab === 1 ? theme.colors.green : theme.colors.primary};
    `}
  }
  `}

`;

export const Fontcolor = styled.div`
${({ theme }) => css`
      color: ${theme.colors.dashboardFontColor}
    `} 
`
