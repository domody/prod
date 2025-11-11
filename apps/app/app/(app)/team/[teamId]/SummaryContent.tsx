import * as React from "react";
import { cn } from "@workspace/ui/lib/utils";

import {
  Item,
  ItemMedia,
  ItemContent,
  ItemActions,
  ItemGroup,
  ItemSeparator,
  ItemTitle,
  ItemDescription,
  ItemHeader,
  ItemFooter,
} from "@workspace/ui/components/item";
import {
  TrendingUp,
  TrendingDown,
  Calendar,
  ChevronRight,
  CheckCircle,
  BadgeCheck,
} from "lucide-react";
import { SummaryChart1, SummaryChart2 } from "./SummaryChart";

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
    <div className="w-full max-h-[calc(100vh-6rem)] overflow-y-scroll no-scrollbar grid grid-cols-4 p-2 gap-1.5 bg-muted/35 dark:bg-popover/15">
      <DashboardCard>
        <DashboardCardLabel>Completed in the Last 7 Days</DashboardCardLabel>
        <DashboardCardAction>Completed tasks</DashboardCardAction>
        <DashboardCardContent className="items-start justify-end pt-6">
          <SummaryChart1 />
          <DashboardCardContentTitle>13 Completed</DashboardCardContentTitle>
          <DashboardCardContentLabel>
            +4 vs Last week
            <TrendingUp />
          </DashboardCardContentLabel>
        </DashboardCardContent>
      </DashboardCard>

      <DashboardCard>
        <DashboardCardLabel>New Issues Created</DashboardCardLabel>
        <DashboardCardAction>New tasks</DashboardCardAction>
        <DashboardCardContent className="items-start justify-end pt-6">
          <SummaryChart1 />
          <DashboardCardContentTitle>21 Created</DashboardCardContentTitle>
          <DashboardCardContentLabel>
            -3 vs Last week
            <TrendingDown />
          </DashboardCardContentLabel>
        </DashboardCardContent>
      </DashboardCard>

      <DashboardCard>
        <DashboardCardLabel>Recently Updated</DashboardCardLabel>
        <DashboardCardAction>Updated tasks</DashboardCardAction>
        <DashboardCardContent className="items-start justify-end pt-6">
          <SummaryChart1 />
          <DashboardCardContentTitle>47 Updated</DashboardCardContentTitle>
          <DashboardCardContentLabel>
            +12 in last 24h
            <TrendingUp />
          </DashboardCardContentLabel>
        </DashboardCardContent>
      </DashboardCard>

      <DashboardCard>
        <DashboardCardLabel>Due Soon</DashboardCardLabel>
        <DashboardCardAction>Tasks due soon</DashboardCardAction>
        <DashboardCardContent className="items-start justify-end pt-6">
          <SummaryChart1 />
          <DashboardCardContentTitle>6 Issues</DashboardCardContentTitle>
          <DashboardCardContentLabel>
            Next 3 days <Calendar />
          </DashboardCardContentLabel>
        </DashboardCardContent>
      </DashboardCard>

      <DashboardCard className="col-span-3">
        <DashboardCardLabel>Sprint 23</DashboardCardLabel>
        <DashboardCardContent className="max-h-96 items-end justify-start px-0">
          <SummaryChart2 className="max-h-full" />
        </DashboardCardContent>
      </DashboardCard>

      <DashboardCard className="col-span-1">
        <DashboardCardLabel>Recent Notifications</DashboardCardLabel>
        <DashboardCardAction>All Notifications</DashboardCardAction>
        <div className="flex w-full max-h-96 overflow-hidden flex-col items-start justify-start gap-2">
          {Array.from({ length: 6 }).map((item, idx) => {
            return (
              <Item
                variant="outline"
                size="sm"
                className="w-full rounded-md border bg-white/40 dark:bg-black/25 px-3 py-2"
                key={idx}
              >
                <ItemMedia>
                  <BadgeCheck className="size-5  mt-0.5" />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle className="text-sm">Basic Item</ItemTitle>
                  <ItemDescription className="text-xs">ENG-1023</ItemDescription>
                </ItemContent>
              </Item>
            );
          })}
        </div>
      </DashboardCard>
    </div>
  );
}

function DashboardCard({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "group/card relative col-span-1 h-full border rounded-lg p-1 flex flex-col gap-2 bg-muted/35 dark:bg-muted/10 items-start justify-start backdrop-blur-3xl",
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

function DashboardCardAction({
  className,
  children,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "absolute top-2 right-1 text-xs text-muted-foreground opacity-0 mt-2 group-hover/card:opacity-100 group-hover/card:mt-0 transition-all flex items-center justify-end gap-1 [&>svg]:size-3.5",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRight />
    </p>
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
