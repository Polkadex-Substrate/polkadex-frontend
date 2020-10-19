import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1.5fr 1fr;
  height: 100vh;
  width: 21rem;
`
export const WrapperLinks = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:space-between;
  background: #2E303C;
  border-radius: 0 3rem 3rem 3rem;
  padding: 2rem 1rem;
  transition-duration: 0.8s;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  transition-delay: initial;
  transition-property: initial;
  box-shadow: 0px 30px 45px rgba(0, 0, 0, 0.17);
`;

export const Logo = styled.img`
  width: 3rem;
`

export const Container = styled.div`
  display: grid;
  grid-row-gap:1rem;

`
export const WrapperIcon = styled.a`
  display: flex;
  flex-direction:row;
  align-items:center;

  :hover {
    opacity: 0.8;
  }
`
export const Span = styled.span`
  margin-left:0.5rem;
  font-size: 1.3rem;
`

export const WrapperProfile = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: flex-end;
  padding-left: 1rem;
`;

export const Profile = styled.img`
  border-radius: 55rem;
  margin:1.5rem 0;
  width: 2.5rem;
  height:2.5rem;
`;
