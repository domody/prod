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
import { KbdGroup, Kbd } from "@workspace/ui/components/kbd";

import { cn } from "@workspace/ui/lib/utils";

import {
  CornerDownLeft,
  Folder,
  Moon,
  Sun,
  Monitor,
  CommandIcon,
  Search,
} from "lucide-react";
import { Separator } from "@workspace/ui/components/separator";
import { Button } from "@workspace/ui/components/button";

const items = ["Calendar", "Search Emoji", "Calculator"];

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

  const loco: DialogPosition = "top-right";

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
          "border backdrop-blur-3xl bg-muted/35 dark:bg-popover/15 p-1",
          dialogPositionClasses[loco || "center"]
        )}
      >
        <div className="bg-white/40 dark:bg-black/25 border rounded-md">
          <DialogHeader className="sr-only">
            <DialogTitle>Search documentation...</DialogTitle>
            <DialogDescription>
              Search for a command to run...
            </DialogDescription>
          </DialogHeader>
          <Command className="bg-transparent">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList className="">
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                {items.map((item, idx) => (
                  <CommandItem
                    key={idx}
                    className="font-medium data-[selected=true]:bg-accent/50"
                  >
                    <div className="size-8 border bg-accent rounded flex items-center justify-center shrink-0 [&_svg]:size-6">
                      <Folder />
                    </div>
                    <div className="flex flex-col items-start justify-between flex-1 leading-none gap-0.5">
                      <p>{item}</p>
                      <p className="text-xs text-muted-foreground">
                        Create a new blank issue
                      </p>
                    </div>
                    <KbdGroup>
                      <Kbd>
                        <CommandIcon />
                      </Kbd>
                      <Kbd>N</Kbd>
                    </KbdGroup>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
        <div className="h-10 pr-4 bg-transparent flex items-center justify-between text-xs font-medium text-muted-foreground">
          <div className="flex items-center justify-start gap-2">
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
