import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getLastParameter(url:string) {
  // Create a URL object from the input string
  const urlObject = new URL(url);
  
  // Get the pathname part of the URL, split it by '/', and filter out empty segments
  const segments = urlObject.pathname.split('/').filter(segment => segment);

  // Return the last segment
  return segments.pop();
}