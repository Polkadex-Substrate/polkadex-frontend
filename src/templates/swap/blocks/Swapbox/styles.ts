import styled , { css } from 'styled-components'
import { generateMedia } from 'styled-media-query'



const customMedia = generateMedia({
  custom: '1366px'
})

export const SwapBoxContainer = styled.div`
height:100%;
display:flex;
flex-direction:column;
justify-content: center;
align-items:center;
padding-bottom:5rem;
`
export const SwapBoxWrapper = styled.div`
width: 66%;
height: 38rem;
display:flex;
flex-direction:column;
justify-content: flex-start;
align-items:center;
`
export const RowOne = styled.div`
height:13%;
display:flex;
background: #24252C 0% 0% no-repeat padding-box;
box-shadow: 0px 100px 99px #0000002C;
border-radius: 20px 20px 0px 0px;
width:110%;
font-size:17px;
font-family: Work Sans,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
font-weight:400;
justify-content:space-between;
padding-top:0.5rem;
`
export const TextWrapper = styled.div`
border-bottom:5px solid #0CA564;
display:flex;
align-items:center;
padding-left:4rem;
padding-right:4rem;
border-radius:3px 0px 3px 0px;
`
export const TextWrapperWithoutBorder = styled.div`
display:flex;
align-items:center;
padding-left:2.5rem;
padding-right:4rem;
padding-bottom:1rem;
justify-content:space-between;
`
export const IconWrapper = styled.div`
padding-left:1rem;
`

export const RowTwo = styled.div`
display:flex;
flex-direction:row;
height: 68%;
background: #2E303C 0% 0% no-repeat padding-box;
box-shadow: 0px 100px 99px #0000002C;
border-radius: 0px 30px 30px 30px;
opacity: 1;
width:120%;
z-index:1;


`

export const RowThree = styled.div`
height:19%;
display:flex;
flex-direction:row;
width:110%;
justify-content:space-around;
align-items:center;
padding-left:1.5rem;
padding-right:1.5rem;
font-size:1.6rem;
font-weight:500;

transition: transform 0.4s linear  ;
&.Active{ 
  transform:translateY(-75px);


}
&.Not_Active{ 
  background: #24252C 0% 0% no-repeat padding-box;
  box-shadow: 0px 100px 99px #0000002C;
  border-radius: 0px 0px 20px 20px; 
  transform:translateY(0px);


}
`

export const Image = styled.img`
  width:4%;
`

export const BottomRow = styled.div`
  display:flex;
  width: 68%;
  justify-content:space-evenly;
  font-weight:500;
  font-family: Work Sans,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
  font-size:1.2rem;
  ${customMedia.lessThan('custom')`
  font-size:1rem;
  `}
  margin-top:2rem;
  padding-left:1rem;
  padding-right:1rem;
  transition: transform 0.4s linear  ;
  &.Active{ 
    transform:translateY(-120px);
    
  }
  &.Not_Active{ 
    transform:translateY(0px);
    
  }
 `

 export const Blur = styled.span`
  color: #8BA1BE;   
  padding-left:0.2rem;
  padding-right:0.8rem;  
  `

  export const BottomTextWrapper = styled.div`
   display:flex;
   ${customMedia.lessThan('custom')`
   font-size:1rem;
  `}
  `
  export const NoBlurText = styled.span`
   ${customMedia.lessThan('custom')`
  font-size:1rem;
  padding-top:0.1rem;
 `}
  `

  export const TextSpecialColor = styled.div`
  color: #E6007A;
   ${customMedia.lessThan('custom')`
  font-size:1rem;
  padding-top:0.1rem;
 `}
  `

  export const HelperIconImage = styled.img`
  opacity:0.7;
`




