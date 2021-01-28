import styled,{css} from 'styled-components'

export const Wrapper = styled.a`
  font-size: 1.2rem;
  ${({ theme }) => css`
  font-weight: ${theme.font.normal};
  color :${theme.colors.normalWhite} 
  `} 
  &:hover {
    opacity:0.6;
  }
`
