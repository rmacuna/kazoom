import * as React from "react";
import useAuth from "../hooks/useAuth";
import { getStoredUserAuth } from "../../helpers/authHelper";
export const AuthContext = React.createContext({
  auth: {},
  setAuthStatus: () => {},
  setUnauthStatus: () => {},
});

const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const { auth, setAuthStatus, setUnauthStatus } = useAuth(getStoredUserAuth());
  return (
    <Provider value={{ auth, setAuthStatus, setUnauthStatus }}>
      {children}
    </Provider>
  );
};

export default AuthProvider;
