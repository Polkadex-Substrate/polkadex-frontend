import styled , { css } from 'styled-components'
import { generateMedia } from 'styled-media-query'



const customMedia = generateMedia({
  custom: '1366px'
})

export const SwapboxContainer = styled.div`
height:100%;
display:flex;
flex-direction:column;
justify-content: center;
align-items:center;
padding-bottom:12rem;
`
export const SwapboxWrapper = styled.div`
width: 67%;

background: #24252C 0% 0% no-repeat padding-box;
box-shadow: 0px 100px 99px #0000002C;
border-radius: 20px;
display:flex;
flex-direction:column;
justify-content: flex-start;
align-items:center;
  transition-duration: 0.8s;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.075, 1);
  transition-delay: initial;
  transition-property: initial;
&.Active{
  height: 55%;
  transition-duration: 0.8s;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.075, 1);
  transition-delay: initial;
  transition-property: initial;
}
&.Not_Active{
  height: 69%;
  transition-duration: 0.1s;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.075, 0);
  transition-delay: initial;
  transition-property: initial;
}

`
export const Rowone = styled.div`
height:13%;
display:flex;
flex-direction:row;
width:100%;
font-size:17px;
font-family: Work Sans,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
font-weight:400;
justify-content:space-between;
`
export const TextWrapper = styled.div`
border-bottom:5px solid #0CA564;
font-size:17px;
font-family: Work Sans,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
font-weight:400;
display:flex;
align-items:center;
padding-left:4rem;
padding-right:4rem;
border-radius:3px;
`
export const TextWrapperwithoutborder = styled.div`
font-size:17px;
font-family: Work Sans,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
font-weight:400;
display:flex;
align-items:center;
padding-left:2.5rem;
padding-right:4rem;
padding-top:0.5rem;
padding-bottom:2rem;
${customMedia.lessThan('custom')`
padding-top:0rem;
`}
&.Active{
  padding-top:0rem;
}

`
export const IconWrapper = styled.div`
padding-left:1rem;
`

export const Rowtwo = styled.div`

display:flex;
flex-direction:row;
background: #2E303C 0% 0% no-repeat padding-box;
box-shadow: 0px 100px 99px #0000002C;
border-radius: 0px 30px 30px 30px;
opacity: 1;
width:120%;
transition-duration: 0.8s;
transition-timing-function: cubic-bezier(0.075, 0.82, 0.075, 1);
transition-delay: initial;
transition-property: initial;
&.Active{
  height: 87%;
  transition-duration: 0.8s;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.075, 1);
  transition-delay: initial;
  transition-property: initial;
}
&.Not_Active{
  height: 68%;
  transition-duration: 0.1s;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.075, 0);
  transition-delay: initial;
  transition-property: initial;

}
`

export const Rowthree = styled.div`
height:19%;
display:flex;
flex-direction:row;
width:100%;
justify-content:space-around;
align-items:center;
padding-left:1.5rem;
padding-right:1.5rem;
&.Active{
  display:none
}

`

export const Rowfour = styled.div`
`

export const smallfont = styled.div`
font-size:1.6rem;
`

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

export const Image = styled.img`
  width:4%;
`

export const bottomrow = styled.div`
  display:flex;
  flex-direction:row;
  width: 68%;
  justify-content:space-evenly;
  font-weight:400;
  font-family: Work Sans,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
  font-size:1.2rem;
  ${customMedia.lessThan('custom')`
  font-size:1rem;
  `}
  margin-top:2rem;
  padding-left:1rem;
  padding-right:1rem;
  &.Active{
    display:none
  }
 `

 export const blur = styled.span`
  color: #8BA1BE;
  font-weight:400;
  font-size:1.2rem; 
  padding-left:0.2rem;
  padding-right:0.8rem; 
  font-family: Work Sans,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
  `

  export const bottomtextwrapper = styled.div`
   display:flex;
   flex-direction:row;
   ${customMedia.lessThan('custom')`
   font-size:1rem;
  `}

  `
  export const noblurtext = styled.span`
  font-weight:400;
  font-size:1.2rem; 
  ${customMedia.lessThan('custom')`
  font-size:1rem;
  padding-top:0.1rem;
 `}
  `

  export const textspecialcolor = styled.div`
  color: #E6007A;
  font-weight:400;
  font-size:1.2rem; 
  ${customMedia.lessThan('custom')`
  font-size:1rem;
  padding-top:0.1rem;
 `}
  `

  export const HelperIconImage = styled.img`
  opacity:0.7;
`

