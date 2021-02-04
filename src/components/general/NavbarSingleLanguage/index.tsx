import * as S from './styles'
export type SingleLanguageProps = {
  title: string
  flag: string
}
const NavbarSingleLanguage = ({ title="English", flag="EN"}:SingleLanguageProps) => (
  <S.WrapperSingleLanguage onClick={()=> console.log("Change Language to", flag) }>
    <S.Image src={`/img/languages/${flag}.svg` } alt="Flag icon" />
    <S.Title>
      {title}
    </S.Title>
  </S.WrapperSingleLanguage>
)

export default NavbarSingleLanguage
