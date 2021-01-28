import React from "react";
import { useTheme, Theme } from '../../../Context/ThemeContext';
import Icon from "../Icon";

import * as S from './styles'


const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const changeLocalStorage =()=>{
    if(theme === Theme.Dark)
    {localStorage.setItem('theme','light')
    setTheme(Theme.Light)
    }
    else
    {setTheme(Theme.Dark)
      localStorage.setItem('theme','dark')
    }
  }

  return (
    <span>
     
        <S.WrapperIcon onClick={changeLocalStorage}>
          <div>
            <Icon source={theme===Theme.Dark?"Sun":"moon"} size="Small" background="LightGray" />
          </div>
          <S.SpanDark>Dark</S.SpanDark>
        </S.WrapperIcon>  
    </span>

  )

}


export default ThemeSwitcher
