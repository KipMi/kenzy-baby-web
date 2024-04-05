"use client";

import { User } from "firebase/auth";
import { createContext, useContext, useState } from "react";

type AuthContextType = {
  currentUser: User | null;
  isAdmin: boolean;
  loginGoogle: () => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: any }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  function loginGoogle(): Promise<void> {
    return new Promise((resolve, reject) => {
      reject();
    });
  }

  function logout(): Promise<void> {
    return new Promise((resolve, reject) => {
      reject();
    });
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isAdmin,
        loginGoogle,
        logout,
      }}
    ></AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
