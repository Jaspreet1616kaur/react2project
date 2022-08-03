import { async } from "@firebase/util";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/config";

const AuthContext = createContext();
//3 Create provider

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const redirectTo = useNavigate();

  const register = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      console.log(user);
      redirectTo("/");
    } catch (error) {
      setUser(null);
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("erroMessage:>> ", errorMessage);
    }
  };
  const login = (email, password) => {
    // console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        // ...
        setUser(userCredential.user);
        redirectTo("/");
      })
      .catch((error) => {
        setUser(null);
        const errorCode = error.code;
        console.log("errorCode", typeof errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
        if (errorCode === "auth/user-not-found") {
          alert("please,  create an acount first");
        }
      });
  };
  const checkIfUserisLoggedIn = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
        setUser(user);
        setLoading(false);
      } else {
        // User is signed out
        setUser(null);
        setLoading(false);
      }
    });
  };
  useEffect(() => {
    checkIfUserisLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ setUser, register, login, user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContext, AuthContextProvider };
