import styled from 'styled-components'

export const BlockWrapper = styled.div`
  display:flex;    
  flex-direction:row;
  background: #1F1F24;
  box-shadow: 0px 100px 99px #0000002C;
  border-radius: 20px;
  width: 44%;
  height: 80%;
`

export const DarkBlockWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.30);
  box-shadow: 0px 100px 99px #0000002C;
  border-radius: 15px;
  width: 40%;    
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-family: Work Sans Medium;
  padding-bottom: 1.4rem;
`

export const NoDarkBlockWrapper = styled.div`
  display:flex;    
  flex-direction:column;
  justify-content: center;
  background: #1F1F24;
  box-shadow: 0px 100px 99px #0000002C;
  border-radius: 20px;
  width: 60%;
  font-family: Work Sans Medium;
  padding: 2rem;
  padding-right: 1rem;
  font-size: 17px;
`

export const SmallText = styled.span`
  font-size: 14px;
  color: #FFFFFFCC;
  line-height: 2rem;
`

export const CoinImage = styled.img` 
  width: 20px;
  height: 20px;
  background: transparent 0% 0% no-repeat padding-box;
  opacity: 1;
`;

export const RowInsideDarkBlockWrapper = styled.div`
    display: flex;    
    align-items: center;
    justify-content: space-evenly;
    font-family: Work Sans SemiBold;
    font-size: 13px;
`
