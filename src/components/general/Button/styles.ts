import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonProps } from '.'

const wrapperModifier = {
  Small: (theme:DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  Medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  Large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
  Dark: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.darkGray};
    color: ${theme.colors.white};
  `,
  Light: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.lightGray};
    color: ${theme.colors.black};
  `,
  FullWidth: () => css`
    width: 100%;
  `
}

export const Wrapper = styled.button<Partial<ButtonProps>>`
${({ theme, size, darkMode, fullWidth }) => css`
  background-color: #1C2023;
  border: 0;
  border-radius: ${theme.border.radius};
  padding: ${theme.spacings.xxsmall};
  color: white;
  cursor:pointer;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  ${wrapperModifier[size](theme)}
  ${darkMode ? wrapperModifier.Dark(theme) : wrapperModifier.Light(theme) }
  ${fullWidth && wrapperModifier.FullWidth() }

  :hover {
    opacity: ${theme.colors.black};
  }
  :active {
    background-color: ${theme.colors.primary};
    transform: translateY(0.4rem);
  }
`}
`
