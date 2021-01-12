import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
    custom: '1199px'
  })

export const Wrapper = styled.main`
  display: flex;
  flex-direction:row;
  height: 100vh;
  overflow-y: hidden;
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
`

export const PolkaLogo = styled.img`
  width: 17%;
  margin-bottom: 2rem;
  height: 85%;

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
    font-family:Work Sans;
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
  
`
export const bottomlabel = styled.div`
    width: 964px;
    height: 4rem;
    display:flex;   
    background: #2E303C 0% 0% no-repeat padding-box;
    box-shadow: 0px 100px 99px #0000002C;
    border-radius: 12px;
    justify-content:center;
    align-items:center;
    font-size:17px;
    font-family:Work Sans;
    font-weight:medium;
    line-spacing:20px;
`
export const Bottomtextwrapper = styled.div`
     
`


