import styled from 'styled-components'

export const CryptocurrenciesWrapper = styled.div`
display:flex;
flex-direction:column;
margin-left: 2rem;
background-color: #242633;
border-radius: 0 3rem 3rem 3rem;
width: 100%;
padding: 2rem 0 3rem 0rem;
box-shadow: 0px 0px 99px rgba(0,0,0,0.65);
margin-top: 5rem;
height:100%;


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
  font-family: Work Sans,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
  
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
display:flex;
flex-direction:row;
padding-left:2rem;

`

export const Image = styled.img`
  width:80%;
  height:40%;
  
`

export const ImageWrapper = styled.div`
    background: #030517 0% 0% no-repeat ;
    border-radius: 7px;
    opacity: 1;
    display: flex;
    align-items:center;
    justify-content: center;
    cursor: pointer;    
    padding-left:0.6rem;
    padding-right:0.6rem;
    
    :hover {
      opacity: 0.8;
    }
  
`
export const Iconwrapper = styled.div`
padding-top: 1.7rem;
padding-left: 0rem;

}
  `

export const LeftCurrencyColumn = styled.div`
display: flex;
flex-direction: column;
flex-basis: 100%;
flex:1;
height:100%;
`;


