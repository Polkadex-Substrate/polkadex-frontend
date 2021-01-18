import * as S from './styles'

export type SearchInputProps = {
    placeholder: string
    type: string
    value: string
    setValue: any
}
const SearchBar = ({placeholder, type, value, setValue}: SearchInputProps) => (
    <S.Wrapper>
        <S.Image src="/img/icons/Search.svg" />
        <S.Input type={type} placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} />
    </S.Wrapper>
)

export default SearchBar
