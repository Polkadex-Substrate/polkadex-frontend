import styled from 'styled-components'

export const CryptoCurrenciesWrapper = styled.div`
    display:flex;
    flex-direction:column;
    background-color: #242633;
    border-radius: 0 3rem 3rem 3rem;
    height: 100%;
    padding: 2rem 0 3rem 0rem;
    box-shadow: 0px 0px 99px rgba(0,0,0,0.65);
`

export const WrapperTitle = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    margin-bottom:1rem;
    padding-right: 2rem;
    padding-left: 2rem;
    font-weight: 400;
    font-size:medium;
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

export const SearchWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
`

export const CryptoListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
    overflow-y: auto;
`

export const IconWrapper = styled.div`
    padding-top: 1.7rem;
    margin-left: 10px;
`

export const LeftCurrencyColumn = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    height:100%;
`


