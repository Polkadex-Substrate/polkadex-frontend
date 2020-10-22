import * as S from './styles'
export type CheckboxPropx = {
  title: string
  checked?: boolean
}

const Checkbox = ({ title }: CheckboxPropx) => (
  <S.Label>
    <S.Input type="checkbox"/>
    <S.Span></S.Span>
    <S.Title>{title}</S.Title>

  </S.Label>
)

export default Checkbox
