import styled , { css } from 'styled-components';



export const Wrapper = styled.div`
  background-color:#242633;
  border-radius: 0 3rem 3rem 3rem;
  width: 96%;
  padding: 2rem 0 3rem 2rem;
  box-shadow: 0px 0px 99px rgba(0, 0, 0, 0.65);  
  height:70.25rem;

 
  
  `

  export const Header = styled.div`
  display:flex;
  flex-direction: row;
  margin-top:4rem; 
  align-items:center;
  justify-content:space-between

  `

  export const Imagewrapper = styled.div`
 
  width: 60px;
  height: 60px;
  padding-top:1.2rem;
  padding-left:1.2rem;
  background: #EBEEF4 0% 0% no-repeat padding-box;
  border-radius: 111px;
  opacity: 1;
  margin-right:1rem;
  align-item:center;
  `;

export const Image = styled.img` 
  width: 35px;
  height: 35px;
  background: transparent 0% 0% no-repeat padding-box;
  opacity: 1;

  `;

export const Imagetitlewrapper = styled.div`
  display:flex;
  flex-direction:column;
`;

export const Spantext = styled.span`
text-align: left;
font-weight:500;
font-family: Work Sans,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
letter-spacing: 0px;
color: #FFFFFF;
opacity: 1;
font-size: x-large
`;

export const Spantextblur = styled.span`
text-align: left;
font-weight:500;
font-family: Work Sans,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
letter-spacing: 0px;
color: #8BA1BE;
font-size: large;
`;


export const ContainerWallet = styled.div`
  display:flex;
  flex-direction: row;
  align-items:center;
  margin-bottom: 2.5rem;
  `;


 export const leftconnercolumn = styled.div`
 display:flex;
 flex-direction: row;
 align-items:center;
 padding-left:1rem;
 ` 

 export const middlecolumn = styled.div`
 display:flex;
 flex-direction: row;
 ` 

 export const rightconnercolumn = styled.div`
 display:flex;
 flex-direction: row;
 align-items:center;
 margin-right:5rem;
 ` 

 export const WrapperBalance = styled.div`
  display:flex;
  flex-direction:column;
  margin-left: 1rem;
  color: #8BA1BE;
 
`;
export const Span = styled.span`
  font-size:2rem;
  font-weight:500;
  font-family: Work Sans,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
  color: #ffffff;
`;

export const ContainerForm = styled.div`
  color: #DCF307;
  margin-top:2rem;
  padding-left:2rem;
  width:90%  
  margin-bottom:5rem;
  padding-right:3rem;
`;

export const WrapperActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  align-items:center;
  font-size: 1.2rem;
  color: #8BA1BE;
  span{
    color:white;
  }
`;

export const AmountExchangeWrapper = styled.div`
display:flex;
flex-direction: row;
align-items:center;
justify-content:space-between; 
margin-top:3rem;
width:100%;
`;

export const IconWrapper = styled.div`
opacity: 0.4;
margin-left:1.6rem;
margin-right:1.6rem;

`
export const TextWrapper = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
margin-bottom:3rem;
margin-top:3rem;
font-weight:500;
font-family: Work Sans,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
font-size:1.2rem;
color:white
`

export const blur = styled.span`
color: #8BA1BE;
font-weight:500;
font-family: Work Sans,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
`

export const textcenterwrapper = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-item:center;
color:white;
margin-top:7rem;
margin-bottom:1rem;
font-weight:500;
font-family: Work Sans,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
`


export const textnewwrapper = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-item:center;
color:white;
margin-top:1rem;
text-align: center;
margin-bottom:3rem;

`

