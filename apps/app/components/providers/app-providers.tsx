"use client";

import * as React from "react";
import { SidebarProvider } from "@workspace/ui/components/sidebar";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return <SidebarProvider>{children}</SidebarProvider>;
}
