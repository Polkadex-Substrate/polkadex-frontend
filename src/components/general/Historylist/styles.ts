import styled , { css } from 'styled-components'
import { InputProps } from '.';

export const MainWrapper = styled.div`
  background-color:#242633;
  border-radius: 0 3rem 3rem 3rem;
  width: 100%;
  padding: 2rem 0 2rem 2rem;
  box-shadow: 0px 0px 99px rgba(0, 0, 0, 0.65);
  marign-right:3rem;
  margin-top:1.5rem;
  display:flex;
  flex-direction: row;
  justify-content:space-between;
  font-size:1.1rem;
  
  `

  export const timeandHashColumn = styled.div`
  display:flex;
  flex-direction:column
  `

  export const Span = styled.div`
  font: normal normal medium 16px/19px Work Sans;
  letter-spacing: 0px;
   color: #8BA1BE;
  `

  export const ImageWrapper = styled.div<Partial<InputProps>>`

  ${({ coloricon, rotation }) => css`

  display: flex;

  background: ${coloricon} 0% 0% no-repeat padding-box;
  border-radius: 0.5rem;
  width: 1.7rem;
  height: 1.7rem;
  transform: ${rotation};
  margin-right:0.9rem;
  
  

  
  `}
  `

  export const Currencywrapper = styled.div`
  display: flex;
  padding-right:1.9rem;
  font-size:13px;
  `

  export const Currencyspan =styled.div<Partial<InputProps>>`

  ${({ coloricon }) => css`
  
  color: ${coloricon}
  `
  }`

  export const Image = styled.div`
  width: 10%;
  height: 10%;
  `