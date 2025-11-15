"use client";

import Link from "next/link";

import { useIsMobile } from "@workspace/ui/hooks/use-mobile";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@workspace/ui/components/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@workspace/ui/components/sidebar";
import { Keyboard, LogOut, Settings, User } from "lucide-react";

export function UserNav() {
  const isMobile = useIsMobile();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              className="w-full data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              size={"lg"}
            >
              <div className="size-8 bg-primary rounded-lg animate-pulse shrink-0" />
              <div className="flex flex-col gap-0.5 text-sm">
                <p>Damian Mathews</p>
                <p className="text-xs">dmathews@example.com</p>
              </div>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "top" : "right"}
            align={isMobile ? "center" : "end"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="flex items-center justify-start gap-2">
              <div className="size-8 bg-primary rounded-lg animate-pulse" />
              <div className="flex flex-col gap-0.5 text-sm">
                <p>Damian Mathews</p>
                <p className="text-xs">dmathews@example.com</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <User /> Profile
              </DropdownMenuItem>
              <Link href={'/settings'}>
                <DropdownMenuItem>
                  <Settings /> Settings
                </DropdownMenuItem>
              </Link>

              <DropdownMenuItem>
                <Keyboard /> Shortcuts
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem variant="destructive">
                <LogOut /> Log Out
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
