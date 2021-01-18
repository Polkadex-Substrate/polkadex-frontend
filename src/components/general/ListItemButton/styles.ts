import styled, { css, DefaultTheme } from 'styled-components'

import { ListItemProps } from '.'

const wrapperModifier = {
  Default: (theme: DefaultTheme) => css`
    height: 3.6rem;
    padding: 0.7rem 1rem;
    display: flex;
    align-items: center;
    text-align: center;
    font-size: ${theme.font.sizes.xsmall};
  `,
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
  `,
  Selected: () => css`
    background-color: #FF0877;
  `
}

export const Wrapper = styled.div<Partial<ListItemProps>>`
${({ theme, size, darkMode, fullWidth, selected }) => css`
  border: 0;
  border-radius: ${theme.border.radius};
  padding: ${theme.spacings.xxsmall};
  color: white;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  display: inline-block;
  cursor: pointer;

  ${wrapperModifier[size](theme)}
  ${darkMode ? wrapperModifier.Dark(theme) : wrapperModifier.Light(theme)}
  ${fullWidth && wrapperModifier.FullWidth()}
  ${selected && wrapperModifier.Selected()}

  :hover {
    opacity: ${theme.colors.black};
  }
  :active {
    background-color: ${theme.colors.primary};
  }
  :not(:last-child){
    margin-right: 1rem;
  }
`}
`

export const Image = styled.img`
    width:32%;
    padding-right:1rem;
`
