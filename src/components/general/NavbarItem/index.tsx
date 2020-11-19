import React from 'react';
import * as S from './styles'

export type NavbarItemPops = {
  label?: string
  info?: string
}
const NavbarItem = ({label, info, type}: NavbarItemPops) => (
<S.Wrapper>
  <S.Label>
    {label}
  </S.Label>
  {
    type ?
      (
        type === 'AskLimit'
          ? <S.VolumeLow>
            <S.Info>
              {info}
            </S.Info>
          </S.VolumeLow>
          : <S.VolumeHigh>
            <S.Info>
              {info}
            </S.Info>
          </S.VolumeHigh>
      )
      : <S.Info>
        {info}
      </S.Info>
  }
</S.Wrapper>
)

export default NavbarItem
