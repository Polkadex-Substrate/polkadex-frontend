import * as S from './styles'

export type IconProps = {
  source: "Settings" | "Candles" | "Close" | "Options" | "Edit" | "Exchange" | "Expand" | "Help" | "History" | "News" | "Notifications" | "Order" | "OrderAsc" | "OrderDesc" | "Search" | "Star" | "Transactions" | "Wallet"
  size?: "Small" | "Medium" | "Large",
  background?: "DarkGray" | "LightGray" | "None" | "Primary"
}
const Icon = ({ source = "Settings", background = "DarkGray", size = "Medium"}:IconProps) => (
  <S.Wrapper background={background} size={size} >
    <S.Image src={`/img/icons/${source}.svg`}  />
</S.Wrapper>
)

export default Icon
