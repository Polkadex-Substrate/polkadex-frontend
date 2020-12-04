import styled, { css } from 'styled-components'

export const Section = styled.section`
  margin-left: 1rem;
  width: 25%;
  grid-area:marketorder;
  z-index: 0;
  & .react-tabs__tab--selected {
    ${({ theme }) => css`
      color: ${theme.colors.green}
    `}
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
