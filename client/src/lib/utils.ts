import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Resolve a public-folder asset path for the current Vite base URL (e.g. GitHub Pages subpath). */
export function publicAsset(path: string) {
  if (path.startsWith("/") && !path.startsWith("//")) {
    return `${import.meta.env.BASE_URL}${path.slice(1)}`
  }
  return path
}
