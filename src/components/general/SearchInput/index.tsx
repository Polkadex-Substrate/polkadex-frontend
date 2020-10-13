import * as S from './styles'

export type SearchInputProps = {
    placeholder: string
    type: string
}
const SearchInput = (props:SearchInputProps) => (
<S.Wrapper>
    <S.Image src="/img/icons/Search.svg" />
    <S.Input {...props}/>
</S.Wrapper>
)

export default SearchInput
