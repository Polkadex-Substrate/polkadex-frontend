import React from "react";
import { useTheme, Theme } from '../../../Context/ThemeContext';
import Icon from "../Icon";

import * as S from './styles'


const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <span>
      { theme == Theme.Dark
        ?
        <S.WrapperIcon onClick={() => setTheme(Theme.Light)}>
          <div>
            <Icon source="Sun" size="Small" background="LightGray" />
          </div>
          <S.SpanDark>Dark</S.SpanDark>
        </S.WrapperIcon>
        :
        <S.WrapperIcon onClick={() => setTheme(Theme.Dark)}>
          <div>
            <Icon source="Sun" size="Small" background="LightGray" />
          </div>
          <S.SpanLight>Light</S.SpanLight>
        </S.WrapperIcon>
      }

    </span>

  )

}


export default ThemeSwitcher
