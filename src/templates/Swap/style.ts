import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
    custom: '1199px'
  })
  type Props = {
    marketActive: boolean
  }

export const Wrapper = styled.main`
  display: flex;
  flex-direction:row;
  height: 100vh;
  &.Active{
    height: 131vh;
  }
  max-width: 192rem;
  margin: 0 auto;
  box-shadow: 0px -36px 99px rgba(0, 0, 0, 0.5);
  ${customMedia.lessThan('custom')`
    display: none;
  `}
`

export const Header = styled.div`
display: flex;
flex-direction:row;
height: 13%;
margin-top:1.3rem;
margin-left:1.2rem;
&.Active{
  height: 8%;
}
`

export const PolkaLogo = styled.img`
  width: 14%;
  margin-bottom: 2rem;
  height: 79%;
  &.Active{
    height: 76%;
  }
`

export const ContentWrapper = styled.div`
display:flex;
flex-direction:column;
width: 100%;
height:100%;
`

export const BottomContentWrapper = styled.div`
display:flex;
flex-direction:row;
width:100%;
height:100%;
`

export const LeftColumn = styled.div`
  display:flex;
  flex-direction:column;
  height:100%;
  justify-content:flex-end;
  margin-left:1.2rem;
  padding-bottom:1.3rem;
  flex:1
`

export const LabelWithIcon = styled.div`
    display:flex;    
    width: 224px;
    height: 48px;
    background: #2E303C 0% 0% no-repeat padding-box;
    border-radius: 7px;
    align-items:center;
    justify-content:flex-start;
    padding-left:0.8rem;
    font-size:17px;
    font-family: Work Sans,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
    font-weight:medium;
    line-spacing:20px;
`

export const IconWrapper = styled.div`
    padding-right:1rem;    
`

export const Iconcolumn = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    margin-bottom:1rem;
    
`
export const Marginbottom= styled.div`
    margin-bottom:1rem;
`

export const MiddleColumn = styled.div`
    display:flex;
    flex-direction:column;
    height:100%;
    justify-content:flex-end;
    margin-left:7rem;
    flex:3;
  
`
export const bottomlabel = styled.div`
    
    height: 4rem;

    &.Active{
      height:11rem;
    }
    display:flex;   
    background: #24252C 0% 0% no-repeat padding-box;
    box-shadow: 0px 100px 99px #0000002C;
    border-radius: 12px;
    justify-content:center;
    align-items:center;
    font-size:17px;
    font-family: Work Sans,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
    font-weight:400;
    line-spacing:20px;
`
export const Bottomtextwrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-evenly; 
    width:17rem;
`
export const Image = styled.img`
    width:10%;
`

export const RightColumn = styled.div`
  display:flex;
  flex-direction:column;
  height:100%;
  justify-content:flex-end;
  margin-left:1.2rem;
  padding-bottom:2rem;
  flex:1;
`

export const bottomrightcontentwrapper = styled.div`
display:flex;
flex-direction:row;
padding-left:15rem;
align-items:center;
`
export const bottomcolor = styled.div`
width: 10px;
height: 10px;
margin-right:1.5rem;
background: #0CA564 0% 0% no-repeat padding-box;
border-radius: 20px;
`

export const Root = styled.div`
  position: relative;
  

`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3); 
`;

export const Dialog = styled.div`
  border-radius: 5px;  
  position: absolute;
  height:80%;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  width:25%
`;




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
height: 100%
`

export const WrapperTitle = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  margin-bottom:1rem;
  padding-right: 2rem;
  padding-left: 2rem;
  font-weight: 400;
  font-size:medium;
  font-family: Work Sans,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
  
`
export const ContainerActions = styled.div`
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap:0.5rem;
  margin-right:1rem;
`
export const ContainerTitle = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
`

export const SearchWrapper = styled.div`
display:flex;
flex-direction:row;
padding-left:2rem;

`

export const Image2 = styled.img`
  width:80%;
  height:40%;
  
`

export const ImageWrapper = styled.div`
    background: #030517 0% 0% no-repeat ;
    border-radius: 7px;
    opacity: 1;
    display: flex;
    align-items:center;
    justify-content: center;
    cursor: pointer;    
    padding-left:0.6rem;
    padding-right:0.6rem;
    
    :hover {
      opacity: 0.8;
    }
  
`
export const Iconwrapper = styled.div`


}
  `

export const WrapperDefault = styled.div`
background: #1F1F24 0% 0% no-repeat padding-box;
box-shadow: 0px 100px 99px #0000002C;
border-radius: 30px 30px 30px 30px;

width:100%;
height:12%;
display:flex;
flex-direction:row;
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

export const WrapperGraph = styled.div<Props>`
  display: flex;
  width:108%;

`;






