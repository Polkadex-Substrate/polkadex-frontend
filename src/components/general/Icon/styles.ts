import styled, { css, DefaultTheme } from 'styled-components'

import { IconProps } from '.'
const WrapperModifier = {
  Small: (theme: DefaultTheme) => css`
    height: 1.8rem;
    width: 1.8rem;
    padding: ${theme.spacings.xxxsmall} ;
    border-radius: 0.5rem;

    img {
      width: 100%;
      height: 100%;
    }
  `,
  Medium: (theme: DefaultTheme) => css`
    height: 3rem;
    width: 3rem;
    padding: ${theme.spacings.xxsmall};
    border-radius: ${theme.border.radius};
  `,
  Large: (theme: DefaultTheme) => css`
    height: 5rem;
    width: 5rem;
    padding: ${theme.spacings.xxsmall};
    border-radius: ${theme.border.radius};
  `,
  DarkGray: (theme: DefaultTheme) => css`
    background-color:${theme.colors.darkGray};
    color: ${theme.colors.white};
  `,
  LightGray: (theme: DefaultTheme) => css`
    background-color:${theme.colors.lightGray};
    color: ${theme.colors.black};
  `,
  None: (theme:DefaultTheme) => css`
    background:none;
    color: ${theme.colors.black};
  `,
  Primary: (theme: DefaultTheme) => css`
    background-color:${theme.colors.primary};
    color: ${theme.colors.white};
  `
}

export const Wrapper = styled.div<Partial<IconProps>>`
  ${({ theme, background, size }) => css`
    display: flex;
    align-items:center;
    justify-content: center;
    ${background && WrapperModifier[background](theme)};
    ${size && WrapperModifier[size](theme)};
    :hover {
      opacity: 0.8;
    }
  `}
`


export const Image = styled.img``
