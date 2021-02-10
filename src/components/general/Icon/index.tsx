import * as S from './styles'

export type IconProps = {
  source: "Settings" | "Candles" | "Sun" | "Close" | "Graph" | "Options" | "Edit" | "EditBlack" | "Exchange" | "ExchangeDark" | "Exchange_B" |"Expand" | "ExpandDark" | "Help" | "History" | "News" | "Notifications" | "Order" | "OrderAsc" | "OrderDesc" | "Search" | "Star" | "Transactions" | "TransactionsBlack" | "Wallet" | "Swap" | "Swap2" | "Clock-green" | "Clock" | "Copy" | "Lock" | "ArrowRight" | "SettingsBlack" | "WalletBlack" | "LockBlack" | "Arrow_rightblack" | "GraphLm" | "ExchangeLm" | "WalletLm" | "NewsLm" | "NotificationLm" | "HelpLm" | "TransactionLm" | "HistoryLm" | "SearchLm" | "moon"
  size?: "XSmall" | "Small" | "XMedium" | "Medium" | "Large" | "XtraLarge",
  background?: "DarkGray" | "LightGray" | "None" | "Primary" | "Gray" | "Black" | "WhiteThemeBackground",
  action?: () => void
}
const Icon = ({ source = "Settings", background = "DarkGray", size = "Medium", action}:IconProps) => (
  <S.Wrapper background={background} size={size} onClick={action}>
    <img width="100%" height= "100%" src={`/img/icons/${source}.svg`} alt={source} />
</S.Wrapper>
)

export default Icon
