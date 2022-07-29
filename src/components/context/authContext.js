import { createContext, useState } from "react";

const AuthContext = createContext();
//3 Create provider

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  //4move stae and function

  const value = {
    user,
    setUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export { AuthContext, AuthContextProvider };
