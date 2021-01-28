import styled,{css} from 'styled-components'

export const Wrapper = styled.div`
${({ theme }) => css`
    background-color: ${theme.colors.orderBookComponentColor};
    box-shadow:${theme.shadow.orderBookShadow};
  `};

  border-radius: 0 3rem 3rem 3rem;
  width: 35%;
  padding: 2rem 0 2rem 2rem;
  
`

export const WrapperTitle = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  margin-bottom:1rem;
  padding-right: 2rem;
`
export const ContainerActions = styled.div`
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap:0.5rem;
  margin-right:1rem;
`
export const ContainerTitle = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  ${({ theme }) => css`
   color: ${theme.colors.normalWhite};
`}
`

