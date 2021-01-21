import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
    custom: '1199px'
  })
  

export const Wrapper = styled.main`
  display: flex;
  flex-direction:column;
  height: 100vh;
  &.Active{
    height: 151vh;
  }
  background-color: #1C2023;
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


export const Root = styled.div`
  position: relative;
  background-color: #1C2023;
 
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3); 

`;


export const Overlay = styled.div`
  
`;





