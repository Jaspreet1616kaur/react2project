//1import hook
import { createContext, useState } from "react";
//2.create Context/store
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
