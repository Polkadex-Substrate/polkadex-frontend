import styled, { css } from 'styled-components'
import media,{generateMedia } from "styled-media-query"

const customMedia = generateMedia({
  custom: '1245px'
})
export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto;
  padding-left: 2rem;
  margin-bottom: 1rem;
  ${customMedia.lessThan('custom')`
    grid-template-columns: 1fr;
    padding-left: 0;
  `}
`
export const ContainerPair = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items:center;
  margin-right:2rem;
    ${customMedia.lessThan('custom')`
      margin-right:1rem;
    `}
`
export const ContainerInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(4,auto);
  grid-column-gap:3rem;
  border-radius: 0 0 3rem 3rem;
  background: #2e303a;
  box-shadow: 0px 30px 45px rgba(0, 0, 0, 0.17);
  padding: 1rem 2rem 0.9rem;
  border-radius:0 0 1.9rem 1.9rem;
  width: -webkit-fill-available;
  margin-bottom: 0.5rem;
  
  ${media.lessThan('medium')`
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 0.5rem;
    grid-column-gap: 1rem;
  `}
`
export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:space-between;

  `
export const WrapperLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

    ${customMedia.lessThan('custom')`
      display: none;
    `};

`

export const AccountAddress = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  padding: 0 1rem;
`

export const VolumeHigh = styled.div`
  p {
    font-size: 1.5rem;
    font-weight:500;
    color: #0CA564;
  }
`;

export const VolumeLow = styled.div`
  p {
    font-size: 1.5rem;
    font-weight:500;
    color: #FF0087;
  }

`;
export const WrapperVolume = styled.div`
  div {
    display: flex;
    flex-direction: row;
  }
`;

export const Span = styled.span`
  font-size: 1.2rem;
  color: #d8d8d8;
  margin-right:1rem;
`;

// Dropdown
export const WrapperDropdownContent = styled.a`
  padding:0.5rem;

  & :not(:last-child){
    margin-bottom:1rem;
  }
  & :hover{
    opacity: 0.7;
  }
`;

export const DropdownTitle = styled.p`
  font-size: 1.3rem;
  font-weight:600;

`;

export const DropdownDescription = styled.p`
  font-size: 1.2rem;
  opacity: 0.6;
`;
