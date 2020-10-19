import styled from 'styled-components'

// MR - Menu Left
// NB - Notifications Block
// NM - Navbar Menu
// GB - Graph Block
// MB - Market Block
// MOB - Market Order Block
// TB - Transactions Block


export const Wrapper = styled.main`
  display: flex;
  flex-direction:row;
  height: 100vh;
  overflow-y: hidden;
`

export const WrapperMain = styled.div`
  overflow-y:auto;
  overflow-x: hidden;
  width: 100%;
  padding: 0 1rem;
`;
export const WrapperGraph = styled.div`
  display: flex;
  flex-direction: row;
`;
