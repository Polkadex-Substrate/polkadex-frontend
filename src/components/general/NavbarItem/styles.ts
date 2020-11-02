import styled, { css } from 'styled-components'

import { NavbarItemPops } from '.'

export const Wrapper = styled.div``
export const Label = styled.span`
  ${({ theme }) => css`
    font-size: 1.1rem;;
    color: #8BA1BE;
    opacity: 0.7;
    font-weight:700;
  ` }
`
export const Info = styled.p<Partial<NavbarItemPops>>`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight:700;
  ` }
`

