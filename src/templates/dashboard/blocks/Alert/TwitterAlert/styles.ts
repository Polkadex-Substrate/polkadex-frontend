import styled, { css } from 'styled-components'

export const Close = styled.div`
  position: fixed;
  top: 1.5rem;
  left: 2rem;
  font-size: 3rem;
`

export const ModalWrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
  background: rgb(52,52,52);
  background: linear-gradient(214deg, rgba(52,52,52,1) 0%, rgba(79,46,63,1) 100%);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Heading = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: 4rem;
    font-weight: bold;
  ` }
`

export const MessageWrapper = styled.div`
  background: #00000080;
  color: rgb(47,128,237);
  padding: 3rem;
  border-radius: 1rem;
  margin: 3rem 0;
  font-size: 2rem;
  line-height: 3rem;
`

export const TwitterButton = styled.a`
  display: inline-flex; 
  align-items: center; 
  justify-content: center; 
  cursor: pointer;
  padding: 0.6rem 1rem;
  background: #1b95e0;
  color: white;
  border-radius: 4px;
`

export const TwitterImage = styled.img`
  width: 20px; 
  margin-right: 0.5rem;
`

export const DopeButton = styled.a`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    margin-top: 6rem;
    width: 100%;
    padding: 2rem;
    border-radius: 2rem;
    text-align: center;
    font-size: 2rem;
  ` }
`
