import type { AppConfig } from "../config/schema.js";
import type { ProviderRegistry } from "../providers/registry.js";
import type { SkillRegistry } from "../skills/types.js";

export interface OrchestratorOptions {
  config: AppConfig;
  providerRegistry: ProviderRegistry;
  skillRegistry: SkillRegistry;
}

/**
 * The Orchestrator coordinates provider calls, skill execution, and session state
 * for a single conversation turn or streaming response.
 * TODO: implement full turn loop, streaming, and error handling
 */
export class Orchestrator {
  private readonly options: OrchestratorOptions;

  constructor(options: OrchestratorOptions) {
    this.options = options;
  }

  /**
   * Handle a user message and produce an assistant response.
   * TODO: implement — build prompt, call provider, run skills loop, persist transcript
   */
  async run(_sessionId: string, _userMessage: string): Promise<string> {
    // TODO: implement
    void this.options;
    throw new Error("Not implemented");
  }

  /**
   * Handle a user message and stream the assistant response.
   * TODO: implement — streaming variant of run()
   */
  async *stream(
    _sessionId: string,
    _userMessage: string
  ): AsyncIterable<string> {
    // TODO: implement
    void this.options;
  }
}
