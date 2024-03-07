import { type ClassValue, clsx } from "clsx"
import { nanoid } from "nanoid"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function uniqueKey(): string {
  return nanoid()
}