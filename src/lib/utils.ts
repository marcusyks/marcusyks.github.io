import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Badge } from "@/components/ui/badge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


