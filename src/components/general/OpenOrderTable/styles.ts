import styled from 'styled-components'
import media from "styled-media-query"

export const Wrapper = styled.div``

// Table Styles
export const Table = styled.table`
  width: 100%;
  text-align:left;
`
export const Thead = styled.thead`
  font-size: 1.2rem;
  color: #8BA1BE;
  tr {
    display: grid;
    grid-template-columns: 1fr repeat(5,1fr) 1fr;
    margin-bottom:1rem;
    padding: 0 1rem;
  }
`
export const Tbody = styled.tbody`
  color: white;
  font-size: 1.3rem;

  ${media.greaterThan('large')`
    height: 32rem;
    display: block;
    overflow-y: auto;
  `}
  tr {
    display: grid;
    grid-template-columns: 1fr repeat(5,1fr) 1fr;
    align-items:center;
    background-color: #2E303C;
    ${media.lessThan('large')`
      grid-template-columns: repeat(4,1fr);
      grid-row-gap: 2rem;
      grid-column-gap: 1rem;
    `}
  }
`

export const Th = styled.th`
  font-size: 1.4rem;
  font-weight: 500;
  ${media.lessThan('large')`
    display: none;
  `}
`

export const Tr = styled.tr`
  padding:1.2rem;
  margin-bottom:1.2rem;
  border-radius: 0 1rem 1rem 1rem;
  :nth-child(even) {
      background-color: #24272E;

  }
`
export const Td = styled.td``
export const ContainerFlex = styled.div`
  display: flex;
  align-items:center;
`

export const Image = styled.img`
  margin-right: 0.4rem;
  height:1.7rem;
  width:1.7rem;
`
export const ContainerActions = styled.div`
  display: flex;
  flex-direction:row;
  align-items:center;
  justify-content:flex-end;
    ${media.lessThan('large')`
      justify-content:flex-start;
  `}
`
export const Tag = styled.span`
  display:block;
  margin-bottom: 1rem;
  display: none;
  opacity: 0.5;
  ${media.lessThan('large')`
    display: block;
  `}
`

export const Status = styled.div`
  display: flex;
  align-items: center;
  
  img {
    margin-right: 0.5rem;
  }
`
