import { Topbar } from "@/components/navigation/Topbar/Topbar";
import { SettingsRenderer } from "../SettingsRenderer";
import { settingsSchema } from "../settings";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ tab: string }>;
}) {
  const { tab } = await params;

  const tabData = settingsSchema.tabs.find((t) => t.id == tab);

  if (!tabData) {
    return;
  }
  return (
    <div>
      <Topbar className="justify-center">
        <div className="max-w-5xl px-2 w-full flex items-center gap-2">
          <div className="bg-accent size-6 rounded border [&_svg]:size-3.5 flex items-center justify-center">
            <tabData.icon />
          </div>
          <p className="text-sm font-semibold">{tabData.label}</p>
        </div>
      </Topbar>
      <SettingsRenderer tabId={tab} />
    </div>
  );
}
