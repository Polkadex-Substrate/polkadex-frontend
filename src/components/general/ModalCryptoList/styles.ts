import styled , { css } from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  custom: '1366px'
})

export const LeftCurrencyColumn = styled.div`
display: flex;
flex-direction: column;
flex-basis: 100%;
height:100%;
`;


export const CryptocurrenciesWrapper = styled.div`
display:flex;
flex-direction:column;
margin-left: 2rem;
background-color: #2E303C;
border-radius: 0 3rem 3rem 3rem;
width: 100%;
padding: 2rem 0 0rem 0rem;
box-shadow: 0px 0px 99px rgba(0,0,0,0.65);
margin-top: 5rem;
height:100%;

`

export const WrapperTitle = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  margin-bottom:1rem;
  padding-right: 2rem;
  padding-left:3rem;
  font-weight: 400;
  font-size:medium;
  font-family: Work Sans,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
  
`

export const WrapperDefault = styled.div`
background: #1F1F24 0% 0% no-repeat padding-box;
box-shadow: 0px 100px 99px #0000002C;
border-radius: 30px 30px 30px 30px;

width:100%;
height:12%;
display:flex;
align-items:center;
justify-content:space-between;
padding-left:1.4rem;
margin-left:0.1rem;
margin-bottom:0.1rem;
padding-right:1.4rem;
color: #FFFFFF;
font-weight: 400;
font-size:medium;
font-family: Work Sans,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
`

export const SearchWrapper = styled.div`
display:flex;
flex-direction:row;
padding-left:3rem;

`


export const Iconwrapper = styled.div`


}
  `

export const TextWrapper = styled.div`
color: #FFFFFF;
opacity: 0.5;
display:flex;
padding-left:3rem;
margin-top:2rem;
font-size:11px;
`
export const Image = styled.img`
  width:4%;
`

export const pointercursor = styled.div`
cursor:pointer;
`
