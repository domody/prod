"use client";

import * as React from "react";
import { useQuery } from "convex/react";
import { api } from "@convex/_generated/api";

import { useUserId } from "../providers/UserProvider";

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
import { Ellipsis, LucideIcon } from "lucide-react";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";

import {
  Edit,
  Share,
  Trash,
  Move,
  Copy,
  FolderInput,
  FolderPlus,
  Lock,
  Palette,
} from "lucide-react";

interface Actions {
  label: string;
  action: string;
  icon: LucideIcon;
  separateAfter?: boolean;
}
const actions: Actions[] = [
  { label: "Rename", action: "rename", icon: Edit },
  { label: "Export", action: "export", icon: Share },
  { label: "Delete", action: "delete", icon: Trash },
  { label: "Move", action: "move", icon: Move },
  { label: "Copy", action: "copy", icon: Copy, separateAfter: true },
  { label: "Move to Other Space", action: "move_to_space", icon: FolderInput },
  { label: "Copy to Space", action: "copy_to_space", icon: FolderPlus },
  {
    label: "New Space",
    action: "new_space",
    icon: FolderPlus,
    separateAfter: true,
  },
  { label: "Password Protect", action: "password_protect", icon: Lock },
  { label: "Space Color", action: "space_color", icon: Palette },
];

function DocumentCardOptions({}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size={"icon-sm"} variant={"ghost"}>
          <Ellipsis />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48" align="end">
        <DropdownMenuLabel>File Actions</DropdownMenuLabel>
        <DropdownMenuGroup>
          {actions.map((action, idx) => {
            return (
              <React.Fragment key={idx}>
                <DropdownMenuItem>
                  <action.icon />
                  {action.label}
                </DropdownMenuItem>
                {action.separateAfter && <DropdownMenuSeparator />}
              </React.Fragment>
            );
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

interface MiniDoc {
  _id: string;
  title: string;
  type: string | undefined;
  updatedTime: number | undefined;
}

function DocumentCard({ document }: { document: MiniDoc }) {
  // {
  //   document.updatedTime
  //     ? new Date(document.updatedTime).toLocaleDateString(undefined, {
  //         month: "short",
  //         day: "numeric",
  //       })
  //     : "—";
  // }
  const updatedDate = document.updatedTime
    ? new Date(document.updatedTime).toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
      })
    : "-";

  return (
    <Link href={`/doc/${document._id}`}>
      <Card className="border-0 bg-accent/30 hover:bg-accent/50 transition-colors cursor-default">
        <CardHeader>
          <CardDescription>Document</CardDescription>
          <CardTitle className="line-clamp-1">{document.title}</CardTitle>
          <CardAction>
            <DocumentCardOptions />
          </CardAction>
        </CardHeader>
        <CardFooter>
          <p className="text-muted-foreground">Updated {updatedDate}</p>
        </CardFooter>
      </Card>
    </Link>
  );
}
export function DocumentCards() {
  const userId = useUserId()!;

  if (!userId.userId) {
    return;
  }

  const documents = useQuery(api.documents.getUserDocuments, {
    ownerId: userId.userId,
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
