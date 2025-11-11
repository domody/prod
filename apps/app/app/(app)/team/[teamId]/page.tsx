"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { Dashboard1 } from "./dashboard1";
import { Dashboard2 } from "./dashboard2";

export default function TeamPage({
  params,
}: {
  params: Promise<{ teamId: string }>;
}) {
  const { teamId } = React.use(params);
  const searchParams = useSearchParams();

  const variant = searchParams.get("variant");
  console.log(variant)
  return variant == "2" ? <Dashboard2 /> : <Dashboard1 />;
}
