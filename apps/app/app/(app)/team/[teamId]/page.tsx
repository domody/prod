"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { Dashboard } from "./dashboard";

export default function TeamPage({
  params,
}: {
  params: Promise<{ teamId: string }>;
}) {
  const { teamId } = React.use(params);

  return <Dashboard />
}
