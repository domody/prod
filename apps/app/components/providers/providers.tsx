"use client";

import * as React from "react";
import { ConvexClientProvider } from "./ConvexClientProviders";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SidebarProvider } from "@workspace/ui/components/sidebar";
import { UserProvider } from "./UserProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ConvexClientProvider>
      <UserProvider>
        <NextThemesProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          enableColorScheme
        >
          {children}
        </NextThemesProvider>
      </UserProvider>
    </ConvexClientProvider>
  );
}
