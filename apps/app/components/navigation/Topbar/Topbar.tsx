import * as React from "react";

import { cn } from "@workspace/ui/lib/utils";

export function Topbar({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "w-full h-12 px-8 border-b flex items-center justfiy-start gap-2 shrink-0",
        className
      )}
      {...props}
    />
  );
}
