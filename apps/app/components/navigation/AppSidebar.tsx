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
import { SidebarSpaces } from "./SidebarSpaces";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        {/* <p>Username</p> */}
      </SidebarHeader>
      <SidebarContent>
        <SidebarMain />
        <SidebarSpaces />
      </SidebarContent>
    </Sidebar>
  );
}
