import type { ChatMessage } from "../providers/types.js";
import type { SessionMessage } from "../storage/sessions.js";
import type { SkillDefinition } from "../skills/types.js";

/**
 * Build the provider messages array (system prompt + conversation history + tool info).
 * TODO: implement — inject system prompt, format skill definitions as tool specs
 */
export function buildPrompt(
  _systemPrompt: string,
  _history: SessionMessage[],
  _skills: SkillDefinition[]
): ChatMessage[] {
  // TODO: implement
  return [];
}

/**
 * Build the system prompt string from config and context.
 * TODO: implement
 */
export function buildSystemPrompt(_context?: Record<string, string>): string {
  // TODO: implement — load template, inject context variables
  return "You are a helpful assistant.";
}
