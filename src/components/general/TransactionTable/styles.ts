import styled from 'styled-components'

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
    grid-template-columns:  2.5fr repeat(5,1fr) 0.5fr;
    margin-bottom:1rem;
    padding: 0 1rem;
  }
`
export const Tbody = styled.tbody`
  color: white;
  font-size: 1.3rem;
  tr {
    display: grid;
    grid-template-columns: 2.5fr repeat(5,1fr) 0.5fr;
    align-items:center;
  }
`

export const Tr = styled.tr``
export const Th = styled.th``


