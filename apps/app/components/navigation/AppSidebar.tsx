import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@workspace/ui/components/sidebar";

import { SidebarMain } from "./SidebarMain";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>{/* <p>Username</p> */}</SidebarHeader>
      <SidebarContent>
        <SidebarMain />
      </SidebarContent>
    </Sidebar>
  );
}
