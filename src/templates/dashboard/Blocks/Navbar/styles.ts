import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 3.2fr 1.8fr;
  padding-left: 2rem;
  margin-bottom: 1rem;
`
export const ContainerPair = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items:center;
  margin-right:2rem;
`
export const ContainerInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-column-gap:2rem;
  border-radius: 0 0 3rem 3rem;
  background: #2e303a;
  box-shadow: 0px 30px 45px rgba(0, 0, 0, 0.17);
  padding: 1.5rem 2.5rem;
  width: 100%
`
export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: row;
  `
export const WrapperLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

export const VolumeHigh = styled.div`
  display: flex;
  flex-direction: row;
  p {
    color: green;
  }
`;
export const VolumeLow = styled.div`
  display: flex;
  flex-direction: row;
  p {
    color: red;
  }
`;
export const Span = styled.span`
  margin-right:1rem;
  color: #8BA1BE;
`;
export const WrapperVolume = styled.span`
`;
