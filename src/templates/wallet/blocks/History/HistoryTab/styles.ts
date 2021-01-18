import styled, { css } from 'styled-components'

type CurrencyProps = {
  side: string
}

export const MainWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #242633;
    border-radius: 0 3rem 3rem;
    padding: 2rem;
    box-shadow: 0px 0px 99px rgba(0, 0, 0, 0.65);
    margin-top: 1rem;
`

export const TimeAndHashWrapper = styled.div`
    font-size: 13px;
`

export const Hash = styled.div`
    font-weight: 500;
    font-size: 12px;
    margin-top: 0.25rem;
    color: #8BA1BE;
`

export const CurrencyWrapper = styled.div`
    display: flex;
    align-items: center;
    font-size: 13px;
    font-weight: 400;
`

export const Image = styled.img`
    height: 1.7rem;
    width: 1.7rem;
    margin-right: 0.5rem;
`

export const Currency = styled.div<CurrencyProps>`
    ${({ side, theme }) => css`
        color: ${side === 'AskLimit' ? theme.colors.primary : theme.colors.green}
    `}
`
