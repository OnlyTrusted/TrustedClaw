import type { SessionMessage } from "../storage/sessions.js";

/**
 * Represents a single conversation turn (one user message + one assistant response).
 * TODO: implement turn lifecycle (start, complete, error, cancel)
 */
export interface Turn {
  id: string;
  sessionId: string;
  userMessage: SessionMessage;
  assistantMessage?: SessionMessage;
  startedAt: string;
  completedAt?: string;
  status: "pending" | "streaming" | "done" | "error";
}

/**
 * Create a new Turn object for the given session and user message.
 * TODO: implement
 */
export function createTurn(
  _sessionId: string,
  _userMessage: SessionMessage
): Turn {
  // TODO: implement
  throw new Error("Not implemented");
}

/**
 * Mark a turn as completed with the given assistant message.
 * TODO: implement
 */
export function completeTurn(
  _turn: Turn,
  _assistantMessage: SessionMessage
): Turn {
  // TODO: implement
  throw new Error("Not implemented");
}
