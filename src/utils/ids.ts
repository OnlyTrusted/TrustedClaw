import { v4 as uuidv4 } from "uuid";

/**
 * Generate a new unique ID.
 * TODO: implement — optionally accept a prefix for namespacing
 */
export function id(prefix?: string): string {
  const raw = uuidv4();
  return prefix ? `${prefix}_${raw}` : raw;
}
