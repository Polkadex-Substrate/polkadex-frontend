import styled, { css } from 'styled-components'
import media, { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  custom: '1425px'
})
export const Wrapper = styled.div`
  grid-area:graph;
  ${({ theme }) => css`
  background-color: ${theme.colors.componentBackground};
  box-shadow: ${theme.shadow.dashboardBoxShadow}
  `};
  border-radius: 0 3rem 3rem 3rem;
  margin-left:0.5rem;  
  display: flex;
  flex-direction:row;
  justify-content:space-between;
  width: 75%;
  ${media.lessThan('large')`
    flex-direction: column;
  `}

  // ${customMedia.lessThan('custom')`
  //   flex-direction:column;
  // `}
`
export const WrapperGraph = styled.section`
  width: 65%;
  padding: 2rem;  
  ${({ theme }) => css`
  background-color: ${theme.colors.GraphBackgroundColor};
  box-shadow: ${theme.shadow.dashboardBoxShadow}
  `};
  // min-width:65rem;
`
// Header
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  ${({ theme }) => css`
  color: ${theme.colors.normalWhite};
 
  `};
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

type ItemProps = {
  selected?: boolean
}

export const Item = styled.div<ItemProps>`
  cursor:pointer;
  ${({ theme }) => css`
  color: ${theme.colors.normalWhite}; 
  `};
  :first-child {
    margin-left: 1rem;
  }
  
  :not(:first-child){
    margin-right: 1rem;
  }
    
  :not(:last-child){
    margin-left: 1rem;
  }
  
  ${({ selected }) => selected && css`
    background-color: #FF0087;
    height: 3.6rem;
    width: 3.6rem;
    padding: 0.8rem;
    border-radius: 0.7rem;
  `}
`

