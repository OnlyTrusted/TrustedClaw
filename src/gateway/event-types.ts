/**
 * Gateway SSE and WebSocket event type definitions.
 * All events are JSON objects with a discriminating `type` field.
 */

/** A text delta streamed from the assistant. */
export interface DeltaEvent {
  type: "delta";
  sessionId: string;
  delta: string;
}

/** Signals the end of a streaming response. */
export interface DoneEvent {
  type: "done";
  sessionId: string;
}

/** An error event sent to the client. */
export interface ErrorEvent {
  type: "error";
  sessionId: string;
  message: string;
  code?: string;
}

/** Discriminated union of all outbound gateway events. */
export type GatewayEvent = DeltaEvent | DoneEvent | ErrorEvent;

/** Helper to serialise a GatewayEvent for SSE. */
export function toSSE(event: GatewayEvent): string {
  return `data: ${JSON.stringify(event)}\n\n`;
}
