"use client";

import { Area, AreaChart, Legend, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@workspace/ui/components/chart";
import { cn } from "@workspace/ui/lib/utils";

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function SummaryChart1({ className }: { className?: string }) {
  return (
    <ChartContainer
      config={chartConfig}
      className={cn("min-h-[50px] w-full max-h-24", className)}
    >
      <AreaChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 0,
          right: 0,
        }}
      >
        {/* <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        /> */}
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="line" />}
        />
        <defs>
          <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="var(--color-desktop)"
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor="var(--color-desktop)"
              stopOpacity={0.1}
            />
          </linearGradient>
        </defs>
        <Area
          dataKey="desktop"
          type="natural"
          fill="url(#fillDesktop)"
          fillOpacity={0.4}
          stroke="var(--color-desktop)"
          stackId="a"
        />
      </AreaChart>
    </ChartContainer>
  );
}

function generateMonthlyChartData() {
  const startDate = new Date(2025, 3, 1); // Months are 0-indexed → April 2025
  const days = 30;

  const data = [];
  let scope = 250;
  let started = 0;
  let completed = 0;

  for (let i = 0; i < days; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);

    // Simulate progression: gradually increase started & completed
    started = Math.min(scope, started + Math.random() * 10 + 3);
    completed = Math.min(started, completed + Math.random() * 8 + 2);

    // Occasionally adjust scope slightly (simulating new tasks added)
    if (Math.random() < 0.1) scope += Math.floor(Math.random() * 10);

    data.push({
      date,
      scope: Math.round(scope),
      started: Math.round(started),
      completed: Math.round(completed),
    });
  }

  return data;
}

const chartData2 = generateMonthlyChartData();

const chartConfig2 = {
  scope: {
    label: "Scope",
    color: "var(--chart-1)",
  },
  started: {
    label: "Started",
    color: "var(--chart-2)",
  },
  completed: {
    label: "Completed",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

export function SummaryChart2({ className }: { className?: string }) {
  return (
    <ChartContainer
      config={chartConfig2}
      className={cn("min-h-[50px] w-full max-h-24", className)}
    >
      <AreaChart
        accessibilityLayer
        data={chartData2}
        margin={{
          top: 48,
          left: 24,
          right: 24,
        }}
      >
        {/* <ChartLegend content={<ChartLegendContent />} /> */}
        <Legend
          wrapperStyle={{
            top: 12,
            left: 24,
          }}
          content={<ChartLegendContent verticalAlign="top" className="justify-start pt-0" />}
        />
        {/* <CartesianGrid vertical={false} /> */}
        <XAxis
          dataKey="date"
          tickLine={true}
          axisLine={false}
          tickMargin={12}
          tickFormatter={(date: Date, index: number) => {
            const d = new Date(date);
            const start = new Date(chartData2[0]?.date!);
            const diffDays = Math.floor(
              (d.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
            );
            // Always show the first tick, then every 7 days, and optionally the last one
            const isFirst = diffDays === 0;
            const isWeekly = diffDays % 7 === 0;
            // const isLast = index === chartData2.length - 1;

            if (isFirst || isWeekly) {
              return d.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              });
            }

            return "";

            return d.toLocaleDateString("en-Us", {
              month: "short",
              day: "numeric",
            });
          }}
          // tickFormatter={(date: Date, index: number) => {
          //   const d = new Date(date);
          //   const start = new Date(chartData2[0].date);
          //   const diffDays = Math.floor(
          //     (d.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
          //   );

          //   // Always show the first tick, then every 7 days, and optionally the last one
          //   const isFirst = diffDays === 0;
          //   const isWeekly = diffDays % 7 === 0;
          //   const isLast = index === chartData.length - 1;

          //   if (isFirst || isWeekly || isLast) {
          //     return d.toLocaleDateString("en-US", {
          //       month: "short",
          //       day: "numeric",
          //     });
          //   }

          //   return "";
          // }}
        />
        <ChartTooltip
          cursor={true}
          content={<ChartTooltipContent indicator="line" />}
        />
        <ChartLegend
          style={{
            top: 40,
            right: 20,
            backgroundColor: "#f5f5f5",
            border: "1px solid #d5d5d5",
            borderRadius: 3,
            lineHeight: "40px",
          }}
          content={<ChartLegendContent />}
        />
        <Area
          dataKey="scope"
          type="monotone"
          fill="url(#fillScope)"
          stroke="var(--color-scope, var(--chart-1))"
          strokeWidth={2}
        />
        <Area
          dataKey="started"
          type="monotone"
          fill="url(#fillStarted)"
          stroke="var(--color-started, var(--chart-2))"
          strokeWidth={2}
        />
        <Area
          dataKey="completed"
          type="monotone"
          fill="url(#fillCompleted)"
          stroke="var(--color-completed, var(--chart-3))"
          strokeWidth={2}
        />
      </AreaChart>
    </ChartContainer>
  );
}
