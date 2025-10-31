"use client";

import * as React from "react";

type User = {
  _id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  preferences?: {
    theme?: string;
    language?: string;
  };
};

type UserContextType = {
  // user: User | null;
  // setUser: (user: User | null) => void;
  userId: string | null;
  setUserId: React.Dispatch<React.SetStateAction<string>>;
  isAuthenticated: boolean;
};

const UserContext = React.createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [userId, setUserId] = React.useState<string>(
    "jh709g3dm922gzqfv31ct2m5b97tbmqm"
  );

  const value = React.useMemo(
    () => ({
      userId,
      setUserId,
      isAuthenticated: !!userId,
    }),
    [userId]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUserId() {
  const ctx = React.useContext(UserContext);
  if (!ctx) throw new Error("useUser must be used within a UserProvider!");
  return ctx;
}
