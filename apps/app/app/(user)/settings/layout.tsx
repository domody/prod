import { SettingsSidebar } from "./SettingsSidebar";
import { AppProviders } from "@/components/providers/app-providers";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppProviders>
      <div className="w-full h-screen overflow-hidden mx-auto flex items-start justify-start">
        <SettingsSidebar />
        <div className="w-full">{children}</div>
      </div>
    </AppProviders>
  );
}
