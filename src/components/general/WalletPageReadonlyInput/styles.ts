import styled, { css } from 'styled-components'

import { InputProps } from '.'

const inputModifier = {
    Flex: () => css`
    display: flex;
    flex-direction: row;
    color: #8BA1BE;
  `,
}

export const Wrapper = styled.div`
  margin-bottom: 2rem;
  width:100%;
  font-family: Work Sans Medium;
`

export const ContainerInput = styled.div`
`

export const Label = styled.label`
  color: #8BA1BE;
  font-size: 15px;
  font-weight: 500;
  
  img {
    width: 1.1rem;
    height: 1.1rem;
    margin-right: 0.2rem;
  }
`

export const Box = styled.div<Partial<InputProps>>`

  ${({ theme, inputInfo }) => css`
    padding: 0.5rem 0;
    border-bottom: 0.1rem solid #8BA1BE;
    width: 100%;
    font-size: 15px;

    ${inputInfo && inputModifier.Flex()}
    :hover {
      border-bottom-color: ${theme.colors.primary};
    }
  `}
`

export const Span = styled.span`
  color:  #8BA1BE;
  opacity: 0.8;
  margin-right:3px;
  padding-top:3px;
  font-size: 14px;
  font-weight:400;
`

export const Input = styled.input`
  width: 100%;
  color: white;
  font-size: 14px;
  font-weight:400;
`

export const IconWrapper = styled.div`
`

