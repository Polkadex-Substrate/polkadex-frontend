import styled , { css } from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  custom: '1366px'
})

export const Myorders = styled.div`
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
  flex-direction:row;
  width:100%;
  height:32%;
  align-items:center;
  padding-top:1rem;
  padding-left:5rem;
  padding-right:5rem;
  justify-content:space-between;
`

export const ContainerWallet = styled.div`
  display:flex;
  flex-direction: row;
  align-items:center;
  `;

  export const middlecolumn = styled.div`
  display:flex;
  flex-direction: row;
  ` 

  export const WrapperBalance = styled.div`
  display:flex;
  flex-direction:column;
  margin-left: 1rem;
  color: #8BA1BE;
`;

export const Span = styled.span`
  font-size:2rem;
  font-weight:400;
  font-family: Work Sans,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
  color: #ffffff;
`;

export const Spantextblur = styled.span`
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

export const Wrapper = styled.div`
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

export const WrapperContainer = styled.div`
    cursor: pointer;
    background-color:#1F1F24;
    color:#ffffff;
    height: 5.6rem;
    width: 5.6rem;
    padding: 0.8rem;
    border-radius: 0.8rem; 
`

export const BlockWrapper = styled.div`
    display:flex;    
    flex-direction:row;
    background: #1F1F24;
    box-shadow: 0px 100px 99px #0000002C;
    border-radius: 20px;
    width: 42%;
    height: 80%;
`

export const DarkBlockWrapper = styled.div`
    display:flex;
    background-color:rgba(0, 0, 0, 0.30);
    box-shadow: 0px 100px 99px #0000002C;
    border-radius: 15px;
    width: 40%;
    flex-direction:column;
    height: 100%;
    justify-content:flex-end;
    padding-bottom:1.4rem;
    padding-left:0rem;
    ${customMedia.lessThan('custom')`
    padding-bottom:1rem;
    `}

`
export const NoDarkBlockWrapper = styled.div`
    display:flex;    
    background: #1F1F24;
    box-shadow: 0px 100px 99px #0000002C;
    border-radius: 20px;
    width: 60%;
    flex-direction:column;
    height: 100%;
    justify-content:flex-end;
    padding-left:2rem;
    padding-bottom:1.4rem;
    ${customMedia.lessThan('custom')`
    padding-bottom:1rem;
    `}
    opacity: 1;

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
export const smalltext = styled.span`
  font-size:1.2rem;
  color: #FFFFFFCC;
`
export const CoinImage = styled.img` 
  width: 20px;
  height: 20px;
  background: transparent 0% 0% no-repeat padding-box;
  opacity: 1;
`;

export const RowinsideDarkBlockWrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    opacity: 1;  
`

export const TextWrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    font-weight:400;
    font-family: Work Sans,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
    font-size:1.2rem;
    color:white;
    align-items:center;
    padding-bottom:1.4rem;

`

export const blur = styled.span`
  color: #8BA1BE;
  font-weight:400;
  font-family: Work Sans,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
`


