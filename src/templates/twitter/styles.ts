import styled, { css } from 'styled-components'

export const PolkaLogo = styled.div`  
  position: absolute;
  top: 2rem;
  left: 2rem;  
  cursor: pointer;
  
  img {
    width: 20%;
  }
`

export const ModalWrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
  background-color: #101213
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Heading = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-weight: bold;
    font-size: 39px;
    line-height: 43px;
    color: #FFFFFF;
    text-align: center;
  ` }
`

export const MessageWrapper = styled.div`
  display: flex;
`

export const MessageBox = styled.div`
  background: #E62065;
  color: #FFFFFF;
  padding: 3rem 2rem;
  border-radius: 1rem;
  margin: 3rem 1rem;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  align-items: flex-start;
  word-break: break-all;
  width: 350px;
  
  img {
    width: 30px;
    margin-right: 5px;
  }
`

export const ExternalMessageBox = styled.div`
  background: #00000000;
  color: #69697D;
  padding: 3rem 2rem;
  border: 1px solid #565662;
  border-radius: 1rem;
  margin: 3rem 1rem;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  align-items: flex-start;
  word-break: break-all;
  width: 350px;
  
  img {
    height: 17px;
    margin-right: 5px;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
`

export const Loader = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  p {
    font-size: 20px;
    font-weight: bold;
  }
  
  img {
    width: 100px;
    position: relative;
    top: -20px;
  }
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
  margin-left: 1rem;
  
  &:focus {
    outline: 0;
  }
  
  &:disabled {
    background: #787e82;
    cursor: not-allowed;
  }
`

export const BackButton = styled.div`
  display: inline-flex; 
  align-items: center; 
  justify-content: center; 
  cursor: pointer;
  padding: 0.6rem 1rem;
  color: white;
  border-radius: 4px;
  border: 1px solid #565662;
`

export const TwitterImage = styled.img`
  width: 20px; 
  margin-right: 0.5rem;
`

export const SocialIconWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  position: absolute;
  bottom: 2rem;
  // left: 50%;
  // transform: translateX(-50%);
`

export const Text = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin-right: 4rem;
`
