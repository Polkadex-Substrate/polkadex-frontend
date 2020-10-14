import styled from 'styled-components'

export const Section = styled.section``

// Header
export const Header = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  padding: 2rem 0;
`
export const Tab = styled.ul`
  li {
    font-size: 1.4rem;
    font-weight: 700;
    display:inline-block;
  }

  li :not(:last-child) {
    margin-right: 2rem;
  }
`
export const WrapperActions = styled.div`
  display: flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
`
export const ContainerActions = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap:1rem;
`

export const ContainerTransactions = styled.div`
  display:flex;
  flex-direction:row;
`

