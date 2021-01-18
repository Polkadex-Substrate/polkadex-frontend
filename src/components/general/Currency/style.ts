import styled from 'styled-components'

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
    display: flex;
    justify-content: space-between;
    margin: 0.6rem 0;
    padding: 0 2rem;
    border-left: 4px solid ${({active}) => active ? '#E6007A' : '#242633'};
    cursor: pointer;
    font-size: 13px;
    font-weight: 400;
    
    &:hover {
      border-left: 4px solid #E6007A; 
      
        ${Name}, ${Value} {
          color: #E6007A;
        }
    }
`
