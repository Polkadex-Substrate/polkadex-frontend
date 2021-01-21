import * as S from './styles'

export type SearchInputProps = {
    placeholder: string
    type: string
    value: string
    setValue: any
    resize?:any
}

const SearchBar = ({placeholder, type, value, setValue, resize = "NotActive"}: SearchInputProps) => (
    <S.Wrapper>
        <S.Image src="/img/icons/Search.svg"  className={resize}/>
        <S.Input type={type} placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} />
    </S.Wrapper>
)

export default SearchBar
