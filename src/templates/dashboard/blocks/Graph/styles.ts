import styled from 'styled-components'
import media,{generateMedia} from "styled-media-query";

const customMedia = generateMedia({
  custom: '1425px'
})
export const Wrapper = styled.div`
  grid-area:graph;
  background: #2E303C;
  border-radius: 0 3rem 3rem 3rem;
  margin-left:0.5rem;
  box-shadow: 0px 30px 45px rgba(0, 0, 0, 0.17);
  display: flex;
  flex-direction:row;
  justify-content:space-between;
  ${media.lessThan('large')`
    flex-direction: column;
  `}

  ${customMedia.lessThan('custom')`
    flex-direction:column;
  `}
`
export const WrapperGraph = styled.section`
  width: 100%;
  padding: 2rem;
  box-shadow: 0px 30px 45px rgba(0, 0, 0, 0.17);
  min-width:65rem;
`
// Header
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`
export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const List = styled.div`
  display: flex;
  justify-content:space-space-between;
  align-items:center;
`
export const WrapperFilters = styled.div``

// Graph
export const Graph = styled.div``

export const Item = styled.div`
  cursor:pointer;
:first-child {
  margin-left: 1rem;
}
:not(:first-child){
    margin-right: 1rem;
  }
:not(:last-child){
    margin-left: 1rem;
  }
`
