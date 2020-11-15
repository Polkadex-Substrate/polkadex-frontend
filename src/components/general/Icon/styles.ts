import styled, { css, DefaultTheme } from 'styled-components'

import { IconProps } from '.'
const WrapperModifier = {
  XSmall: (theme: DefaultTheme) => css`
    height: 1.9rem;
    width: 1.9rem;
    padding: ${theme.spacings.xxxsmall} ;
    border-radius: 0.5rem;
    img {
      width: 100%;
      height: 100%;
    }
  `,
  Default: (theme: DefaultTheme) => css`
    height: 3.6rem;
    width: 3.6rem;
    padding: ${theme.spacings.xxxsmall} ;
    border-radius: 0.5rem;
    img {
      width: 100%;
      height: 100%;
    }
  `,
  Small: (theme: DefaultTheme) => css`
    height: 2.5rem;
    width: 2.5rem;
    padding: ${theme.spacings.xxxsmall} ;
    border-radius: 0.5rem;
    img {
      width: 100%;
      height: 100%;
    }
  `,
  Medium: (theme: DefaultTheme) => css`
    height: 3.6rem;
    width: 3.6rem;
    padding: 0.8rem;
    border-radius: ${theme.border.radius};
    img {
      width: 60%;
    }
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
  `,
  Gray: (theme: DefaultTheme) => css`
    background-color:${theme.colors.gray};
    color: ${theme.colors.white};
  `
}

export const Wrapper = styled.div<Partial<IconProps>>`
  ${({ theme, background, size }) => css`
    display: flex;
    align-items:center;
    justify-content: center;
    cursor: pointer;
    ${background && WrapperModifier[background](theme)};
    ${size && WrapperModifier[size](theme)};
    :hover {
      opacity: 0.8;
    }
  `}
`


export const Image = styled.img`
  width:100%;
`
