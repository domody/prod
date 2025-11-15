import { settingsSchema } from "./settings";
import { FieldRenderer } from "./FieldRenderer";

import {
  DashboardCard,
  DashboardCardAction,
  DashboardCardContent,
  DashboardCardContentLabel,
  DashboardCardContentTitle,
  DashboardCardLabel,
} from "@/app/(app)/team/[teamId]/SummaryContent";
import { Label } from "@workspace/ui/components/label";

export function SettingsRenderer({ tabId }: { tabId: string }) {
  const tab = settingsSchema.tabs.find((t) => t.id === tabId);

  return (
    <div className="flex flex-col gap-4 p-2 w-full max-w-5xl mx-auto">
      {tab?.sections.map((section) => (
        <DashboardCard key={section.title} className="">
          <DashboardCardLabel className="text-sm text-foreground">
            {section.title}
          </DashboardCardLabel>
          <div className="flex flex-col justify-start items-start w-full gap-1">
            {section.fields.map((field) => (
              <DashboardCardContent
                key={field.id}
                className="max-h-none gap-1.5"
              >
                {field.type !== "checkbox" && field.type !== "switch" && (
                  // <DashboardCardContentLabel className="text-foreground text-sm">
                  //   {field.label}
                  // </DashboardCardContentLabel>
                  <Label>{field.label}</Label>
                )}

                <FieldRenderer field={field} />

                {field.type !== "checkbox" && field.type !== "switch" && (
                  <DashboardCardContentLabel>
                    {field.description}
                  </DashboardCardContentLabel>
                )}
              </DashboardCardContent>
            ))}
          </div>
        </DashboardCard>
      ))}
    </div>
  );
}
