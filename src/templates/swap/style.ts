import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  custom: '1199px'
})

export const Wrapper = styled.main`
  display: flex;
  flex-direction:column;
  overflow:hidden;
  background-color: #1C2023;
  max-width: 192rem;
  margin: 0 auto;
  box-shadow: 0px -36px 99px rgba(0, 0, 0, 0.5);
  position: relative;
  min-height: 110vh;
  
  -webkit-transition: all 3s linear;
  -moz-transition: all 3s linear;
  -o-transition: all 3s linear;
  -ms-transition: all 3s linear;
  transition: all 3s linear;

  ${customMedia.lessThan('custom')`
    display: none;
  `}
`
export const Header = styled.div`
  position: absolute;
  left: 1rem;
  top: 1rem;
  width: 14%;
`

export const PolkaLogo = styled.img`
  width: 100%;
  margin-bottom: 2rem;
`

export const Root = styled.div`
  position: relative;
  display: block;
  width: 100%;
`;
