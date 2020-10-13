import * as S from './styles'

export type IconProps = {
  source: "Settings" | "Candles" | "Close" | "Options" | "Edit" | "Exchange" | "Expand" | "Help" | "History" | "News" | "Notifications" | "Order" | "OrderAsc" | "OrderDesc" | "Search" | "Star" | "Transactions" | "Wallet"
  // size: "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge",
  background: "darkGray" | "lightGray" | "none" | "primary"
}
const Icon = ({ source = "Settings", background = "darkGray"}:IconProps) => (
  <S.Wrapper background={background}>
    <S.Image src={`/img/icons/${source}.svg`}  />
</S.Wrapper>
)

export default Icon
