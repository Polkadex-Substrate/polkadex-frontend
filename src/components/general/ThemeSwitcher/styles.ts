import styled from 'styled-components'

export const WrapperIcon = styled.a`
  display: flex;
  flex-direction:row;
  align-items:center;
  width: 100%;
  cursor:pointer;
  border-radius: 4px;
  
  &.active {
    background-color: #FF0877;
  }
`

export const SpanDark = styled.span`
  margin-left:0.5rem;
  font-size: 1.3rem;
  display: none;
  opacity:0;
`
export const SpanLight = styled.span`
  margin-left:0.5rem;
  font-size: 1.3rem;
  display: none;
  opacity:0;
  color:#000000;
`