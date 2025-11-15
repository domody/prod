"use client";
import Link from "next/link";
import { settingsSchema } from "./settings";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarTrigger,
} from "@workspace/ui/components/sidebar";
import { ChevronLeft } from "lucide-react";

export function SettingsSidebar() {
  const tabs = settingsSchema.tabs;

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="text-muted-foreground" asChild>
              <Link href={"/"}>
                <ChevronLeft /> Back to app
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Settings</SidebarGroupLabel>
          <SidebarMenu>
            {tabs.map((tab, id) => (
              <SidebarMenuItem key={tab.id}>
                <SidebarMenuButton asChild>
                  <Link href={`/settings/${tab.id}`}>
                    <tab.icon />
                    <span>{tab.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
