import styled, { css } from 'styled-components'

export const Header = styled.div`
    display: flex;
    margin-bottom: 4rem; 
    align-items: center;
    justify-content: space-between;
    ${({ theme }) => css`
        font-weight: ${theme.font.normal};
        color :${theme.colors.NormalWhite} 
        `} 
`

export const SymbolWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 30%;
    flex: 1.25;
`

export const AvailableWrapper = styled.div`
    display: flex;
    align-items: center;
    flex: 1.5;
`

export const LockedWrapper = styled.div`
    display: flex;
    align-items: center;
    flex: 0.6;
`

export const ImageWrapper = styled.div`
    width: 55px;
    height: 55px;
    padding: 1rem;
    background-color: #EBEEF4;
    border-radius: 50%;
    display: flex;
    align-items: center;
`

export const Image = styled.img` 
    width: 35px;
    height: 35px;
`

export const InnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    ${({ theme }) => css`
    font-weight: ${theme.font.normal};
    color :${theme.colors.NormalWhite} 
    `} 
`

export const Name = styled.span`
    font-size: 20px;
    margin-bottom: 0.25rem;
    ${({ theme }) => css`
    font-weight: ${theme.font.normal};
    color :${theme.colors.NormalWhite} 
    `} 
`

export const Type = styled.span`
    color: #8BA1BE;
    font-size: 16px;
    
`

export const ContentHeading = styled.span`
    font-size: 13px;
    color: #8BA1BE;
    margin-bottom: 0.25rem;
`

export const Value = styled.span`
    font-size: 21px;
`

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
`

export const AmountExchangeWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between; 
    margin-top: 1rem;
`

export const IconWrapper = styled.div`
    opacity: 0.4;
    margin: 0 1.5rem;
`

export const TextWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1rem 0 2rem;
    font-size: 13px;
`

export const Blur = styled.span`
    color: #8BA1BE;
`

export const DisclaimerWrapper = styled.div`
    font-size: 13px;
    text-align: center;
    margin-top: 8rem;
`

export const Disclaimer = styled.div`
    font-size: 12px;
    color: #6780A2;
    margin-top: 1.5rem;
`
