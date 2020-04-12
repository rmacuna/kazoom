import * as React from "react";

const useAuth = (initialState) => {
  const [auth, setAuth] = React.useState(initialState);

  const setAuthStatus = (userAuth) => {
    window.localStorage.setItem("UserAuth", JSON.stringify(userAuth));
    setAuth(userAuth);
  };

  const setUnauthStatus = () => {
    window.localStorage.clear();
    setAuth(null);
  };

  return {
    auth,
    setAuthStatus,
    setUnauthStatus,
  };
};
export default useAuth;