"use client";

import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { authContext } from "./AuthContext";

export default function useAuth() {
  const { loggedIn } = useContext(authContext);
  const router = useRouter();

  useEffect(() => {
    router.replace(loggedIn ? "/" : "/login/");
  });
}
