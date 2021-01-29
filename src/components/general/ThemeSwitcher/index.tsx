import React from 'react'
import { Theme, useTheme } from '../../../Context/ThemeContext'
import Icon from '../Icon'

import * as S from './styles'

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const updateTheme = () => setTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark);

  return (
    <span>
        <S.WrapperIcon onClick={updateTheme}>
          <div>
            <Icon source={theme === Theme.Dark ? 'Sun' : 'moon'} size="Small" background="LightGray"/>
          </div>
          <S.SpanDark>Dark</S.SpanDark>
        </S.WrapperIcon>  
    </span>
  )
}

export default ThemeSwitcher
