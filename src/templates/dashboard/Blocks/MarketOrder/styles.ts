import styled from 'styled-components'

export const Section = styled.section`
  max-width: 38rem;
  width: 100%;
`
// Header
export const Header = styled.div`
  display: flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  padding: 2rem;
`;

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

// Order Box

export const WrapperOrder = styled.div`
  background: #2E303C;
  border-radius: 0 3rem 3rem 3rem;
  padding: 2rem;
`;

export const ContainerWallet = styled.div`
  display:flex;
  flex-direction: row;
  align-items:center;
`;
export const WrapperBalance = styled.div`
  display:flex;
  flex-direction:column;
  margin-left: 1rem;
`;
export const Span = styled.span`
  font-size:2rem;
  font-weight: bold;
`;
export const ContainerForm = styled.div``;
export const WrapperActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:space-between;
`;



