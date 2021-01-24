import styled, { css } from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
    custom: '1199px',
})
export const WalletWrapper = styled.main`
    display: flex;
    height: 100vh;
    overflow-y: hidden;
    margin: 0 auto;
    box-shadow: 0px -36px 99px rgba(0, 0, 0, 0.5);
    ${customMedia.lessThan('custom')`
        display: none;
    `}
`
export const WalletWrapperMain = styled.div`
    overflow-y: auto;
    width: 100%;
    padding: 0 1rem 0 2rem;
`
export const BottomContentWrapper = styled.div`
    display: flex;
    height: 750px;
    margin: 5rem 0 2rem;
    align-items: flex-end;
`
