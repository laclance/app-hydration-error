"use client";

import { ReactNode, createContext, useState } from "react";
import { useRouter } from "next/navigation";
import { getInitializer, storeState } from "./utils";

export const authContext = createContext({
  loggedIn: false,
  login: () => {
    //nothing
  },
  logout: () => {
    //nothing
  },
});

export default function AuthContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [loggedIn, setLoggedIn] = useState<boolean>(
    getInitializer("LoggedinState", false)
  );
  storeState("LoggedinState", loggedIn);
  const router = useRouter();

  return (
    <authContext.Provider
      value={{
        loggedIn,
        login: () => {
          setLoggedIn(true);
          router.replace("/");
        },
        logout: () => {
          setLoggedIn(false);
          router.replace("/login/");
        },
      }}
    >
      {children}
    </authContext.Provider>
  );
}
