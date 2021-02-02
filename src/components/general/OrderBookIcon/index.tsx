import * as S from './styles'

export type OrderBookProps = {
  icon: string
  filterState?: string
  handleChange: (name: string) => void
  active?:boolean
}
const OrderBookIcon = ({ icon, filterState, handleChange }: OrderBookProps) => {
  return (
    <S.Wrapper active={filterState === icon} onClick={() => handleChange(icon)}>
      <S.Image >
        <img src={`/img/icons/${icon}.svg`}  width="100%" height="100%" alt="Image"/>
        </S.Image>
    </S.Wrapper>
  )
}

export default OrderBookIcon
