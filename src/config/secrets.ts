/**
 * Environment-variable secret loader.
 * Resolves "${ENV_VAR}" placeholders in config values with process.env values.
 * TODO: implement full placeholder resolution across nested config objects
 */

const PLACEHOLDER_RE = /^\$\{([^}]+)\}$/;

/**
 * Resolve a single config value that may contain an env-variable placeholder.
 * E.g. "${TC_OPENAI_API_KEY}" → process.env.TC_OPENAI_API_KEY
 * TODO: implement — support partial substitution (e.g. "prefix_${VAR}_suffix")
 */
export function resolveSecret(value: string): string {
  const match = PLACEHOLDER_RE.exec(value);
  if (match) {
    const envVar = match[1];
    const resolved = process.env[envVar];
    if (resolved === undefined) {
      // TODO: implement — decide whether to throw, warn, or return empty string
      return "";
    }
    return resolved;
  }
  return value;
}

/**
 * Walk a config object and resolve all string values that are secret placeholders.
 * Traverses nested objects and arrays recursively.
 */
export function resolveSecrets<T>(config: T): T {
  if (typeof config === "string") {
    return resolveSecret(config) as unknown as T;
  }
  if (Array.isArray(config)) {
    return config.map((item) => resolveSecrets(item)) as unknown as T;
  }
  if (typeof config === "object" && config !== null) {
    const result: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(
      config as Record<string, unknown>
    )) {
      result[key] = resolveSecrets(value);
    }
    return result as unknown as T;
  }
  return config;
}
