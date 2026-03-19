import type { Provider } from "./types.js";

/**
 * In-memory registry of named LLM providers.
 * TODO: implement full provider lifecycle (lazy init, health checks)
 */
export class ProviderRegistry {
  private readonly providers = new Map<string, Provider>();

  /** Register a provider instance. */
  register(provider: Provider): void {
    // TODO: implement — validate name uniqueness, initialize provider
    this.providers.set(provider.name, provider);
  }

  /** Retrieve a registered provider by name. */
  get(name: string): Provider {
    const provider = this.providers.get(name);
    if (!provider) {
      throw new Error(`Provider "${name}" is not registered`);
    }
    return provider;
  }

  /** List all registered provider names. */
  list(): string[] {
    return Array.from(this.providers.keys());
  }
}

/** Singleton provider registry instance. */
export const providerRegistry = new ProviderRegistry();
