import styled, { css } from 'styled-components'

import { IconProps } from '.'

export const Wrapper = styled.div<Pick<IconProps, "background">>`
${({ theme, background}) => css`
  display: flex;
  align-items:center;
  justify-content: center;
  background: ${theme.colors[background]};
  border-radius: 0.5rem;
  width: 3rem;
	height: 3rem;
  padding: 1rem;

  :hover {
    opacity: 0.8;
  }
`}
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
`
