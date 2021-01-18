import styled , { css } from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  custom: '1366px'
})


export const coinwrapper = styled.div`
display:flex;
flex-direction:row;
align-items:center;

`
export const nameandvaluecolumn = styled.div`
display:flex;
flex-direction:column;
`

export const CoinImage = styled.img` 
width: 20px;
height: 20px;
background: transparent 0% 0% no-repeat padding-box;
opacity: 1;
margin-right:1rem;
`;

export const blurtext = styled.div`
color:#FFFFFF;
font-weight:Regular;
font-family: Work Sans,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
font-size:1.2rem;
opacity: 0.5;
`