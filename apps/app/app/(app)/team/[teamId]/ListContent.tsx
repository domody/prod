import * as React from "react";
import { cn } from "@workspace/ui/lib/utils";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@workspace/ui/components/avatar";
import { Button } from "@workspace/ui/components/button";
import { Badge } from "@workspace/ui/components/badge";
import {
  DashboardCard,
  DashboardCardLabel,
  DashboardCardContent,
  DashboardCardContentTitle,
  DashboardCardContentLabel,
} from "./SummaryContent";
import { ChevronDown, Loader, Plus } from "lucide-react";

const statuses = ["Backlog", "In Progress", "Blocked", "In Review", "Completed", "Canceled"];

// Backlog

// Items that have been created but are not currently being worked on. They may need planning, prioritization, or clarification before moving forward.

// In Progress

// Work has started. Someone is actively implementing, updating, or addressing the issue.

// Blocked

// Work cannot continue due to a dependency, missing information, or an external issue needing resolution.

// In Review

// The work is completed and awaiting review—such as code review, design approval, or QA verification.

// Completed

// The issue has been fully completed, verified, and closed. No further action is required.

// Optional: Canceled

// The issue will not be worked on; either because it's a duplicate, invalid, or no longer needed.

export function ListContent() {
  const [open, setOpen] = React.useState(true);

  return (
    <div className="w-full max-h-[calc(100vh-6rem)] overflow-y-scroll no-scrollbar bg-white/50 dark:bg-popover/15 h-full">
      <div className="grid grid-cols-1 p-2 gap-1.5">
        {statuses.map((status, idx) => (
          <DashboardCard key={idx} className="h-min">
            <div className="flex items-center justify-between w-full">
              <DashboardCardLabel
                className="hover:text-foreground transition-colors cursor-default w-full"
                onClick={() => {
                  setOpen((open) => !open);
                }}
              >
                <ChevronDown
                  className={`transition-transform ${open ? "" : "-rotate-90"}`}
                />
                {status}
                <Badge
                  variant={"outline"}
                  className="rounded-sm text-muted-foreground"
                >
                  6
                </Badge>
              </DashboardCardLabel>
              <Badge
                variant={"outline"}
                className="rounded-sm bg-white/40 dark:bg-black/25"
              >
                <Plus />
                Add Issue
              </Badge>
            </div>
            <DashboardCardContent
              className={`p-0 ${open ? "" : "h-0 overflow-hidden border-0 -mb-1.5"}`}
            >
              {Array.from({ length: 6 }).map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="w-full h-10 pl-4 pr-2 border-b last-of-type:border-b-0 flex items-center justify-start gap-4"
                  >
                    <p className="font-mono text-xs text-muted-foreground">
                      ENG-567
                    </p>
                    {/* <Button className="rounded-sm" variant={"ghost"} size={"icon-sm"}>
                  <Loader />
                </Button> */}
                    <p className="text-sm w-96 mr-auto">
                      Document new internal API routes
                    </p>

                    <Badge
                      variant={"destructive"}
                      className="rounded-sm bg-transparent dark:bg-transparent text-destructive border-destructive border"
                    >
                      High
                    </Badge>

                    <div className="flex items-center gap-0.5">
                      <Badge variant={"outline"} className="rounded-sm">
                        UX
                      </Badge>
                      <Badge variant={"outline"} className="rounded-sm">
                        Bug
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">Jun 16</p>

                    <Avatar className="size-6 rounded-sm">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                );
              })}
            </DashboardCardContent>
          </DashboardCard>
        ))}
      </div>
    </div>
  );
}
