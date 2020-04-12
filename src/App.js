import React from "react";
import {
  ThemeProvider as ChakraThemeProvider,
  CSSReset,
  theme,
} from "@chakra-ui/core";
import { Global } from "@emotion/core";
import GlobalStyles from "./global.styles";
import AuthProvider from "./utils/context/AuthContext";
import SignIn from "./containers/login/Login";
import Home from "./containers/home/Home";
import Register from "./containers/register/Register.jsx";

import { Route, Switch } from "react-router-dom";
import base from "./theme/base";

function App() {
  return (
    <ChakraThemeProvider theme={base}>
      <CSSReset />
      <Global styles={GlobalStyles} />
      <AuthProvider>
        <Switch>
          <Route component={SignIn} exact path="/" />
          <Route component={Home} exact path="/app" />
          <Route component={Register} exact path="/register" />
        </Switch>
      </AuthProvider>
    </ChakraThemeProvider>
  );
}

export default App;
