import styled  from 'styled-components'
import { generateMedia } from 'styled-media-query'

type Props = {
  marketActive: boolean
}

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

export const WrapperMain = styled.div`
  overflow-y:auto;
  overflow-x: hidden;
  width: 100%;
  padding: 0 1rem;
`;
export const WrapperGraph = styled.div<Props>`
  display: flex;

`;

export const ContentHeading = styled.div`
    font-size: 34px;
    font-weight: 800;
    line-height: 29px;
    text-align: center;
    
`
export const ContentBlur = styled.div`
font-size: 21px;
font-weight: 500;
line-height: 24px;
text-align: center;
margin-top: 8px;
margin-bottom: 8px;
color:#A3A4A7;
    
`

export const BalanceHeaderWrapper = styled.div`
padding-top: 10rem;
`;