import styled, { css } from 'styled-components'

import { LogoProps } from '.'

const imageModifier = {
  Small: () => css`
    width: 8rem;
  `,
  Medium: () => css`
    width: 12rem;
  `,
  Large: () => css`
    width: 16rem;
  `,
}
export const Link = styled.a``

export const Image = styled.img<Partial<LogoProps>>`
${({ size }) => css`
  ${imageModifier[size]}
`}
`
