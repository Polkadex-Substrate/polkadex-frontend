import { useState } from 'react';
import styled , { css } from 'styled-components'

import media from "styled-media-query"
import { InputProps } from '.';


  


export const MiddleCurrencyColumn = styled.div`
display: flex;
flex-direction: column;
flex-basis: 100%;
flex:2;
padding-top:2rem;
padding-left:5rem;
padding-top:3rem;
padding-top:3rem;
`;

export const TAbSection = styled.section`
  grid-area:transactions;
  padding: 1rem 0;
`

// Header
export const TABHeader = styled.div<Partial<InputProps>>`

${({ coloricon }) => css`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  padding: 2rem 0;
  align-items:center;
  font-weight:400;

  font-family: Work Sans,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
  
letter-spacing: 0px;
    ${media.lessThan('large')`
      grid-template-columns: 1fr;
      grid-row-gap: 2rem;
    `}

    & .react-tabs__tab {
      opacity: 0.6;
    }
  
    & .react-tabs__tab--selected {
      opacity: 1;
      color: #E6007A;
      padding: 1rem 0;
      border-bottom: 3px solid #E6007A;
    }
    & .react-tabs__tab:not(:last-child) {
      margin-right:2rem;
    }

`
}
`

export const TABHeaderGreen = styled.div<Partial<InputProps>>`

${({ coloricon }) => css`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  padding: 2rem 0;
  align-items:center;
  font-weight:400;
  margin-top:15rem;

  font-family: Work Sans,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
  
letter-spacing: 0px;
    ${media.lessThan('large')`
      grid-template-columns: 1fr;
      grid-row-gap: 2rem;
    `}

    & .react-tabs__tab {
      opacity: 0.6;
    }
  
    & .react-tabs__tab--selected {
      opacity: 1;
      color: #0CA564;
      padding: 1rem 0;
      border-bottom: 3px solid #0CA564;
    }
    & .react-tabs__tab:not(:last-child) {
      margin-right:2rem;
    }

`
}
`
