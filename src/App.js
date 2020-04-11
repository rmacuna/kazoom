import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  ThemeProvider as ChakraThemeProvider,
  CSSReset,
  theme,
} from "@chakra-ui/core";
import { Global } from "@emotion/core";
import GlobalStyles from "./global.styles";
import  AuthProvider from "./utils/context/AuthContext";
import SignIn from "./containers/login/Login";
import Register from "./containers/register/Register.jsx"

function App() {
  return (
    <ChakraThemeProvider theme={theme}>
      <CSSReset />
      <Global styles={GlobalStyles} />
      <AuthProvider>
        <Switch>
          <Route component={SignIn} exact path="/" />
          <Route component={Register} exact path="/register"/>
        </Switch>
      </AuthProvider>
    </ChakraThemeProvider>
  );
}

export default App;
