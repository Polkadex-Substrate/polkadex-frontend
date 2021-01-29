import styled, { css } from 'styled-components'
import media, { generateMedia } from 'styled-media-query'

type TabHeaderProps = {
  currentTab: number
}

const customMedia = generateMedia({
  custom: '1400px',
})

export const MiddleCurrencyColumn = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 2;
    margin: 0 1.75rem;
    ${customMedia.greaterThan('custom')`
        flex: 1.5;
    `}
`
export const TabSection = styled.section`
  grid-area:transactions;
`
// Header
export const TabHeader = styled.div<TabHeaderProps>`
    ${({ currentTab, theme }) => css`
        display: grid;
        grid-template-columns: 1.2fr 0.8fr;
        padding-bottom: 2rem;
        align-items: center;
        ${({ theme }) => css`
        font-weight: ${theme.font.normal};
        color :${theme.colors.normalWhite} 
        `}  ;
              
        ${media.lessThan('large')`
            grid-template-columns: 1fr;
            grid-row-gap: 2rem;
        `}    

        & .react-tabs__tab {
            opacity: 0.5;
            padding: 1rem;
            font-family: Work Sans Medium;
            font-size: 15px;
        }

        & .react-tabs__tab--selected {
            opacity: 1;
            font-family: Work Sans SemiBold;
            font-size: 16px;
            color: ${currentTab === 1 ? theme.colors.green : theme.colors.primary};
            padding: ${currentTab === 1 ? '1rem 1.5rem' : '1rem'};
            border-bottom: 4px solid ${currentTab === 1 ? theme.colors.green : theme.colors.primary};
        }    
    `}
`

export const Wrapper = styled.div`
  border-radius: 0 3rem 3rem 3rem;
  padding: 6rem 3rem 3rem;
  font-size: 16px;
  
  
  ${({ theme }) => css`
    background-color: ${theme.colors.componentBackground};
    box-shadow: ${theme.shadow.largeComponentShadow};
    color: ${theme.colors.normalWhite}
  `};
`
