import styled, { css } from 'styled-components'

import { InputProps } from '.';

const inputModifier = {
  Flex: () => css`
    display: flex;
    flex-direction: row;
    color: #8BA1BE;
  `
}

export const Wrapper = styled.div`
  margin-bottom: 2rem;
  width:100%;
 

`
export const ContainerInput = styled.div`
  
  
`
export const Label = styled.label`
  color: #8BA1BE;
  img {
    width: 1.1rem;
    height: 1.1rem;
    margin-right: 0.2rem;
  }
  font-size: 15px;
  font-weight:500;
 font-family: Work Sans,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
`
export const Box = styled.div<Partial<InputProps>>`

  ${({ theme, inputInfo, fullWidth }) => css`
    padding: 1rem;
    border-bottom: 0.1rem solid #8BA1BE;
    width: 100%;
    ${inputInfo && inputModifier.Flex()}
    :hover {
      border-bottom-color: ${theme.colors.primary};
    }
    font-size: 15px;
  `}
`
export const Span = styled.span`
  color:  #8BA1BE;;
  opacity: 0.8;
  margin-right:3px;
  padding-top:3px;
  font-size: 15px;
  font-weight:500;
font-family: Work Sans,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
`

export const Input = styled.input`
  width: 100%;
  color: white;
  font-size: 15px;
  font-weight:500;
font-family: Work Sans,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
`

export const IconWrapper = styled.div`
opacity: 0.4;
`

