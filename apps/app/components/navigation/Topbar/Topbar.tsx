import * as React from "react";

import { cn } from "@workspace/ui/lib/utils";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@workspace/ui/components/input-group";
import { Input } from "@workspace/ui/components/input";
import { Search } from "lucide-react";
import { CommandMenu } from "../command-menu/CommandDialog";

export function Topbar({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "w-full h-12 px-8 border-b flex items-center justfiy-start gap-2 shrink-0",
        className
      )}
      {...props}
    >
      <CommandMenu />
      {children}
    </div>
  );
}
