'use client'

import {
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from '@mui/material/styles'
declare module '@mui/material/styles' {
  interface Palette {
    orange: Palette['primary'] //#FF7710
    lightGray: Palette['primary'] //#C5C5C5
    darkGray: Palette['primary'] //#585858
    black0: Palette['primary'] //#000000
    black1: Palette['primary'] //#111111
    black2: Palette['primary'] //#1F1F1F
    white: Palette['primary'] //#1A1A1A
  }
  interface PaletteOptions {
    orange?: PaletteOptions['primary']
    lightGray?: PaletteOptions['primary']
    darkGray?: PaletteOptions['primary']
    black0?: PaletteOptions['primary']
    black1?: PaletteOptions['primary']
    black2?: PaletteOptions['primary']
    white?: PaletteOptions['primary']
  }
}

const MuiThemeProvider = ({ children }: { children: React.ReactNode }) => {
  let theme = createTheme()

  theme = createTheme({
    palette: {
      orange: { main: '#FF7710' },
      lightGray: { main: '#C5C5C5' },
      darkGray: { main: '#585858' },
      black0: { main: '#000000' },
      black1: { main: '#111111' },
      black2: { main: '#1F1F1F' },
      white: { main: '#1A1A1A' },
      primary: { main: '#FF7710' },
    },
  })

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledEngineProvider>
  )
}

export default MuiThemeProvider
