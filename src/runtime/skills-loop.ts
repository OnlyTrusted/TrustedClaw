import type { SkillRegistry } from "../skills/types.js";
import type { JsonValue } from "../types/common.js";

/** Represents a skill invocation requested by the model. */
export interface SkillCall {
  skillName: string;
  args: Record<string, JsonValue>;
}

/** Represents the result of a single skill call. */
export interface SkillCallResult {
  skillName: string;
  output: JsonValue;
  error?: string;
}

/**
 * Execute a batch of skill calls against the registry and return results.
 * TODO: implement — parallel execution, error isolation, timeout
 */
export async function runSkillsLoop(
  _calls: SkillCall[],
  _registry: SkillRegistry
): Promise<SkillCallResult[]> {
  // TODO: implement — execute each skill, catch errors, return results
  return [];
}

/**
 * Parse raw model output into a list of skill calls.
 * TODO: implement — parse JSON function-call / tool-call format
 */
export function parseSkillCalls(_modelOutput: string): SkillCall[] {
  // TODO: implement
  return [];
}
