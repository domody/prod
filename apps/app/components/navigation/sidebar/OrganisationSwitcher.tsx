"use client";

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
import { AudioWaveform, Command, Plane, Plus } from "lucide-react";

const organisations = [
  { name: "Organisation 1", icon: AudioWaveform },
  { name: "Organisation 2", icon: Command },
  { name: "Organisation 3", icon: Plane },
];

export function OrganisationSwitcher() {
  const isMobile = useIsMobile();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton className="w-full data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground pl-1 group-data-[collapsible=icon]:pl-1!">
              <div className="size-6 border rounded flex items-center justify-center shrink-0">
                <AudioWaveform className="size-4" />
              </div>
              <p className="text-sm font-medium truncate">Organisation 1</p>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align={isMobile ? "center" : "start"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-xs text-muted-foreground">
              Organizations
            </DropdownMenuLabel>
            <DropdownMenuGroup>
              {organisations.map(({ name, icon: Icon }, i) => (
                <DropdownMenuItem key={i} className="gap-2 p-2">
                  <div className="size-6 border rounded-md flex items-center justify-center">
                    <Icon className="size-3.5 shrink-0" />
                  </div>
                  {/* <p className="text-sm">{name}</p> */}
                  {name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem className="gap-2 p-2">
                <div className="flex size-6 items-center justify-center rounded-md border bg-transparent">
                  <Plus className="size-4" />
                </div>
                <div className="text-muted-foreground font-medium">
                  Add team
                </div>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
