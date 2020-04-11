import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  ThemeProvider as ChakraThemeProvider,
  CSSReset,
  theme,
} from "@chakra-ui/core";
import { Global } from "@emotion/core";
import GlobalStyles from "./global.styles";
import { AuthContext } from "./utils/context/AuthContext";
import SignIn from "./containers/login/Login";

function App() {
  return (
    <ChakraThemeProvider theme={theme}>
      <CSSReset />
      <Global styles={GlobalStyles} />
      <AuthContext>
        <Switch>
          <Route component={SignIn} exact path="/" />
        </Switch>
      </AuthContext>
    </ChakraThemeProvider>
  );
}

export default App;
