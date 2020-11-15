import styled, { css } from 'styled-components'
import media from "styled-media-query";

type Props = {
  marketActive: boolean
}
export const Wrapper = styled.main`
  display: flex;
  flex-direction:row;
  height: 100vh;
  overflow-y: hidden;
  max-width: 192rem;
  margin: 0 auto;
  box-shadow: 0px -36px 99px rgba(0, 0, 0, 0.5);
`

export const WrapperMain = styled.div`
  overflow-y:auto;
  overflow-x: hidden;
  width: 100%;
  padding: 0 1rem;
`;
export const WrapperGraph = styled.div<Props>`
  display: grid;
  grid-template-areas:
    'graph'
    'marketorder'
    'transactions';
  ${media.greaterThan<Props>('large')`
    ${({marketActive }) => css`
    grid-template-areas: ${marketActive ? `
      'graph graph graph'
      'transactions transactions marketorder';
      ` : `
      'graph graph marketorder'
      'transactions transactions transactions'`};
    `}
  `}

`;
