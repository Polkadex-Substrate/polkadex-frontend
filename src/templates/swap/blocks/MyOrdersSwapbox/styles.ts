import styled , { css } from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  custom: '1366px'
})

export const MyOrders = styled.div`
  height:100%;
  display:flex;
  flex-direction:column;
  padding-top:1rem;
  width:100%;
`
export const FirstRow = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  width:100%;
  height:34%;
  padding-left:5rem;
`
export const SecondRow = styled.div`
  display:flex;
  flex-direction:row;
  width:100%;
  height:35%;
  align-items:center;
  padding-left:3rem;
  padding-right:3rem;
  justify-content:space-evenly;
`
export const ThirdRow = styled.div`
  display:flex;
  width:100%;
  height:32%;
  align-items:center;
  padding-top:1rem;
  padding-left:5rem;
  padding-right:5rem;
  justify-content:space-between;
`
  export const WrapperBalance = styled.div`
  display:flex;
  flex-direction:column;
  margin-left: 1rem;
  font-size:2rem;
  font-weight:400;
  font-family: Work Sans,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
   color: #ffffff;  
`;
export const SpanTextBlur = styled.span`
  text-align: left;
  font-weight:400;
  font-family: Work Sans,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
  letter-spacing: 0px;
  color: #8BA1BE;
  font-size: small;
`;
export const Image = styled.img`
  width:100%;
`
export const WrapperImage = styled.div`
    display: flex;
    align-items:center;
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
    :hover {
      opacity: 0.8;
    }   
    }
`
export const LoginButton = styled.button`
  background-color: #E60079;
  padding: 1.25rem 2rem;
  color: white;
  border-radius: 13px;
  font-size: 14px;
  margin-bottom: 2rem;
  cursor: pointer;
  font-size:16px;
  font-family: Work Sans,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
  font-weight:normal;
  &:focus {
    outline: 0;
  }
`
export const TextWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    font-weight:400;
    font-family: Work Sans,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
    font-size:1.2rem;
    color:white;
    align-items:center;
    padding-bottom:1.4rem;

`
export const Blur = styled.span`
  color: #8BA1BE;
  font-weight:400;
  font-family: Work Sans,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
`


