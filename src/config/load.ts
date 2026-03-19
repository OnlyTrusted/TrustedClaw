import { promises as fs } from "fs";
import JSON5 from "json5";
import type { AppConfig } from "./schema.js";
import { DEFAULT_CONFIG } from "./schema.js";

const DEFAULT_CONFIG_PATH = "trusted-claw.json5";

/**
 * Load the application configuration from a JSON5 file.
 * Falls back to DEFAULT_CONFIG values for any missing fields.
 * TODO: implement — deep merge with defaults, validate against schema
 */
export async function loadConfig(
  configPath = DEFAULT_CONFIG_PATH
): Promise<AppConfig> {
  // TODO: implement — validate each field, resolve env-variable placeholders
  try {
    const raw = await fs.readFile(configPath, "utf8");
    const parsed = JSON5.parse(raw) as Partial<AppConfig>;
    return deepMerge(DEFAULT_CONFIG, parsed) as AppConfig;
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") {
      // Config file is optional; use defaults
      return { ...DEFAULT_CONFIG };
    }
    throw err;
  }
}

/** Shallow deep-merge helper — TODO: replace with a proper deep-merge library. */
function deepMerge(base: unknown, override: unknown): unknown {
  if (
    typeof base === "object" &&
    base !== null &&
    typeof override === "object" &&
    override !== null &&
    !Array.isArray(base) &&
    !Array.isArray(override)
  ) {
    const result: Record<string, unknown> = { ...(base as Record<string, unknown>) };
    for (const [key, value] of Object.entries(override as Record<string, unknown>)) {
      result[key] = deepMerge(result[key], value);
    }
    return result;
  }
  return override ?? base;
}
