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
import history from "./history";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";

import { firebase } from "./services/firebase";

function App() {
  const appHistory = useHistory();

  firebase.auth().onAuthStateChanged(
    (user) => {
      // TODO: go to app page if user
      console.log({ user });
    },
    (error) => {
      console.error(error);
    }
  );

  return (
    <ChakraThemeProvider theme={theme}>
      <CSSReset />
      <Global styles={GlobalStyles} />
      <Router history={history}>
        <AuthProvider>
          <Switch>
            <Route component={SignIn} exact path="/" />
            <Route component={Home} exact path="/app" />
            <Route component={Register} exact path="/register" />
          </Switch>
        </AuthProvider>
      </Router>
    </ChakraThemeProvider>
  );
}

export default App;
