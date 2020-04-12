import React, { useEffect, useState } from "react";
import { firebase } from "../../services/firebase";

export const AuthContext = React.createContext({
  auth: {
    user: null,
  },
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(
      (user) => setUser(user),
      (error) => setUser(null)
    );
  }, []);

  return (
    <AuthContext.Provider value={{ auth: { user } }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
