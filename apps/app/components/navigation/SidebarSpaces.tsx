"use client";

import { useQuery } from "convex/react";
import { api } from "@convex/_generated/api";
import { useUserId } from "../providers/UserProvider";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@workspace/ui/components/sidebar";

export function SidebarSpaces() {
  const userId = useUserId();
  if (!userId.userId) {
    return;
  }

  const spaces = useQuery(api.spaces.getUserSpaces, { ownerId: userId.userId });

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Spaces</SidebarGroupLabel>
      <SidebarMenu>
        {spaces?.map((space) => {
          return (
            <SidebarMenuItem key={space._id}>
              <SidebarMenuButton>{space.name}</SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
