import styled  from 'styled-components'
import { generateMedia } from 'styled-media-query'
import  { css } from 'styled-components'
import media from "styled-media-query"
import { InputProps } from '.';

type Props = {
  marketActive: boolean
}

const customMedia = generateMedia({
  custom: '1199px'
})

export const WalletWrapper = styled.main`
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

export const WalletWrapperMain = styled.div`
  overflow-y:auto;
  overflow-x: hidden;
  width: 100%;
  padding: 0 1rem;
`;

export const BottomContentWrapper = styled.div`
display:flex;
height:100%;
flex-direction:row;
margin-top:5rem;
margin-bottom:2rem;
`;


export const Section = styled.section`
  margin-left: 1rem;
  width: 25%;
  grid-area:marketorder;
  z-index: 0;
 
  }
`
// Header
export const Header = styled.div`
  display: flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  padding: 1.5rem 0;
`;

