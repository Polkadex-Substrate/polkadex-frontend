import styled, { css } from 'styled-components'
import { generateMedia } from 'styled-media-query'


const customMedia = generateMedia({
  custom: '1366px',
})

export const SwapBoxContainer = styled.div`
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
  padding-bottom:3rem;
`

export const SwapBoxWrapper = styled.div`
  width: 68%;
  height: 38rem;
  display:flex;
  flex-direction:column;
  justify-content: flex-start;
  align-items:center;
`

export const RowOne = styled.div`
  display: flex;
  background-color: #24252C;
  box-shadow: 0px 100px 99px #0000002C;
  border-radius: 20px 20px 0px 0px;
  width: 110%;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.5rem;
`

export const DropdownWrapper = styled.div`
  padding: 0 3rem 6px;
  
  span {
    font-size: 15px;
    font-family: Work Sans Medium;
  }
`

export const OrdersWrapper = styled.div`
`

export const OrdersBorder = styled.div`
  height: 6px;
  background-color: #0CA564;
  border-radius: 20px 20px 0px 0px;
`

export const TextWrapper = styled.div`
  padding: 1rem 4rem;
  font-size: 14px;
  font-family: Work Sans Medium;
`

export const RowTwo = styled.div`
  display:flex;
  flex-direction:row;
  height: 68%;
  background: #2E303C 0% 0% no-repeat padding-box;
  box-shadow: 0px 100px 99px #0000002C;
  border-radius: 0px 30px 30px 30px;
  opacity: 1;
  width:120%;
  z-index:1;
`

export const RowThree = styled.div`
  height:19%;
  display:flex;
  flex-direction:row;
  width:110%;
  justify-content:space-around;
  align-items:center;
  padding-left:1.5rem;
  padding-right:1.5rem;
  font-size:1.3rem;
  font-weight:300;
  font-family: Work Sans Medium;
  transition: transform 0.1s linear  ;
  &.Active{ 
    transform:translateY(-75px);
  }
  &.Not_Active{ 
    background: #24252C 0% 0% no-repeat padding-box;
    box-shadow: 0px 100px 99px #0000002C;
    border-radius: 0px 0px 20px 20px; 
    transform:translateY(0px);
  }
`

export const Image = styled.img`
  width:4%;
`

export const BottomRow = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-evenly;
  ${customMedia.lessThan('custom')`
    font-size:1rem;
  `}
  margin-top:2rem;
  padding-left:1rem;
  padding-right:1rem;
  transition: transform 0.1s linear;
  &.Active{ 
    transform: translateY(-120px);
  }
  &.Not_Active{ 
    transform: translateY(0px);
  }
`

export const Blur = styled.span`
  color: #FFFFFF50;   
  padding-left: 0.2rem;
  padding-right: 0.5rem;
  font-size: 12px;
`

export const BottomTextWrapper = styled.div`
   display: flex;
   align-items: center;
`

export const NoBlurText = styled.span`
  font-size: 13px;
  font-size: Work Sans Medium;
`

export const TextSpecialColor = styled.div`
  ${({theme}) => css`
    color: ${theme.colors.primary};    
  `}
  font-size: 13px;
  font-size: Work Sans Medium;
`

export const HelperIconImage = styled.img`
  width: 13px;
`
