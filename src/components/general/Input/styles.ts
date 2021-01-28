import styled, { css } from 'styled-components'

import { InputProps } from '.';

const inputModifier = {
  Flex: () => css`
    display: flex;
    flex-direction: row;
  `
}

export const Wrapper = styled.div`
  margin-bottom: 2rem;
`
export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
`
export const Label = styled.label` 
${({ theme }) => css`

 color:  #8BA1BE;
  img {
    width: 1.1rem;
    height: 1.1rem;
    margin-right: 0.2rem;
  }
`}
`
export const Box = styled.div<Partial<InputProps>>`

  ${({ theme, inputInfo, fullWidth }) => css`
    padding: 1rem;
    border-bottom: 0.1rem solid ${theme.colors.normalWhite};
    width: ${fullWidth ? "100%" : "20rem"};
    ${inputInfo && inputModifier.Flex()}
    :hover {
      border-bottom-color: ${theme.colors.primary};
    }
  `}
`
export const Span = styled.span` 
${({ theme }) => css`

 color:  #8BA1BE;
  opacity: 0.8;
`}`

export const Input = styled.input` 
${({ theme }) => css`

  color: ${theme.colors.normalWhite};
  font-weight:${theme.font.normal};
  width: 100%;
  
`}`

