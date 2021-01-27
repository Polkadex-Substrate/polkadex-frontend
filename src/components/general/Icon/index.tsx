import * as S from './styles'

export type IconProps = {
  source: "Settings" | "Candles" | "Sun" | "Close" | "Graph" | "Options" | "Edit" | "Exchange" | "Exchange_B" |"Expand" | "Help" | "History" | "News" | "Notifications" | "Order" | "OrderAsc" | "OrderDesc" | "Search" | "Star" | "Transactions" | "Wallet" | "Swap" | "Swap2" | "Clock-green" | "Clock" | "Copy" | "Lock" | "ArrowRight" | "SettingsBlack" | "WalletBlack" | "LockBlack" | "Arrow_rightblack" | "GraphLm" | "ExchangeLm" | "WalletLm" | "NewsLm" | "NotificationLm" | "HelpLm" | "TransactionLm" | "HistoryLm" | "SearchLm"
  size?: "XSmall" | "Small" | "XMedium" | "Medium" | "Large" | "XtraLarge",
  background?: "DarkGray" | "LightGray" | "None" | "Primary" | "Gray" | "Black" | "WhiteThemeBackground",
  action?: () => void
}
const Icon = ({ source = "Settings", background = "DarkGray", size = "Medium", action}:IconProps) => (
  <S.Wrapper background={background} size={size} onClick={action}>
    <S.Image src={`/img/icons/${source}.svg`}  />
</S.Wrapper>
)

export default Icon
