import styled from 'styled-components'

export const Section = styled.section`
  padding: 1rem 0;
`

// Header
export const Header = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  padding: 2rem 0;
`
export const Tab = styled.ul`
  li {
    font-size: 1.4rem;
    font-weight: 800;
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
  align-items:center;
`

