import styled ,{css}from 'styled-components'

export const TextWrapper = styled.div`
    font-family: Work Sans Bold;
    font-size: 15px;
    margin-bottom: 2rem;
    ${({ theme }) => css`    
    color :${theme.colors.NormalWhite} 
    `} 
`

export const NormalTextWrapper = styled.div`
    margin-bottom: 4rem;
    font-size: 14px;
    line-height: 19px;
    ${({ theme }) => css`    
    color :${theme.colors.NormalWhite}; 
    font-weight: ${theme.font.normal};
    `}
`

export const QrHeading = styled.div`
    font-size: 15px;
    font-family: Work Sans Medium;
`

export const AddressWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2rem 0 4rem;
    
`

export const Image = styled.img`
    margin-right: 2rem;
`
