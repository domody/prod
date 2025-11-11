import { useState } from "react";
import { Topbar } from "@/components/navigation/Topbar/Topbar";
import { Button } from "@workspace/ui/components/button";
import { Tabs, TabsList, TabsTrigger } from "@workspace/ui/components/tabs";
import { Code, Settings, Ellipsis } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import {
  LayoutDashboard,
  Clock,
  ClipboardList,
  KanbanSquare,
  ListTodo,
  CalendarDays,
  BarChart3,
} from "lucide-react";

// Tabs config
export const tabs = [
  {
    value: "summary",
    label: "Summary",
    icon: LayoutDashboard,
    content: <div>Summary Content</div>,
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
    value: "boards",
    label: "Boards",
    icon: KanbanSquare,
    content: <div>Boards Content</div>,
  },
  {
    value: "list",
    label: "List",
    icon: ListTodo,
    content: <div>List Content</div>,
  },
  {
    value: "calendar",
    label: "Calendar",
    icon: CalendarDays,
    content: <div>Calendar Content</div>,
  },
  {
    value: "dashboard",
    label: "Dashboard",
    icon: BarChart3,
    content: <div>Dashboard Content</div>,
  },
];

// Custom tab trigger
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

export function Dashboard1() {
  const [activeTab, setActiveTab] = useState("summary");

  // Find the currently active tab object
  const activeTabObj = tabs.find((tab) => tab.value === activeTab);

  return (
    <div className="flex flex-col items-start justify-start h-screen max-h-screen w-full">
      <Topbar />
      <div className="flex flex-col items-start space-y-8 justify-start h-full max-h-full w-full mx-auto">
        {/* Header */}
        <div className="w-full flex flex-col items-center gap-4 justify-start pt-8 border-b px-8">
          <div className="w-full flex items-center gap-4 justify-start">
            <div className="bg-accent size-8 rounded [&_svg]:size-5 flex items-center justify-center">
              <Code />
            </div>
            <p className="text-2xl font-semibold">Development</p>
            <Button className="ml-auto" variant={"outline"} size={"icon-sm"}>
              <Ellipsis />
            </Button>
            <Button variant={"outline"} size={"icon-sm"}>
              <Settings />
            </Button>
          </div>

          {/* Tabs triggers */}
          <div className="w-full h-9 flex items-center justify-start gap-3">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="p-0 gap-2 bg-transparent">
                {tabs.map((tab) => (
                  <DashTabTrigger key={tab.value} value={tab.value}>
                    <tab.icon /> {tab.label}
                  </DashTabTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* Tab content */}
        <div className="w-full flex-1 px-8">{activeTabObj?.content}</div>
      </div>
    </div>
  );
}
