import styled , { css } from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  custom: '1366px'
})


export const BlockWrapper = styled.div`
    display:flex;    
    flex-direction:row;
    background: #1F1F24;
    box-shadow: 0px 100px 99px #0000002C;
    border-radius: 20px;
    width: 42%;
    height: 80%;
`

export const DarkBlockWrapper = styled.div`
    display:flex;
    background-color:rgba(0, 0, 0, 0.30);
    box-shadow: 0px 100px 99px #0000002C;
    border-radius: 15px;
    width: 40%;
    flex-direction:column;
    font-weight:500;
    height: 100%;
    justify-content:flex-end;
    padding-bottom:1.4rem;
    padding-left:0rem;
    ${customMedia.lessThan('custom')`
    padding-bottom:1rem;
    `}

`
export const NoDarkBlockWrapper = styled.div`
    display:flex;    
    background: #1F1F24;
    box-shadow: 0px 100px 99px #0000002C;
    border-radius: 20px;
    width: 60%;
    flex-direction:column;
    font-weight:500;
    height: 100%;
    justify-content:flex-end;
    padding-left:2rem;
    padding-bottom:1.4rem;
    ${customMedia.lessThan('custom')`
    padding-bottom:1rem;
    `}
    opacity: 1;

`

export const SmallText = styled.span`
  font-size:1.2rem;
  color: #FFFFFFCC;
  font-weight:500;
`
export const CoinImage = styled.img` 
  width: 20px;
  height: 20px;
  background: transparent 0% 0% no-repeat padding-box;
  opacity: 1;
`;

export const RowInsideDarkBlockWrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    opacity: 1;  
    font-weight:500;
`