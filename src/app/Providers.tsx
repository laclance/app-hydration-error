"use client";

import AuthContextProvider from "../AuthContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <AuthContextProvider>{children}</AuthContextProvider>;
}
