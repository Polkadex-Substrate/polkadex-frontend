import * as S from './styles'

export type LogoProps = {
  source?: string
  size?: 'Small' | 'Medium' | 'Large'
  href?: string
}
const Logo = ({ source = 'img/Logo.svg', href='#', size = 'Small' }: LogoProps) => (
  <S.Link href={href}>
    <S.Image size={size} src={source} />
  </S.Link>

)

export default Logo
