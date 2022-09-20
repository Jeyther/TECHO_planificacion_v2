import { createContext, useContext, useMemo, useState } from 'react'
import { ThemeProvider, StyledEngineProvider, CssBaseline, createTheme } from '@mui/material'
import colorStyles from 'assets/styles/colorStyles';
// import { createTheme } from '@mui/material/styles'

export const useThemeContext = () => useContext(ThemeContext);

const ThemeContext = createContext({});

export default function Theme({ children }) {

  const [mode, setMode] = useState('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(() =>

    createTheme({

      palette: {
        mode,
        primary: {
          main: colorStyles.azul
        },
        secondary: {
          main: colorStyles.naranja
        },
        ...(mode === 'dark' ? {
          background: {
            default: colorStyles.negro,
            paper: '#424242'
          }
        } : {
          background: {
            default: colorStyles.gris
          }
        })
      },
      typography: {
        fontFamily: "'Work Sans', 'Arial', sans-serif",
        h1: {
          color: (mode === 'light' && colorStyles.azul_oscuro),
          fontSize: '50px',
          fontWeight: 'bold'
        },
        h2: {
          fontSize: '20px',
          fontWeight: 'bold'
        },
        subtitle1: {
          fontSize: '30px',
          fontWeight: 'lighter'
        },
        subtitle2: {
          fontSize: '20px',
          fontWeight: 600
        },
        body1: {
          fontSize: '18px',
          fontWeight: 'lighter'
        },

      },
      components: {
        MuiButtonBase: {
          defaultProps: {
            disableRipple: true,
          },
        },
      },
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1688,
        },
      },

    }), [mode]

  );

  return (
    <StyledEngineProvider injectFirst>
      <ThemeContext.Provider value={{ colorMode, theme }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ThemeContext.Provider>
    </StyledEngineProvider>
  )
}

