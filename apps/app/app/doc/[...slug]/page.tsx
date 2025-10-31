"use client";

import { use } from "react";
import { api } from "@convex/_generated/api";
import { useQuery } from "convex/react";
import { Id } from "@convex/_generated/dataModel";

export default function DocumentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const docId = slug[0] as Id<"documents">;

  const document = useQuery(api.documents.getDocumentById, {
    id: docId,
  });

  if (!document) return;
  return (
    <div className="min-h-svh w-full max-w-5xl mx-auto px-4 pt-16 @5xl/main:px-0 flex flex-col items-start justify-start space-y-8">
      <h1 className="text-2xl font-semibold text-primary/85">{document.title}</h1>
      <p className="text-muted-foreground">{document.content}</p>
    </div>
  );
}
