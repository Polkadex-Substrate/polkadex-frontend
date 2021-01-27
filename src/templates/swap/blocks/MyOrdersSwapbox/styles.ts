import styled, { css } from 'styled-components'

export const MyOrders = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  width: 100%;
`

export const FirstRow = styled.div`
  display:flex;
  align-items: center;
  width: 100%;
  padding: 2rem 4rem 1.5rem;
`

export const SecondRow = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 35%;
  padding: 0 3rem;
`

export const ThirdRow = styled.div`
  display:flex;
  width:100%;
  height:32%;
  align-items:center;
  padding-top:1rem;
  padding-left:3rem;
  padding-right:4rem;
  justify-content:space-between;
  margin-bottom: 3rem;
`

export const WrapperBalance = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  font-size: 22px;
  font-family: Work Sans Medium;
  color: #ffffff;  
  line-height: 2rem;
`;

export const SpanTextBlur = styled.span`
  color: #FFF;
  opacity: 0.7;
  font-size: 13px;
  font-family: Work Sans;
`;

export const Image = styled.img`
  width:90%;
`

export const WrapperImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color:#1C2023;
    color:#ffffff;
    height: 3.6rem;
    width: 3.6rem;
    padding: 0.8rem;
    border-radius: 0.8rem;
    
    img {
      width: 90%;
      
      &:hover {
        opacity: 0.8;
      }   
    }
`

export const LoginButton = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};  
  `}
  padding: 1.25rem 3rem;
  color: white;
  border-radius: 13px;
  font-size: 13px;
  cursor: pointer;
  font-family: Work Sans SemiBold;
  
  &:focus {
    outline: 0;
  }
`
export const TextWrapper = styled.div`
  display: flex;
  font-family: Work Sans Medium;
  font-size: 13px;
  color: white;
  align-items: center;
`

export const Blur = styled.div`
  color: #FFFFFF;
  opacity: 0.5;
  font-family: Work Sans;
  font-size: 12px;
  padding-right: 0.5rem;
`
