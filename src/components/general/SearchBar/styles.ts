import styled from 'styled-components'

export const Wrapper = styled.div`
    border-bottom: 0.5px solid #C6D2E5;
    display: flex;
    color: #C6D2E5;
    width: 100%;
`

export const Image = styled.img`
    color: #C6D2E5;
    margin-right: 10px;
    &.Active{
     height:1.2rem;   
    }
    &.NotActive{
        height: 1.9rem;
        margin-top: 1rem;
    }
`

export const Input = styled.input`
    text-align: left;
    font-family: Work Sans Medium;
    font-size: 13px;
    letter-spacing: 0;
    color: #fff;
    padding-bottom: 5px;
    width: 100%;
`

