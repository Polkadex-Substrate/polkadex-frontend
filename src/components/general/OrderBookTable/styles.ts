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
${({ theme }) => css`
color: ${theme.colors.normalWhite} ;
`}
  font-size: 1.2rem;
  height: 17rem;
  display: block;
  overflow-y: auto;
  tr {
    display: grid;
    grid-template-columns: 2fr 4fr;
    align-items:center;
  }
`
export const Tr = styled.tr``
export const Th = styled.th`
    font-weight: 200;
`;

export const LastTransaction = styled.div`
${({ theme }) => css`
background-color: ${theme.colors.orderBookLabelColor} ;
`}  
  padding: 1.5rem 1rem;
  text-align:center;
  margin: 1rem 0;
  border-radius: 0.5rem;
  margin-right: 2rem;
  color: #ffffff; 
  
  span {
    font-weight: 700;
    color:#0CA564;
  }
`

export const VolumeHigh = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.green};
  `}
`;

export const VolumeLow = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.primary} !important;
  `}
`;

export const FontColor = styled.span`
${({ theme }) => css`
color: ${theme.colors.normalWhite} !important;
`}
`;
