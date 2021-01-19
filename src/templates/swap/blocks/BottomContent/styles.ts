import styled , { css } from 'styled-components'
import { generateMedia } from 'styled-media-query'



const customMedia = generateMedia({
  custom: '1366px'
})

type Props = {
  marketActive: boolean
}


export const BottomContentWrapper = styled.div`
display:flex;
flex-direction:row;
width:100%;
height:100%;
background-color: #1C2023;
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
export const IconColumn = styled.div`
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
export const BottomLabel = styled.div`
    height: 4rem;
    &.Active{
      height:11rem;
    }
    display:flex;   
    background: #24252C 0% 0% no-repeat padding-box;
    box-shadow: 0px 100px 99px #0000002C;
    border-radius: 12px 12px 0px 0px;
    justify-content:center;
    align-items:center;
    font-size:17px;
    font-family: Work Sans,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
    font-weight:400;
    line-spacing:20px;
`
export const BottomTextWrapper = styled.div`
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
export const BottomRightContentWrapper = styled.div`
display:flex;
flex-direction:row;
padding-left:15rem;
align-items:center;
`
export const BottomColor = styled.div`
width: 10px;
height: 10px;
margin-right:1.5rem;
background: #0CA564 0% 0% no-repeat padding-box;
border-radius: 20px;
`


export const WrapperGraph = styled.div<Props>`
  display: flex;
  width:108%;

`;