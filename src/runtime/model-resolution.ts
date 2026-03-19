import type { AppConfig } from "../config/schema.js";

/**
 * Resolve the model identifier to use for a given request.
 * Applies provider-level defaults and per-request overrides.
 * TODO: implement — support per-session model overrides, model aliasing
 */
export function resolveModel(
  config: AppConfig,
  requestedModel?: string
): string {
  // TODO: implement — look up provider default, validate against allowed list
  if (requestedModel) {
    return requestedModel;
  }
  return config.provider.openai?.model ?? "gpt-4o";
}
