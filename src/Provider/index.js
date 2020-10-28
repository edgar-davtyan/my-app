import React, { useState } from "react";

export const LoginContext = React.createContext();

export const LoginProvider = ({ children }) => {
  const [login, setLogin] = useState(true);
  const loginHandler = () => setLogin(!login);

  return (
    <LoginContext.Provider
      value={{
        visible: login,
        loginHandler,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
