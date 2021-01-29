import styled, { css } from 'styled-components'
import media, { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  custom: '1425px'
})
export const Wrapper = styled.div`
  margin-left:0.5rem;
  box-shadow: 0px 100px 99px #0000002C;
  border-radius: 0px 30px 0px 0px;
  display: flex;
  background: #2E303C;
  width:100%;
  flex-direction:row;
  justify-content:space-between;
  ${media.lessThan('large')`
    flex-direction: column;
  `}

  // ${customMedia.lessThan('custom')`
  //   flex-direction:column;
  // `}
`
export const WrapperGraph = styled.section`
  width: 80%;
  padding: 2rem;
  background:  #2E303C 0% 0% no-repeat padding-box;

  // min-width:65rem;
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
  justify-content:space-evenly;
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

 export const HeaderFont = styled.div`
 text-align: left;
 font-size:21px;
 letter-spacing: 0px;
 color: #FFFFFF;
 font-family: Work Sans Medium;
 font-weight:500;
 margin-left:1rem;
 margin-right:2rem;
 `

 export const DateRangeWrapper = styled.div`
 background: #1C2023 0% 0% no-repeat padding-box;
 border-radius: 7px
 display:flex;
 justify-content:center;
 align-items:center;
 
 `
 

