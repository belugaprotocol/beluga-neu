import React from 'react'

import {
  Box,
  createTheme,
  ThemeProvider,
} from 'beluga-neu'

import DarkModeSwitch from './components/DarkModeSwitch'

import Home from './views/Home'

const App = () => {
  const { dark: darkTheme, light: lightTheme } = createTheme({
    baseColor: { h: 338, s: 100, l: 41 },
    //baseGreyColorDark: { h: 217, s: 19, l: 22 },
    borderRadius: 28,
  })

  return (
    <ThemeProvider darkTheme={darkTheme} lightTheme={lightTheme}>
      adsfasdf
      <Box
        alignItems="center"
        height={72}
        justifyContent="center"
        row
      >
        <DarkModeSwitch />
      </Box>
      <Home />
    </ThemeProvider>
  )
}

export default App
