'use client'

import { Css } from '@mui/icons-material'
import { CssBaseline } from '@mui/material'
import {
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from '@mui/material/styles'
declare module '@mui/material/styles' {
  interface TypographyVariants {
    Title1Emphasis: React.CSSProperties
    Title1: React.CSSProperties
    Title2Emphasis: React.CSSProperties
    Title2: React.CSSProperties
    Title3Emphasis: React.CSSProperties
    Title3: React.CSSProperties
    Body1Emphasis: React.CSSProperties
    Body1: React.CSSProperties
    Body2Emphasis: React.CSSProperties
    Body2: React.CSSProperties
    CaptionEmphasis: React.CSSProperties
    Caption: React.CSSProperties
    Tag: React.CSSProperties
  }

  interface TypographyVariantsOptions {
    Title1Emphasis?: React.CSSProperties
    Title1?: React.CSSProperties
    Title2Emphasis?: React.CSSProperties
    Title2?: React.CSSProperties
    Title3Emphasis?: React.CSSProperties
    Title3?: React.CSSProperties
    Body1Emphasis?: React.CSSProperties
    Body1?: React.CSSProperties
    Body2Emphasis?: React.CSSProperties
    Body2?: React.CSSProperties
    CaptionEmphasis?: React.CSSProperties
    Caption?: React.CSSProperties
    Tag?: React.CSSProperties
  }
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
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: '#111',
          },
        },
      },
    },
  })

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        {/* <CssBaseline /> */}
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default MuiThemeProvider
