"use client";

import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { authContext } from "../../AuthContext";
import Button from "../../Button";

export default function LoginPage() {
  const { login, loggedIn } = useContext(authContext);
  const router = useRouter();

  useEffect(() => {
    loggedIn && router.replace("/");
  }, [loggedIn, router]);

  if (loggedIn) {
    return (
      <div>
        <p>Authorizing</p>
      </div>
    );
  }

  return (
    <div>
      <Button text="Login" onClick={login} />
    </div>
  );
}
