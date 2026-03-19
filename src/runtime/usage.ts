/**
 * Usage tracking utilities.
 * Accumulates token counts and cost estimates across turns and sessions.
 * TODO: implement — persist usage to session metadata, expose aggregation API
 */

export interface TokenUsage {
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
}

export interface UsageSummary extends TokenUsage {
  sessionId: string;
  turnCount: number;
  estimatedCostUsd?: number;
}

/**
 * Accumulate token usage across multiple turns.
 * TODO: implement
 */
export function accumulateUsage(
  _existing: TokenUsage,
  _delta: TokenUsage
): TokenUsage {
  // TODO: implement
  return { promptTokens: 0, completionTokens: 0, totalTokens: 0 };
}

/**
 * Estimate the cost in USD for the given token usage and model.
 * TODO: implement — use per-model pricing table
 */
export function estimateCost(_usage: TokenUsage, _model: string): number {
  // TODO: implement
  return 0;
}
