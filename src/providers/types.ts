import type { Metadata } from "../types/common.js";

/** A single message in a conversation (role + content). */
export interface ChatMessage {
  role: "system" | "user" | "assistant" | "tool";
  content: string;
  name?: string;
}

/** Options passed to a provider's chat/complete call. */
export interface ProviderChatOptions {
  model?: string;
  messages: ChatMessage[];
  temperature?: number;
  maxTokens?: number;
  stream?: boolean;
  metadata?: Metadata;
}

/** A streamed delta chunk from a provider. */
export interface ProviderDeltaEvent {
  type: "delta";
  delta: string;
  model?: string;
}

/** A completion-done event from a provider. */
export interface ProviderDoneEvent {
  type: "done";
  model?: string;
  usage?: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
}

/** An error event from a provider stream. */
export interface ProviderErrorEvent {
  type: "error";
  message: string;
}

/** Discriminated union of all streamed provider events. */
export type ProviderStreamEvent =
  | ProviderDeltaEvent
  | ProviderDoneEvent
  | ProviderErrorEvent;

/** Interface every LLM provider must implement. */
export interface Provider {
  /** Unique provider name (e.g. "openai"). */
  readonly name: string;

  /**
   * Stream a chat completion, yielding ProviderStreamEvents.
   * TODO: implement streaming interface
   */
  chatStream(
    options: ProviderChatOptions
  ): AsyncIterable<ProviderStreamEvent>;

  /**
   * Return a full (non-streaming) chat completion.
   * TODO: implement
   */
  chat(options: ProviderChatOptions): Promise<string>;
}
