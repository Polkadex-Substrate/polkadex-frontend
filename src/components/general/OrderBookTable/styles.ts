import styled, { css } from 'styled-components'

import { OrderBookTableProps } from '.'

export const Wrapper = styled.div``

// Table Styles
export const Table = styled.table`
  width: 100%;
  text-align:left;
  border-collapse: collapse;
  display:table;

`
export const Thead = styled.thead`
  font-size: 1.2rem;
  color: #8BA1BE;
  tr {
    display: grid;
    grid-template-columns: 2fr 4fr;
    margin-bottom:1rem;
  }
`
export const Tbody = styled.tbody`
  color: white;
  font-size: 1.2rem;
  height: 13rem;
  display: block;
  overflow-y: auto;
  tr {
    display: grid;
    grid-template-columns: 2fr 4fr;
    align-items:center;
  }
`
export const Tr = styled.tr``
export const Th = styled.th``

export const LastTransaction = styled.div<Pick<OrderBookTableProps>>`
  background-color:#1D2127;
  padding: 1.5rem 1rem;
  text-align:center;
  margin: 1rem 0;
  border-radius: 0.5rem;
  margin-right: 2rem;
  span {
    font-weight: 700;
  }


`

export const VolumeHigh = styled.span`
  color: green;
`;

export const VolumeLow = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`;




