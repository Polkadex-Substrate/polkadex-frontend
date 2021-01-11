import styled , { css } from 'styled-components'



export const CryptolistWrapper = styled.div`
display: flex;
padding-top:30px;
overflow-y: scroll;
height:95%;

flex-direction:column;

`
export const Currencynamerow = styled.div`
display:flex;
flex-direction: row;
flex-wrap: wrap;
width: 100%;
text-align: left;
letter-spacing: 0px;
color: #FFFFFF;
font-weight:400;
font-size:16px;
font-family: Work Sans,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
`;

export const CurrencyCoinValueColumn = styled.div`
display: flex;
flex-direction: column;
flex-basis: 100%;
flex: 1;
text-align: left;
font-weight:400;
font-family: Work Sans,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
letter-spacing: 0px;
color: #FFFFFF;

margin-right: 6px;
font-size: smaller;
`;

export const Currencyrow = styled.div`

width: 403px;
height: 46px;
opacity: 1;
display:flex;
justify-content:space-between
margin-top:20px;
margin-bottom:20px;
flex-direction: row;
flex-wrap: wrap;
width: 100%;
padding-left:2rem;

&:hover {
  border-left:3px solid #E6007A;
}
&:hover ${Currencynamerow}{
  color: #E6007A;
 
}
&:hover ${CurrencyCoinValueColumn}{
  color: #E6007A;
}
  
`;


export const Image = styled.img` 
width: 27px;
height: 27px;
background: transparent 0% 0% no-repeat padding-box;
opacity: 1;
`;
export const Imageiconwrapper = styled.div`
top: 508px;
left: 145px;

`;

export const Imagewrapper = styled.div`
top: 498px;
left: 135px;
width: 46px;
height: 46px;
padding-top:9px;
padding-left:9px;
background: #EBEEF4 0% 0% no-repeat padding-box;
border-radius: 111px;
opacity: 1;
margin-right:12px;
`;


export const currencynamecolumn = styled.div`
display: flex;
flex-direction: column;
flex-basis: 100%;
flex: 1;
`;


export const Currencyabbreviationrow = styled.div`
display:flex;
flex-direction: row;
flex-wrap: wrap;
width: 100%;
text-align: left;
font-weight:400;
font-size:16px;
font-family: Work Sans,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
letter-spacing: 0px;
color: #8BA1BE;
`;


export const currencyvaluecolumn = styled.div`
display: flex;
flex-direction: column;
flex-basis: 100%;
flex: 1;
text-align: left;
font-weight:400;
font-size:16px;
font-family: Work Sans,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
letter-spacing: 0px;
color: #FFFFFF;

`;


export const paddingright = styled.div`
  padding-right:20px;
`;

export const paddingleft = styled.div`
  padding-left:40px;
`;
export const WrapperImage = styled.div`
${({ theme }) => css`
  display: flex;
  align-items:center;
  justify-content: center;
  background: ${theme.colors.gray};
  border-radius: 0.5rem;
  width: 2rem;
	height: 2rem;

  :hover {
    opacity: 0.8;
  }
`}
`