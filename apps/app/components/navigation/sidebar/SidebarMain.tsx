import { Home, Inbox, Search } from "lucide-react"; // or your icon library
import Link from "next/link";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@workspace/ui/components/sidebar";

type MainNavItem = {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

const main: MainNavItem[] = [
  { title: "Home", href: "/", icon: Home },
  { title: "Search", href: "/search", icon: Search },
  { title: "Inbox", href: "/inbox", icon: Inbox },
];

export function SidebarMain() {
  return (
    <SidebarGroup>
      <SidebarMenu>
        {main.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton tooltip={item.title} asChild>
              <Link href={item.href} className="flex items-center gap-2">
                <item.icon className="h-4 w-4" />
                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
