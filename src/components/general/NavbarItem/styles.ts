import styled, { css } from 'styled-components'

import { NavbarItemPops } from '.'

export const Wrapper = styled.div``
export const Label = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: #8BA1BE;
    opacity: 0.7;
    font-weight:700;
  ` }
`
export const Info = styled.p<Partial<NavbarItemPops>>`
  ${({ theme,color }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${color ? theme.colors.primary : 'inherit'};
    font-weight:700;
  ` }
`

