import styled, { css } from 'styled-components'

import { NavbarItemPops } from '.'

export const Wrapper = styled.div``
export const Label = styled.span`
  ${({ theme }) => css`
    font-size: 1.1rem;;
    color: #8BA1BE;
    opacity: 0.7;
    font-weight:300;
  ` }
`
export const Info = styled.p<Partial<NavbarItemPops>>`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight:700;
  ` }
`

export const VolumeHigh = styled.div`
  p {
    color: green;
  }
`;

export const VolumeLow = styled.div`
  p {
    ${({ theme }) => css`
      color: ${theme.colors.primary};
    `}
  }
`;
