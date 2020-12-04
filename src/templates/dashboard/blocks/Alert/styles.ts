import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  custom: '1199px'
})

export const Warning = styled.div`
  ${customMedia.greaterThan('custom')`
    display: none;
  `}
  
  ${customMedia.lessThan('custom')`
    display: block;
  `}
`;
