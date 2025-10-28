"use client";

import { Button } from "@workspace/ui/components/button"
import { useQuery } from "convex/react";
import { api } from "@convex/_generated/api"

export default function Page() {
  const documents = useQuery(api.documents.getUserDocuments, {ownerId: "user_123"})
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        {documents?.map(({ _id, title }) => <div key={_id}>{title}</div>)}
      </div>
    </div>
  )
}
