import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  custom: '1199px'
})

export const LeftWrapper = styled.div`
  width: 30vw;
  padding: 2rem 3rem;
  background-color: #1C1C25;
  flex: 1 1 0;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
`

export const PolkaLogo = styled.img`
  width: 100%;
  margin-bottom: 2rem;
`

export const ScheduleHeading = styled.div`
  font-weight: bold;
  font-size: 17px;
  margin: 2rem 0;
`

export const ReleasePoints = styled.div`
  line-height: 2.75rem;
`

export const PointWrapper = styled.div`
`

export const Number = styled.span`
  color: #E60079;
  font-size: 14px;
  margin-right: 0.5rem;
`

export const Copyright = styled.div`
  color: #3F3F5E;
  font-size: 14px;
  text-align: center;
  line-height: 22px;
`

export const ContentWrapper = styled.div`
  flex: 3 1 0;
  padding: 8rem 5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`

export const DisclaimerWrapper = styled.div``

export const ContentHeading = styled.div`
  font-size: 25px;
  font-weight: 800;
  line-height: 29px;
`

export const Content = styled.div`
  color: #9C9C9C;
  font-size: 16px;
  line-height: 26px;
  margin: 2rem 0;
`

export const Account = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const AccountHeading = styled.div`
  font-size: 22px;
  font-weight: 800;
  line-height: 29px;
  margin-right: 1rem;
`

export const AccountMessage = styled.div`
  padding: 0.5rem 0.5rem 0 2rem;
  font-size: 16px;
  
  a {
    text-decoration: underline;
    color: #E60079;
  }
`

export const DropdownWrapperWithErrorMessage = styled.div`
  
`

export const DropdownWrapper = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 29px;
  margin-right: 1rem;
  padding: 0 0.5rem 0 2rem;
  display: flex;
`

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const LoginButton = styled.button`
  background-color: #E60079;
  padding: 1.25rem 2rem;
  color: white;
  border-radius: 5px;
  font-size: 14px;
  margin-bottom: 2rem;
  cursor: pointer;
  
  &:focus {
    outline: 0;
  }
`

export const ExplorerButton = styled.button`
  background-color: #E60079;
  padding: 1.25rem 2rem;
  color: white;
  border-radius: 5px;
  font-size: 14px;
  margin-bottom: 2rem;
  cursor: pointer;
  width: 100%;
  
  &:focus {
    outline: 0;
  }
`

export const TweetButton = styled.button`
  background-color: #1DA1F2;
  padding: 1.25rem 2rem;
  color: white;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  
  &:focus {
    outline: 0;
  }
  
  &:disabled {
    cursor: not-allowed;
  }
`

export const SocialLinks = styled.div` 
`

export const Warning = styled.div`
  ${customMedia.greaterThan('custom')`
    display: none;
  `}
  
  ${customMedia.lessThan('custom')`
    display: block;
  `}
`;

export const Page = styled.div`
  ${customMedia.greaterThan('custom')`
    display: block;
  `}
  
  ${customMedia.lessThan('custom')`
    display: none;
  `}
`;

