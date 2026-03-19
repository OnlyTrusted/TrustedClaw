import type { JsonValue, Metadata } from "../types/common.js";

/** JSON Schema object describing a skill's parameters. */
export type ParametersSchema = {
  type: "object";
  properties: Record<string, JsonValue>;
  required?: string[];
};

/** Result returned from a skill execution. */
export interface SkillResult {
  /** Human-readable or structured output. */
  output: JsonValue;
  /** Optional metadata about the execution. */
  metadata?: Metadata;
}

/** A skill definition: metadata + execute handler. */
export interface SkillDefinition {
  /** Unique skill name (e.g. "echo", "time_now"). */
  name: string;
  /** Short description shown to the model/user. */
  description: string;
  /** JSON Schema for the skill's input parameters. */
  parameters: ParametersSchema;
  /**
   * Execute the skill with the given arguments.
   * TODO: implement in each builtin and loaded skill
   */
  execute(args: Record<string, JsonValue>): Promise<SkillResult>;
}

/** Interface for the skill registry. */
export interface SkillRegistry {
  /** Register a skill, overwriting any existing skill with the same name. */
  register(skill: SkillDefinition): void;
  /** Retrieve a skill by name; throws if not found. */
  get(name: string): SkillDefinition;
  /** List all registered skills. */
  list(): SkillDefinition[];
}
