import styled  from 'styled-components'
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

export const WrapperGraph = styled.div`
  display: flex;
`;
