import React from "react";
import { useTheme, Theme } from '../../../Context/ThemeContext';
import Icon from "../Icon";

import * as S from './styles'


const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <span>
     
        <S.WrapperIcon onClick={() => theme === Theme.Dark ?setTheme(Theme.Light): setTheme(Theme.Dark)}>
          <div>
            <Icon source="Sun" size="Small" background="LightGray" />
          </div>
          <S.SpanDark>Dark</S.SpanDark>
        </S.WrapperIcon>  
    </span>

  )

}


export default ThemeSwitcher
