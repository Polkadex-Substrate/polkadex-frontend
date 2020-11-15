import styled from 'styled-components'

// Order Box

export const WrapperOrder = styled.div`
  background: #2E303C;
  border-radius: 0 3rem 3rem 3rem;
  padding: 4.5rem 2rem;
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
  color: #8BA1BE;
`;
export const Span = styled.span`
  font-size:2rem;
  font-weight: Medium;
  color: #ffffff;
`;
export const ContainerForm = styled.div`
  color: #DCF307;
`;

export const WrapperActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  align-items:center;
  font-size: 1.2rem;
  color: #8BA1BE;
  span{
    color:white;
  }
`;

