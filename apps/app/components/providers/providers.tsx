"use client";

import * as React from "react";
import { ConvexClientProvider } from "./ConvexClientProviders";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SidebarProvider } from "@workspace/ui/components/sidebar";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ConvexClientProvider>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        enableColorScheme
      >
        <SidebarProvider>{children}</SidebarProvider>
      </NextThemesProvider>
    </ConvexClientProvider>
  );
}
