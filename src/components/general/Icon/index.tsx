import * as S from './styles'

export type IconProps = {
  source: "Settings" | "Candles" | "Sun" | "Close" | "Graph" | "Options" | "Edit" | "Exchange" | "Expand" | "Help" | "History" | "News" | "Notifications" | "Order" | "OrderAsc" | "OrderDesc" | "Search" | "Star" | "Transactions" | "Wallet" | "Clock-green" | "Clock"
  size?: "XSmall" | "Small" | "Medium" | "Large",
  background?: "DarkGray" | "LightGray" | "None" | "Primary" | "Gray"
  action?: () => void
}
const Icon = ({ source = "Settings", background = "DarkGray", size = "Medium", action}:IconProps) => (
  <S.Wrapper background={background} size={size} onClick={action}>
    <S.Image src={`/img/icons/${source}.svg`}  />
</S.Wrapper>
)

export default Icon
