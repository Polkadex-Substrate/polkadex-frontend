import styled , { css } from 'styled-components'

export const ContentHeading = styled.div`
  font-size: 52px;
  font-family: Work Sans ExtraBold;
  ${({ theme }) => css`
    color: ${theme.colors.normalWhite}
  `}
`
export const ContentBlur = styled.div`
  font-size: 25px;
  margin-bottom: 8px;
  color: #8BA1BE;
`
export const BalanceHeaderWrapper = styled.div`
  padding-top: 6rem;
  text-align: center;
`;
