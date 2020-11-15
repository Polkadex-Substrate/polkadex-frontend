import { ThemeProvider } from "styled-components"
import GlobalStyles from "styles/global"
import theme from 'styles/theme'

export const parameters = {
  background: {
    default: 'dark-mode',
    values: [
      {
        name: 'dark-mode',
        value: theme.colors.darkGray
      },
      {
        name: 'light-mode',
        value: theme.colors.lightGray
      }
    ]
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles removeBg />
      <Story />
    </ThemeProvider>)
]
