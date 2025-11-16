import Link from "next/link";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@workspace/ui/components/sidebar";

import { Code } from "lucide-react";

export function NavTeams() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Teams</SidebarGroupLabel>
      <SidebarMenu>
        <SidebarMenuItem>
          <Link href={"/team/asdasda"}>
            <SidebarMenuButton tooltip={"Development"}>
              <Code />
              <span>Development</span>
            </SidebarMenuButton>
          </Link>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
}
