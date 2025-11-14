"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@workspace/ui/components/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
} from "@workspace/ui/components/dropdown-menu";
import { KbdGroup, Kbd } from "@workspace/ui/components/kbd";

import { cn } from "@workspace/ui/lib/utils";

import {
  CornerDownLeft,
  Moon,
  Sun,
  Monitor,
  CommandIcon,
  Search,
  Grip,
  SunMoon,
} from "lucide-react";
import { Separator } from "@workspace/ui/components/separator";
import { Button } from "@workspace/ui/components/button";

import {
  PlusSquare,
  FolderPlus,
  Tag,
  Users,
  Calendar,
  CheckCircle,
  Settings,
  ListChecks,
  Bell,
  Clipboard,
  FileText,
} from "lucide-react";
import { title } from "process";

export const commandMenuActions = [
  {
    title: "New Issue",
    description: "Create a new blank issue",
    icon: PlusSquare,
    shortcut: ["N"],
  },
  {
    title: "New Project",
    description: "Start a new project workspace",
    icon: FolderPlus,
    shortcut: ["P"],
  },
  {
    title: "Assign Label",
    description: "Add a label to an existing issue",
    icon: Tag,
    shortcut: ["L"],
  },
  {
    title: "Invite Team Member",
    description: "Add a collaborator to your project",
    icon: Users,
    shortcut: ["I"],
  },
  {
    title: "Schedule Milestone",
    description: "Set a milestone for your project",
    icon: Calendar,
    shortcut: ["M"],
  },
  {
    title: "Mark Complete",
    description: "Close or complete an existing task",
    icon: CheckCircle,
    shortcut: ["C"],
  },
  {
    title: "View All Issues",
    description: "Browse all current issues in the project",
    icon: ListChecks,
    shortcut: [["Cmd", "K"], "I"],
  },
  {
    title: "Settings",
    description: "Configure project settings",
    icon: Settings,
    shortcut: [["Cmd", "K"], "S"],
  },
  {
    title: "Search Issues",
    description: "Find issues by keyword or ID",
    icon: Search,
    shortcut: [["Cmd", "K"], "F"],
  },
  {
    title: "Notifications",
    description: "View recent notifications",
    icon: Bell,
    shortcut: ["B"],
  },
  {
    title: "Copy Issue Link",
    description: "Copy link to current issue",
    icon: Clipboard,
    shortcut: [["Cmd", "K"], "L"],
  },
  {
    title: "Export Issues",
    description: "Download issue data",
    icon: FileText,
    shortcut: [["Cmd", "K"], "E"],
  },
  {
    title: "Archive Project",
    description: "Archive current project",
    icon: FolderPlus,
    shortcut: [["Cmd", "K"], "A"],
  },
  {
    title: "View Milestones",
    description: "Show all project milestones",
    icon: Calendar,
    shortcut: ["V"],
  },
  {
    title: "Add Comment",
    description: "Comment on selected issue",
    icon: PlusSquare,
    shortcut: ["M"],
  },
  {
    title: "Filter Issues",
    description: "Filter issues by label or status",
    icon: Tag,
    shortcut: [["Cmd", "K"], "F"],
  },
  {
    title: "Assign Issue",
    description: "Assign an issue to a team member",
    icon: Users,
    shortcut: ["A"],
  },
  {
    title: "Reopen Issue",
    description: "Reopen a closed issue",
    icon: CheckCircle,
    shortcut: ["R"],
  },
  {
    title: "Duplicate Issue",
    description: "Create a copy of this issue",
    icon: FileText,
    shortcut: [["Cmd", "K"], "D"],
  },
  {
    title: "Toggle Sidebar",
    description: "Show or hide the sidebar",
    icon: Settings,
    shortcut: ["Cmd", "B"],
  },
  {
    title: "Toggle Theme",
    description: "Switch between light, dark, or system themes",
    icon: SunMoon,
    shortcut: ["N", "O"],
  },
];

// utils/dialogPosition.ts
type DialogPosition =
  | "center"
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "top-center"
  | "bottom-center"
  | "center-left"
  | "center-right";

const dialogPositionClasses: Record<DialogPosition, string> = {
  center: "top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]",
  "top-left": "top-4 left-4 translate-x-0 translate-y-0",
  "top-right": "top-4 right-4 left-auto translate-x-0 translate-y-0",
  "bottom-left": "bottom-4 left-4 top-auto translate-x-0 translate-y-0",
  "bottom-right":
    "bottom-4 right-4 top-auto left-auto translate-x-0 translate-y-0",
  "top-center": "top-4 left-[50%] translate-x-[-50%] translate-y-0",
  "bottom-center": "bottom-4 left-[50%] translate-x-[-50%] translate-y-0",
  "center-left": "top-[50%] left-4 translate-x-0 translate-y-[-50%]",
  "center-right":
    "top-[50%] right-4 left-auto translate-x-0 translate-y-[-50%]",
};

