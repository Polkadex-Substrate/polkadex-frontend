import styled from 'styled-components'
import media from "styled-media-query";

export const Wrapper = styled.div`
  background: #2E303C;
  border-radius: 0 3rem 3rem 3rem;
  box-shadow: 0px 30px 45px rgba(0, 0, 0, 0.17);
  display: flex;
  flex-direction:row;
  ${media.lessThan('large')`
    flex-direction: column;
  `}
`
export const WrapperGraph = styled.section`
  width: 100%;
  padding: 2rem;
  box-shadow: 0px 30px 45px rgba(0, 0, 0, 0.17);
  display:flex;
  align-items:center;
  justify-content:center;
`

