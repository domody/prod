"use client";

import * as React from "react";
import {ConvexProvider , ConvexReactClient } from "convex/react";


const convex = new ConvexReactClient("https://hidden-goshawk-451.convex.cloud");

export function ConvexClientProvider({ children} : {children: React.ReactNode}) {
    console.log(process.env.NEXT_PUBLIC_CONVEX_URL) // Works ?? wtf
    return <ConvexProvider client={convex}>{children}</ConvexProvider>
}