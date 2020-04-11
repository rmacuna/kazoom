import React, { useEffect } from "react";
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

import { Route, Switch, useHistory } from "react-router-dom";

import { firebase } from "./services/firebase";

function App() {
  const appHistory = useHistory();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(
      (user) => {
        console.log({ user });
        appHistory.push(user ? "/app" : "");
      },
      (error) => {
        console.error(error);
      }
    );

    return () => {};
  }, []);

  return (
    <ChakraThemeProvider theme={theme}>
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
