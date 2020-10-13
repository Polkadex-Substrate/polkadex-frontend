import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
`

export const Title = styled.span`
  margin-right:0.5rem;
`

export const WrapperImage = styled.div`
${({ theme }) => css`
  display: flex;
  align-items:center;
  justify-content: center;
  background: ${theme.colors.darkGray};
  border-radius: 0.5rem;
  width: 2rem;
	height: 2rem;

  :hover {
    opacity: 0.8;
  }
`}
`

export const Image = styled.img`
  width: 0.8rem;
`
