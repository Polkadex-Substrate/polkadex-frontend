import styled from 'styled-components'

export const LeftCurrencyColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  height:100%;
`;

export const CryptoCurrenciesWrapper = styled.div`
  display:flex;
  flex-direction:column;
  margin-left: 2rem;
  background-color: #2E303C;
  border-radius: 0 3rem 3rem 3rem;
  width: 100%;
  padding: 2rem 0 0rem 0rem;
  box-shadow: 0px 0px 99px rgba(0,0,0,0.65);
  margin-top: 5rem;
  height:100%;
`

export const WrapperTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-right: 2rem;
  padding-left: 2rem;
`

export const WrapperDefault = styled.div`
  background-color: #00000050;
  box-shadow: 0px 100px 99px #0000002C;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  color: #FFFFFF;
  font-family: Work Sans Medium;
  font-size: 14px;
`

export const SearchWrapper = styled.div`
  display: flex;
  padding-left: 2rem;
  margin-top: 1rem;
  width: 90%;
`

export const TextWrapper = styled.div`
  color: #FFFFFF;
  opacity: 0.5;
  display: flex;
  padding-left: 2rem;
  margin-top: 1rem;
  font-size: 11px;
`
export const Image = styled.img`
  width: 4%;
`

export const PointerCursor = styled.div`
  cursor: pointer;
`

export const CryptoListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  overflow-y: auto;
`
