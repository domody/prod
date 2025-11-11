import * as React from "react";

import { cn } from "@workspace/ui/lib/utils";

import { Topbar } from "./Topbar";
import { CommandMenu } from "../command-menu/CommandDialog";

export function AppTopbar({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <Topbar className={cn("justify-between", className)} {...props}>
      {children}
      <div className="ml-auto">
        <CommandMenu />
      </div>
    </Topbar>
  );
}
