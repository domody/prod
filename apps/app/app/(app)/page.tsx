import * as React from "react";

import { cn } from "@workspace/ui/lib/utils";

import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
} from "@workspace/ui/components/empty";

import { Topbar } from "@/components/navigation/Topbar/Topbar";

import { Check, ChevronRight, Home, Inbox } from "lucide-react";

function DashboardSection({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "group flex flex-col items-start justify-start gap-2 h-full max-h-full overflow-y-hidden",
        className
      )}
      {...props}
    />
  );
}

function DashboardSectionHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "w-full relative flex items-center justify-between",
        className
      )}
      {...props}
    />
  );
}
function DashboardSectionTitle({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return <p className={cn("text-muted-foreground", className)} {...props} />;
}

function DashboardSectionAction({
  className,
  children,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "absolute right-0 text-sm text-muted-foreground opacity-0 mt-4 group-hover:opacity-100 group-hover:mt-0 transition-all flex items-center justify-end gap-1 [&>svg]:size-3.5",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRight />
    </p>
  );
}

function DashboardSectionContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className="flex flex-col items-start justify-start gap-4 w-full max-h-full overflow-y-auto overflow-x-hidden last:pb-4"
      {...props}
    />
  );
}

function DashboardSectionItem({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className="flex border shrink-0 rounded w-full h-16 items-center p-2 text-sm text-muted-foreground"
      {...props}
    />
  );
}
export default function Page() {
  // const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 1, 1, 1, 1, 1];
  const a = [];
  // const b = [1, 2, 3, 4];
  const b = [];
  // const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 1, 1, 1, 1, 1];

  return (
    <div className="flex flex-col items-start justify-start h-screen max-h-screen w-full">
      <Topbar>
        <div className="w-full flex items-center justify-start gap-2">
          {/* <div className="bg-accent size-6 rounded [&_svg]:size-3.5 flex items-center justify-center">
            <Home />
          </div>
          <p className="text-sm font-semibold">Home</p> */}
        </div>
      </Topbar>
      <div className="flex flex-col items-start space-y-8 justify-start h-full max-h-full w-full mx-auto px-8 pt-8">
        <div className="w-full flex items-start justify-start">
          <p className="text-2xl font-semibold">Good Evening, Damian</p>
        </div>

        <div className="w-full h-full max-h-full overflow-y-hidden grid grid-cols-1 gap-8 @5xl/appview:grid-cols-2 no-scrollbar">
          {/*  */}
          <DashboardSection>
            <DashboardSectionHeader>
              <DashboardSectionTitle>Due Soon</DashboardSectionTitle>
              <DashboardSectionAction>Assigned issues</DashboardSectionAction>
            </DashboardSectionHeader>
            <DashboardSectionContent>
              {a.length > 0 ? (
                a.map((item, idx) => (
                  <DashboardSectionItem key={idx}>
                    Item {item}
                  </DashboardSectionItem>
                ))
              ) : (
                <Empty className="border border-solid w-full">
                  <EmptyHeader>
                    <EmptyMedia variant={"icon"}>
                      <Check />
                    </EmptyMedia>
                    <EmptyTitle>All caught up!</EmptyTitle>
                  </EmptyHeader>
                  <EmptyContent>
                    <EmptyDescription>
                      You have nothing due soon, congrats! You can work on
                      future issues or review previous work.
                    </EmptyDescription>
                  </EmptyContent>
                </Empty>
              )}
            </DashboardSectionContent>
          </DashboardSection>
          {/*  */}
          <DashboardSection>
            <DashboardSectionHeader>
              <DashboardSectionTitle>Recent Updates</DashboardSectionTitle>
              <DashboardSectionAction>Inbox</DashboardSectionAction>
            </DashboardSectionHeader>
            <DashboardSectionContent>
              {b.length > 0 ? (
                b.map((item, idx) => (
                  <DashboardSectionItem key={idx}>
                    Item {item}
                  </DashboardSectionItem>
                ))
              ) : (
                <Empty className="border border-solid w-full">
                  <EmptyHeader>
                    <EmptyMedia variant={"icon"}>
                      <Inbox />
                    </EmptyMedia>
                    <EmptyTitle>No updates</EmptyTitle>
                  </EmptyHeader>
                  <EmptyContent>
                    <EmptyDescription>
                      When an update occurs, it'll appear here. Try updating an
                      issue's status or priority.
                    </EmptyDescription>
                  </EmptyContent>
                </Empty>
              )}
            </DashboardSectionContent>
          </DashboardSection>
        </div>
      </div>
    </div>
  );
}
