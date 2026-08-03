import type { LucideIcon } from "lucide-react";

export interface simpleCard{
    eyebrow?:string,
    title: string,
    description: string,
}

export interface iconCard extends simpleCard{
    icon: LucideIcon,
}