import type { JsonValue, Metadata } from "../types/common.js";

/** A single message stored inside a session. */
export interface SessionMessage {
  id: string;
  role: "system" | "user" | "assistant" | "tool";
  content: string;
  createdAt: string;
  metadata?: Metadata;
}

/** A stored session entry. */
export interface SessionEntry {
  id: string;
  createdAt: string;
  updatedAt: string;
  metadata: Metadata;
  messages: SessionMessage[];
}

/**
 * Create a new session and persist it.
 * TODO: implement
 */
export async function createSession(
  _metadata?: Metadata
): Promise<SessionEntry> {
  // TODO: implement — generate id, write to data/sessions/<id>.json
  throw new Error("Not implemented");
}

/**
 * Retrieve a session by ID.
 * TODO: implement
 */
export async function getSession(_id: string): Promise<SessionEntry | null> {
  // TODO: implement — read data/sessions/<id>.json
  return null;
}

/**
 * Update a session (e.g. append a message or update metadata).
 * TODO: implement
 */
export async function updateSession(
  _id: string,
  _patch: Partial<Pick<SessionEntry, "messages" | "metadata">>
): Promise<SessionEntry> {
  // TODO: implement — read, merge, atomic-write
  throw new Error("Not implemented");
}

/**
 * Delete a session by ID.
 * TODO: implement
 */
export async function deleteSession(_id: string): Promise<void> {
  // TODO: implement — remove data/sessions/<id>.json
  throw new Error("Not implemented");
}

// Re-export for convenience
export type { JsonValue };
