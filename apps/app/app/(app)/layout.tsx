import { AppProviders } from "@/components/providers/app-providers";
import { AppSidebar } from "@/components/navigation/AppSidebar";
import { CommandDialog } from "@workspace/ui/components/command";
import { SidebarInset } from "@workspace/ui/components/sidebar";
export default function AppLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const variant = "sidebar" as "inset" | "sidebar" | "floating" | undefined;
  const isInset = variant === "inset";

  const mainClass = isInset
    ? "w-full border rounded-xl max-h-[calc(100vh-1rem)] overflow-hidden @container/appview"
    : "w-full h-full overflow-hidden @container/appview";

  const content = <main className={mainClass}>{children}</main>;

  return (
    <AppProviders>
      {/* <CommandDialog /> */}
      <AppSidebar variant={variant} />
      {isInset ? <SidebarInset>{content}</SidebarInset> : content}
    </AppProviders>
  );
}
