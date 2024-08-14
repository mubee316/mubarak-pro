import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getLastParameter(url: string) {
  const urlObject = new URL(url);
  const segments = urlObject.pathname.split('/').filter(segment => segment);
  return segments.pop();
}
