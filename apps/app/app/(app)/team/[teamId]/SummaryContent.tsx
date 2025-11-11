import * as React from "react";
import { cn } from "@workspace/ui/lib/utils";

import { TrendingUp, TrendingDown, Calendar } from "lucide-react";
import { SummaryChart } from "./SummaryChart";
const items = [
  {
    title: "Basic Item",
    description: "A simple item with title and description.",
    variant: "outline",
    className: "col-span-4 h-min",
  },
];

export function SummaryContent() {
  return (
    <div className="w-full max-h-[calc(100vh-6rem)] overflow-y-scroll no-scrollbar grid grid-cols-4 p-2 gap-2 bg-muted/35 dark:bg-popover/15">
      <DashboardCard>
        <DashboardCardLabel>Completed in the Last 7 Days</DashboardCardLabel>
        <DashboardCardContent className="items-start justify-end pt-6">
          <SummaryChart />
          <DashboardCardContentTitle>13 Completed</DashboardCardContentTitle>
          <DashboardCardContentLabel>
            +4 vs Last week
            <TrendingUp />
          </DashboardCardContentLabel>
        </DashboardCardContent>
      </DashboardCard>

      <DashboardCard>
        <DashboardCardLabel>New Issues Created</DashboardCardLabel>
        <DashboardCardContent className="items-start justify-end pt-6">
          <SummaryChart />
          <DashboardCardContentTitle>21 Created</DashboardCardContentTitle>
          <DashboardCardContentLabel>
            -3 vs Last week
            <TrendingDown />
          </DashboardCardContentLabel>
        </DashboardCardContent>
      </DashboardCard>

      <DashboardCard>
        <DashboardCardLabel>Recently Updated</DashboardCardLabel>
        <DashboardCardContent className="items-start justify-end pt-6">
          <SummaryChart />
          <DashboardCardContentTitle>47 Updated</DashboardCardContentTitle>
          <DashboardCardContentLabel>
            +12 in last 24h
            <TrendingUp />
          </DashboardCardContentLabel>
        </DashboardCardContent>
      </DashboardCard>

      <DashboardCard>
        <DashboardCardLabel>Due Soon</DashboardCardLabel>
        <DashboardCardContent className="items-start justify-end pt-6">
          <SummaryChart />
          <DashboardCardContentTitle>6 Issues</DashboardCardContentTitle>
          <DashboardCardContentLabel>
            Next 3 days <Calendar />
          </DashboardCardContentLabel>
        </DashboardCardContent>
      </DashboardCard>

      <DashboardCard className="col-span-4">
        <DashboardCardLabel>Sprint 23</DashboardCardLabel>
        <DashboardCardContent className="h-96 items-end justify-start"></DashboardCardContent>
      </DashboardCard>
    </div>
  );
}

function DashboardCard({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "col-span-1 h-full border rounded-lg p-1 flex flex-col gap-2 bg-muted/35 dark:bg-muted/10 items-start justify-start backdrop-blur-3xl",
        className
      )}
      {...props}
    />
  );
}

function DashboardCardLabel({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "font-medium text-xs text-muted-foreground px-1 pt-1",
        className
      )}
      {...props}
    />
  );
}

function DashboardCardContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "w-full rounded-md border bg-white/40 dark:bg-black/25 flex flex-col gap-1 p-2 h-full",
        className
      )}
      {...props}
    />
  );
}

function DashboardCardContentTitle({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return <p className={cn("font-medium mt-2", className)} {...props} />;
}

function DashboardCardContentLabel({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "text-xs text-muted-foreground flex items-center gap-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        className
      )}
      {...props}
    />
  );
}
