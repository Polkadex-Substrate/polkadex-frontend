import styled from 'styled-components'

export const Section = styled.section`
  margin-left: 1rem;
  min-width: 33rem;
  grid-area:marketorder;
  z-index: 0;
  & .react-tabs__tab--selected {
    color: green;
  }
`
// Header
export const Header = styled.div`
  display: flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  padding: 1.5rem 0;

`;
