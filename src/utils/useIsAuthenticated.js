import { useContext } from "react";
import { AuthContext } from "../context/authContext";

function useIsAuthenticated() {
  const { user } = useContext(AuthContext);
  console.log("user in useIsAuth", user);
  const isAuthenticated = user !== null ? true : false;
  return isAuthenticated;
}

export default useIsAuthenticated;
