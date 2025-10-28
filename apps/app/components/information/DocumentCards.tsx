"use client";

import { useQuery } from "convex/react";
import { api } from "@convex/_generated/api";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Button } from "@workspace/ui/components/button";
import { Ellipsis } from "lucide-react";

interface MiniDoc {
  _id: string;
  title: string;
  type: string | undefined;
  updatedTime: number | undefined;
}

function DocumentCard({ document }: { document: MiniDoc }) {
  return (
    <Card className="border-0 bg-accent/30 hover:bg-accent/50 transition-colors cursor-default">
      <CardHeader>
        <CardDescription>Document</CardDescription>
        <CardTitle className="line-clamp-1">{document.title}</CardTitle>
        <CardAction>
          <Button size={"icon-sm"} variant={"ghost"}>
            <Ellipsis />
          </Button>
        </CardAction>
      </CardHeader>
      <CardFooter>
        <p className="text-muted-foreground">Apr 20</p>
      </CardFooter>
    </Card>
  );
}
export function DocumentCards() {
  const documents = useQuery(api.documents.getUserDocuments, {
    ownerId: "user_123",
  });

  return (
    <div className="flex flex-col space-y-4 items-start justify-start w-full">
      <p className="text-xl font-semibold">Recent Documents</p>
      <div className="grid grid-cols-1 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 gap-4 w-full">
        {documents?.map((document) => (
          <DocumentCard key={document._id} document={document} />
        ))}
      </div>
    </div>
  );
}
