import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function publicAssetPath(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path.startsWith("/") ? path : `/${path}`}`;
}
