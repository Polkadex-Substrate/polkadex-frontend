import styled from 'styled-components'

export const Wrapper = styled.div`
background: #2E303C 0% 0% no-repeat padding-box;
  border-radius: 0 3rem 3rem 0rem;
  width: 45%;
  padding: 4rem 0 2rem 1rem;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.65);
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
`

