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

import { OrganisationSwitcher } from "./OrganisationSwitcher";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { SidebarMain } from "./SidebarMain";
import { UserNav } from "./UserNav";
import { NavTeams } from "./NavTeams";

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="h-12 border-b">
        <OrganisationSwitcher />
      </SidebarHeader>

      <SidebarContent>
        <SidebarMain />
        <NavTeams />
      </SidebarContent>
      <SidebarFooter>
        <ThemeSwitcher />
        <SidebarTrigger className="size-8" />
        {/* <UserNav /> */}
      </SidebarFooter>
    </Sidebar>
  );
}
