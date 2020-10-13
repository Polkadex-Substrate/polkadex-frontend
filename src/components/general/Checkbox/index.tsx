import * as S from './styles'
export type CheckboxPropx = {
  title: string
}

const Checkbox = ({ title }) => (
  <S.Wrapper>
    <S.Input type="checkbox" />
    <S.Label>{title}</S.Label>
  </S.Wrapper>
)

export default Checkbox
