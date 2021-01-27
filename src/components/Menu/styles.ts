import { LogoText } from 'components/general/Logo/styles';
import styled , { css }from 'styled-components'

export const WrapperIcon = styled.a`
  display: flex;
  flex-direction:row;
  align-items:center;
  width: 100%;
  cursor:pointer;
  border-radius: 4px;
  
  &.active {
    background-color: #FF0877;
  }
`

export const Span = styled.span`
  margin-left:0.5rem;
  font-size: 1.3rem;
  display: none;
  opacity:0;
  ${({ theme }) => css`
    color: ${theme.colors.menuColor}
  `}
`

export const WrapperLinks = styled.div`
  z-index:20;
  width: 5rem;
  display: flex;
  flex-direction:column;
  justify-content:space-between;
  ${({ theme }) => css`
    background-color: ${theme.colors.componentBackground};    
  `}
  border-radius: 0 3rem 3rem 3rem;
  padding: 2rem 1rem;
  transition-duration: 0.8s;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.075, 1);
  transition-delay: initial;
  transition-property: initial;
  box-shadow: 0px 30px 45px rgba(0, 0, 0, 0.17);
`;

export const Wrapper = styled.nav`
  display: grid;
  grid-template-rows: 5fr 1fr;
  height: 100vh;
  width: 5rem;
  transition-duration: 0.8s;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.075, 1);
  transition-delay: initial;
  transition-property: initial;
  
  &:hover, :hover ${WrapperLinks} {
    width: 17rem;
  }
  
  &:hover ${LogoText} {
    display:block;
    opacity: 1;
  }
  
  &:hover ${Span} {
    display:block;
    opacity: 1;
  }
`

export const Logo = styled.img`
  width: 3rem;
`

export const Container = styled.div`
  display: grid;
  grid-row-gap:1rem;
`

export const WrapperProfile = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: flex-end;
  padding-left: 1.25rem;
`;

export const Profile = styled.img`
  border-radius: 55rem;
  margin:1.5rem 0;
  width: 2.5rem;
  height:2.5rem;
`;