const themeOptions = [
  { name: "light", icon: <Sun /> },
  { name: "dark", icon: <Moon /> },
  { name: "system", icon: <Monitor /> },
];

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();

  const [loco, setLoco] = React.useState<DialogPosition>("top-right");

  const positions: DialogPosition[] = [
    "top-left",
    "top-center",
    "top-right",
    "center-left",
    "center",
    "center-right",
    "bottom-left",
    "bottom-center",
    "bottom-right",
  ];

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          className={cn(
            "bg-input/30 text-muted-foreground relative h-8 w-full items-center font-normal justify-start pl-3 shadow-none sm:pr-12 md:w-48 lg:w-56 xl:w-96"
          )}
          onClick={() => setOpen(true)}
        >
          <Search />
          <span className="inline-flex">Search...</span>
          <div className="absolute top-1.5 right-1.5 hidden gap-1 sm:flex">
            <KbdGroup>
              <Kbd className="border">⌘</Kbd>
              <Kbd className="border">K</Kbd>
            </KbdGroup>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className={cn(
          "border backdrop-blur-3xl bg-muted/35 dark:bg-popover/15 p-1 gap-1",
          dialogPositionClasses[loco || "center"]
        )}
      >
        <DialogHeader className="sr-only">
          <DialogTitle>Search documentation...</DialogTitle>
          <DialogDescription>Search for a command to run...</DialogDescription>
        </DialogHeader>
        <div className="bg-white/40 dark:bg-black/25 border rounded-md">
          <Command className="bg-transparent">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList className="no-scrollbar">
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Actions">
                {commandMenuActions.map((action, idx) => (
                  <CommandItem
                    key={idx}
                    className="font-medium data-[selected=true]:bg-accent/50"
                  >
                    <div className="size-8 border bg-accent rounded flex items-center justify-center shrink-0 [&_svg]:size-6">
                      <action.icon />
                    </div>
                    <div className="flex flex-col items-start justify-between flex-1 leading-none gap-0.5">
                      <p>{action.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {action.description}
                      </p>
                    </div>
                    {renderShortcut(action.shortcut)}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
        <div className="h-8 pr-4 bg-transparent flex items-center justify-between text-xs font-medium text-muted-foreground">
          <div className="flex items-center justify-start gap-1">
            <div className="p-0.5 border rounded-md">
              {themeOptions.map((option) => (
                <Button
                  key={option.name}
                  variant="ghost"
                  size="icon-sm"
                  className={cn(
                    "size-7 [&_svg:not([class*='size-'])]:size-3.5 rounded-sm hover:bg-accent/50",
                    theme === option.name ? "bg-accent/50" : ""
                  )}
                  onClick={() => setTheme(option.name)}
                >
                  {option.icon}
                </Button>
              ))}
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon-sm"
                  className={cn(
                    "size-8 [&_svg:not([class*='size-'])]:size-3.5 rounded-sm hover:bg-accent/50 border"
                  )}
                >
                  <Grip />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="border backdrop-blur-3xl bg-muted/35 dark:bg-popover/15 p-1 min-w-0">
                <DropdownMenuGroup className="size-24 grid grid-cols-3 grid-rows-3 gap-0.5">
                  {positions.map((pos) => (
                    <DropdownMenuItem
                      key={pos}
                      onClick={() => setLoco(pos)}
                      className={cn(
                        "rounded-sm hover:bg-accent/50",
                        loco === pos && "bg-accent/70"
                      )}
                      title={pos}
                    >
                      <Grip />
                      {/* You could later add icons representing the direction */}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex items-center justify-end gap-2">
            <CommandMenuKbd>
              <CornerDownLeft />
            </CommandMenuKbd>
            <p>Open</p>
            <CommandMenuKbd>esc</CommandMenuKbd>
            <p>Close</p>
            <div className="h-4">
              <Separator orientation={"vertical"} />
            </div>
            <CommandMenuKbd>
              <CommandIcon />
            </CommandMenuKbd>
            <CommandMenuKbd>K</CommandMenuKbd>
            <p>Actions</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function CommandMenuKbd({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      className={cn(
        "bg-white/25 dark:bg-black/25 text-muted-foreground pointer-events-none flex h-5 items-center justify-center gap-1 rounded border px-1 font-sans text-[0.7rem] font-medium select-none [&_svg:not([class*='size-'])]:size-3",
        className
      )}
      {...props}
    />
  );
}

function renderShortcut(shortcut: (string | string[])[]) {
  return (
    <KbdGroup>
      {shortcut.map((keyOrSequence, index) => {
        const keys = Array.isArray(keyOrSequence)
          ? keyOrSequence
          : [keyOrSequence];
        return keys.map((k, i) => {
          const isCmd = k.toLowerCase() === "cmd";
          return (
            <Kbd key={`${index}-${i}`}>
              {isCmd ? <CommandIcon className="size-3.5" /> : k}
            </Kbd>
          );
        });
      })}
    </KbdGroup>
  );
}
