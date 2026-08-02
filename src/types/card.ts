import type { LucideIcon } from "lucide-react";

export interface Card{
    icon?: LucideIcon,
    eyebrow?:string,
    title: string,
    description: string,
}