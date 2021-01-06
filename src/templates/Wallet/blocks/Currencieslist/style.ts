import styled , { css } from 'styled-components'


export const Wrapper = styled.div`
display: block;
padding-top:30px;
`

export const Image = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 0.8rem;
`;

export const row1 = styled.div`
  display:flex;
  justify-content:space-between;
  
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