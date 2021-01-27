import * as S from './styles'
import { useTheme,Theme } from 'Context/ThemeContext';

export type SearchInputProps = {
    placeholder: string
    type: string
    value: string
    setValue: any
    resize?:any
}

const SearchBar = ({placeholder, type, value, setValue, resize = "NotActive"}: SearchInputProps) => {
    const { theme, setTheme } = useTheme();
    return(
    <S.Wrapper>
        <S.Image src={"/img/icons/" + (theme === Theme.Light ? "searchLm" : "Search" )+ ".svg" } className={resize}/>
        <S.Input type={type} placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} />
    </S.Wrapper>)
}


export default SearchBar
