import styled from 'styled-components'

export const Section = styled.section`
  max-width: 32rem;
  width: 100%;
  margin-left: 1rem;
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
  padding: 4.5rem 3rem;
  box-shadow: 0px 30px 45px rgba(0, 0, 0, 0.17);
`;

export const ContainerWallet = styled.div`
  display:flex;
  flex-direction: row;
  align-items:center;
  margin-bottom: 2.5rem;
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
  align-items:center;
  font-size: 1.2rem;
`;



