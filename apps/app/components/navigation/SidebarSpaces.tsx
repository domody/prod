"use client";

import { useQuery } from "convex/react";
import { api } from "@convex/_generated/api";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@workspace/ui/components/sidebar";

export function SidebarSpaces() {
  const spaces = useQuery(api.spaces.getUserSpaces, { ownerId: "user_123" });

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
