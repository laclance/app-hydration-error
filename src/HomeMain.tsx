"use client";

import { useContext } from "react";
import { authContext } from "./AuthContext";
import AuthGuard from "./AuthGuard";
import Button from "./Button";

export default function HomeMain() {
  const { logout } = useContext(authContext);

  return (
    <AuthGuard>
      <p>Hello world</p>
      <Button text="Log out" onClick={logout} />
    </AuthGuard>
  );
}
