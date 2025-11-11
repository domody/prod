import { Topbar } from "@/components/navigation/Topbar/Topbar";

import { Code } from "lucide-react";

export function Dashboard2() {
  return (
    <div className="flex flex-col items-start justify-start h-screen max-h-screen w-full">
      <Topbar>
        <div className="w-full flex items-center justify-start gap-2">
          <div className="bg-accent size-6 rounded [&_svg]:size-3.5 flex items-center justify-center">
            <Code />
          </div>
          <p className="text-sm font-semibold">Development</p>
        </div>
      </Topbar>
      <div className="flex flex-col items-start space-y-8 justify-start h-full max-h-full w-full max-w-6xl mx-auto px-4 @5xl/appview:px-0"></div>
    </div>
  );
}
