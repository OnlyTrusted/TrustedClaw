import type {
  Provider,
  ProviderChatOptions,
  ProviderStreamEvent,
} from "./types.js";

/**
 * OpenAI provider stub.
 * TODO: implement — call the OpenAI Chat Completions API (streaming + non-streaming)
 */
export class OpenAIProvider implements Provider {
  readonly name = "openai";

  private readonly apiKey: string;
  private readonly defaultModel: string;

  constructor(apiKey: string, defaultModel = "gpt-4o") {
    this.apiKey = apiKey;
    this.defaultModel = defaultModel;
  }

  async *chatStream(
    _options: ProviderChatOptions
  ): AsyncIterable<ProviderStreamEvent> {
    // TODO: implement — POST /v1/chat/completions with stream:true, yield deltas
    void this.apiKey;
    void this.defaultModel;
    yield { type: "done", model: this.defaultModel };
  }

  async chat(_options: ProviderChatOptions): Promise<string> {
    // TODO: implement — POST /v1/chat/completions, return full content
    void this.apiKey;
    void this.defaultModel;
    return "";
  }
}
