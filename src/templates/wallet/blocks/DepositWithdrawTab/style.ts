import styled, { css } from 'styled-components'

import media from 'styled-media-query'
import { InputProps } from '.'

export const MiddleCurrencyColumn = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex:2;
    margin: 0 1.75rem;
`

export const TabSection = styled.section`
  grid-area:transactions;
`

// Header
export const TabHeader = styled.div<Partial<InputProps>>`

    ${({ currentTab, theme }) => css`
        display: grid;
        grid-template-columns: 1.2fr 0.8fr;
        padding-bottom: 2rem;
        align-items: center;
        font-weight: 400;
        
        ${media.lessThan('large')`
            grid-template-columns: 1fr;
            grid-row-gap: 2rem;
        `}
    
        & .react-tabs__tab {
            opacity: 0.6;
            padding: 1rem;
        }
      
        & .react-tabs__tab--selected {
            opacity: 1;
            color: ${currentTab === 1 ? theme.colors.green : theme.colors.primary};
            padding: ${currentTab === 1 ? '1rem 1.5rem' : '1rem'};
            border-bottom: 3px solid ${currentTab === 1 ? theme.colors.green : theme.colors.primary};
        }    
    `
    }
`

export const Wrapper = styled.div`
    background-color:#242633;
    border-radius: 0 3rem 3rem 3rem;
    padding: 6rem 3rem 3rem;
    box-shadow: 0px 0px 99px rgba(0, 0, 0, 0.65);
    font-size: 16px;
`
