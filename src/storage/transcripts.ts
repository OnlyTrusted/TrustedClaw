import type { JsonValue, Metadata } from "../types/common.js";

/** Supported transcript event types. */
export type TranscriptEventType =
  | "session.start"
  | "session.end"
  | "message.user"
  | "message.assistant"
  | "skill.call"
  | "skill.result"
  | "error";

/** A single event in a session's transcript log. */
export interface TranscriptEvent {
  id: string;
  sessionId: string;
  timestamp: string;
  type: TranscriptEventType;
  payload: JsonValue;
  metadata?: Metadata;
}

/**
 * Append a new event to the transcript for the given session.
 * TODO: implement
 */
export async function appendTranscriptEvent(
  _event: Omit<TranscriptEvent, "id" | "timestamp">
): Promise<TranscriptEvent> {
  // TODO: implement — generate id + timestamp, append to data/transcripts/<sessionId>.jsonl
  throw new Error("Not implemented");
}

/**
 * Query transcript events for a session, optionally filtered by type.
 * TODO: implement
 */
export async function queryTranscriptEvents(
  _sessionId: string,
  _filter?: { type?: TranscriptEventType }
): Promise<TranscriptEvent[]> {
  // TODO: implement — read + parse data/transcripts/<sessionId>.jsonl
  return [];
}
