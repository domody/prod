"use client";

import * as React from "react";

import { cn } from "@workspace/ui/lib/utils";
import { Topbar } from "@/components/navigation/Topbar/Topbar";
import { AppTopbar } from "@/components/navigation/Topbar/AppTopbar";
import { Tabs, TabsList, TabsTrigger } from "@workspace/ui/components/tabs";

import * as TabsPrimitive from "@radix-ui/react-tabs";

import {
  Code,
  LayoutDashboard,
  Clock,
  ClipboardList,
  KanbanSquare,
  ListTodo,
  CalendarDays,
  BarChart3,
} from "lucide-react";

import { SummaryContent } from "./SummaryContent";

// Tabs config
export const tabs = [
  {
    value: "summary",
    label: "Summary",
    icon: LayoutDashboard,
    content: <SummaryContent />,
  },
  {
    value: "list",
    label: "List",
    icon: ListTodo,
    content: <div>List Content</div>,
  },
  {
    value: "boards",
    label: "Boards",
    icon: KanbanSquare,
    content: <div>Boards Content</div>,
  },
  {
    value: "timeline",
    label: "Timeline",
    icon: Clock,
    content: <div>Timeline Content</div>,
  },
  {
    value: "backlog",
    label: "Backlog",
    icon: ClipboardList,
    content: <div>Backlog Content</div>,
  },
  {
    value: "calendar",
    label: "Calendar",
    icon: CalendarDays,
    content: <div>Calendar Content</div>,
  },
];

export function Dashboard2() {
  const [activeTab, setActiveTab] = React.useState("summary");

  const activeTabObj = tabs.find((tab) => tab.value === activeTab);

  return (
    <div className="flex flex-col items-start justify-start h-screen max-h-screen w-full">
      <AppTopbar>
        <div className="w-full flex items-center justify-start gap-2">
          <div className="bg-accent size-6 rounded [&_svg]:size-3.5 flex items-center justify-center">
            <Code />
          </div>
          <p className="text-sm font-semibold">Development</p>
        </div>
      </AppTopbar>
      <Topbar className="items-end">
        <Tabs className="" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="p-0 gap-2 bg-transparent">
            {tabs.map((tab) => (
              <DashTabTrigger key={tab.value} value={tab.value}>
                <tab.icon /> {tab.label}
              </DashTabTrigger>
            ))}
          </TabsList>
        </Tabs>
      </Topbar>
      {/* Tab content */}
      <div className="w-full flex-1 px-8">{activeTabObj?.content}</div>
    </div>
  );
}

function DashTabTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsTrigger
      className={cn(
        "h-full hover:bg-input/30 text-muted-foreground data-[state=active]:text-primary dark:data-[state=active]:text-primary hover:data-[state=active]:bg-input/30 border-0 transition-colors data-[state=active]:bg-transparent dark:data-[state=active]:bg-transparent data-[state=active]:border-0 rounded-b-none data-[state=active]:border-b data-[state=active]:shadow-none data-[state=active]:border-primary dark:data-[state=active]:border-primary",
        className
      )}
      {...props}
    />
  );
}
