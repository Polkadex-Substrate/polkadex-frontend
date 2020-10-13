import styled from 'styled-components'

export const Wrapper = styled.div``

// Table Styles
export const Table = styled.table`
  width: 100%;
  text-align:left;
`
export const Thead = styled.thead`
  font-size: 1.1rem;
  color: #8BA1BE;
  tr {
    display: grid;
    grid-template-columns: 2fr 4fr;
    margin-bottom:1rem;
  }
`
export const Tbody = styled.tbody`
  color: white;
  font-size: 1.3rem;
  tr {
    display: grid;
    grid-template-columns: 2fr 4fr;
    align-items:center;
  }
`

export const Tr = styled.tr``
export const Th = styled.th``

export const ContainerBuy = styled.div`
  margin-bottom: 2rem;
`
export const ContainerSell = styled.div`
  margin-top: 2rem;
`
export const LastTransaction = styled.div`
  background-color:#1D2127;
  padding: 1.5rem 1rem;
  text-align:center;
`



