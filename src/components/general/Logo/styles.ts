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

export const Svg = styled.svg``;

export const LogoText = styled.g`
    transition-duration: 3s;
    transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    transition-delay: 0.1s;
    transition-property: initial;
    display: none;
    opacity:0;
`;
export const LogoIcon = styled.g``;
