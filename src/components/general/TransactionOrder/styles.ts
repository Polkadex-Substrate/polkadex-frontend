import styled from 'styled-components'

export const Tr = styled.tr`
  background-color: #2E303C;
  padding:1.2rem;
  margin-bottom:1.2rem;
  border-radius: 0 1rem 1rem 1rem;
  :nth-child(even) {
      background-color: #24272E;

  }
`
export const Td = styled.td``
export const ContainerFlex = styled.div`
  display: flex;
  align-items:center;
`

export const Image = styled.img`
  margin-right: 0.4rem;
  height:1.7rem;
  width:1.7rem;
`
export const ContainerActions = styled.div`
  display: flex;
  flex-direction:row;
  align-items:center;
  justify-content:flex-end;
`
