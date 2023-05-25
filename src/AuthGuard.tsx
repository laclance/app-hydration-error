"use client";

import { useContext } from "react";
import { authContext } from "./AuthContext";
import useAuth from "./useAuth";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { loggedIn } = useContext(authContext);
  useAuth();

  return <>{loggedIn ? children : <p>Authorizing</p>}</>;
}
