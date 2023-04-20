import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, provider } from "../config";
import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();
const UserAddContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};
export const useAddUser = () => {
  return useContext(UserAddContext);
};

export function UserProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        // alert("logged in")
        setUser(firebaseUser);
        navigate("/");
      } else {
        // alert("logged out")
        navigate("/login");
      }
    });
  }, []);

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <UserContext.Provider value={user}>
      <UserAddContext.Provider value={handleClick}>
        {children}
      </UserAddContext.Provider>
    </UserContext.Provider>
  );
}
