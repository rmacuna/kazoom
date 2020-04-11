import React from "react";
import {
  ThemeProvider as ChakraThemeProvider,
  ColorModeProvider,
  useColorMode,
  CSSReset,
  theme
} from "@chakra-ui/core";
import { Global } from "@emotion/core";
import GlobalStyles from './global.styles'
import { AuthContextProvider } from './utils/context/AuthContext'


function App() {
  return (
    <ChakraThemeProvider theme={theme}>
      <CSSReset />
      <Global styles={GlobalStyles} />
      <AuthContextProvider>
        <RenderRoutes routes={routes} />
      </AuthContextProvider>
    </ChakraThemeProvider>
  );
}

export default App;
