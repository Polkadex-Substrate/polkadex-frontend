import styled, { css } from 'styled-components'

import { NavbarItemPops } from '.'

export const Wrapper = styled.div``
export const Label = styled.span`
  font-size: 1.2rem;
  color: #d8d8d8;
`
export const Info = styled.p<Partial<NavbarItemPops>>`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight:700;
  ` }
`

export const VolumeHigh = styled.div`
  p {
    ${({ theme }) => css`
      color: ${theme.colors.green}
    `}
  }
`;

export const VolumeLow = styled.div`
  p {
    ${({ theme }) => css`
      color: ${theme.colors.primary};
    `}
  }
`;
