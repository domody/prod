"use client";

import * as React from "react";

import { Id } from "@convex/_generated/dataModel";

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
  userId: Id<"users"> | null;
  setUserId: React.Dispatch<React.SetStateAction<Id<"users">>>;
  isAuthenticated: boolean;
};

const UserContext = React.createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [userId, setUserId] = React.useState<Id<"users">>(
    "jh709g3dm922gzqfv31ct2m5b97tbmqm" as Id<"users">
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

export function useUserId(): Id<"users"> | null {
  const ctx = React.useContext(UserContext);
  if (!ctx) throw new Error("useUserId must be used within a UserProvider!");
  return ctx.userId;
}

export function useUserIdStrict(): Id<"users"> {
  const userId = useUserId();
  if (!userId) throw new Error("No userId found in context");
  return userId;
}
