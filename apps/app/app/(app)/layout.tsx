
import { AppProviders } from "@/components/providers/app-providers";
import { AppSidebar } from "@/components/navigation/AppSidebar";
import { CommandDialog } from "@workspace/ui/components/command";

export default function AppLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <AppProviders>
      {/* <CommandDialog /> */}
      <AppSidebar />
      <main className="w-full h-full @container/appview">{children}</main>
    </AppProviders>
  );
}
