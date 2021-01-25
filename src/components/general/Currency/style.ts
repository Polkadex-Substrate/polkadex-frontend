import styled, { css } from 'styled-components'
import { RowProps } from './index'

export const DetailsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ImageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.6rem;
    background-color: #EBEEF4;
    border-radius: 50%;
    margin-right: 1rem;
`

export const Image = styled.img` 
    width: 27px;
    height: 27px;

`
export const ImageWrapper2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-right: 1rem;
    border:2px solid #000;
`

export const Image2 = styled.img` 
    width: 32px;
    height: 32px;
`

export const NameWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const Name = styled.div`
    margin-bottom: 0.25rem;
`

export const Type = styled.div`
    font-size: 1.4rem;
    color: #8BA1BE;
`

export const ValueWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const Value = styled.div`
    letter-spacing: 0;
    margin-right: 1rem;
`

export const Row = styled.div<RowProps>`
  ${({ active, theme ,displayValue}) => css`
    display: flex;
    justify-content: space-between;
    margin: 0.6rem 0;
    padding: 0 2rem;
    ${displayValue && css`
    border-left: 4px solid ${active ? '#E6007A' : theme.colors.componentbackground};
    `}
    cursor: pointer;
    font-size: 13px;
    font-weight: ${theme.font.normal};
    
    ${active && css`
      ${Name}, ${Value} {
        color: ${theme.colors.primary};
      }
    `}
    
    &:hover {

      ${displayValue && css`
      border-left: 4px solid ${theme.colors.primary}; 
      
        ${Name}, ${Value} {
          color: ${theme.colors.primary};
        }
        `}
    }
  `}
`