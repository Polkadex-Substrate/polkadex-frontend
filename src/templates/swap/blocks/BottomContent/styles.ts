import styled, { css } from 'styled-components'

type Props = {
  isAccordionActive: boolean
}

export const BottomContentWrapper = styled.div`
  display:flex;
  flex-direction:row;
  width:100%;
  min-height:110vh;
  background-color: #1C2023;
  align-items: flex-end;
  padding-top: 8rem;
`

export const LeftColumn = styled.div`
  display:flex;
  flex-direction:column;
  height:100%;
  justify-content:flex-end;
  margin-left:1.2rem;
  padding-bottom:1.3rem;
  flex:1;
`

export const LabelWithIcon = styled.div`
  display:flex;    
  width: 200px;
  padding: 1rem 0;
  background: #2E303C 0% 0% no-repeat padding-box;
  border-radius: 7px;
  align-items:center;
  justify-content:flex-start;
  padding-left:0.8rem;
  font-size:14px;
  font-family: Work Sans Medium;    
  line-spacing:20px;
`
export const IconWrapper = styled.div`
    padding-right:1rem;    
`
export const IconColumn = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  margin-bottom:1rem;
`

export const Marginbottom= styled.div`
  margin-bottom:1rem;
`

export const MiddleColumn = styled.div`
  display:flex;
  align-self: stretch;
  flex-direction: column;
  flex:3;
  position: relative;
  transition: all 0.5s;
  
  &.accordion {
    &.btn {
      width: 100%;
      padding: 0;
      color: white;
      
      &:focus {
        outline: 0;
        text-decoration: none;
      }
    }
  }
`

export const BottomLabel = styled.div<Props>`
  padding: 1.5rem;
  ${({isAccordionActive}) => css`  
    background-color: ${isAccordionActive ? '#24252C' : '#2E303C'};    
  `}
  box-shadow: 0px 100px 99px #0000002C;
  border-radius: 12px 12px 0px 0px;
  justify-content:center;
  align-items:center;
  font-size:14px;
  font-family: Work Sans Medium;
  line-spacing:20px;
  width: 90%;
  margin: auto;
`

export const BottomTextWrapper = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-evenly; 
  width:17rem;
  cursor: pointer;
  margin: auto;
  
  &:focus {
    outline: 0;
  }
`

export const Image = styled.img`
  width:10%;
`

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  margin-left: 1.2rem;
  padding-bottom: 2rem;
  flex: 1;
`

export const BottomRightContentWrapper = styled.div`
  display:flex;
  flex-direction:row;
  padding-left:12rem;
  align-items:center;
`

export const BottomColor = styled.div`
  width: 10px;
  height: 10px;
  margin-right:1.5rem;
  background: #0CA564 0% 0% no-repeat padding-box;
  border-radius: 20px;
`

export const WrapperGraph = styled.div`
  display: flex;
  position: relative;
`;

export const Button = styled.div``

export const Overlay = styled.div<any>`
  ${({isModalOpen}) => isModalOpen && css`
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #00000050;
    box-shadow: 0px 100px 99px #0000002C;
  `}
`
