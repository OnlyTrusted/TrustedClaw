/**
 * Application configuration schema.
 * Reflects the shape of trusted-claw.json5.
 */

export interface GatewayConfig {
  port: number;
  host: string;
  requireAuth: boolean;
}

export interface OpenAIProviderConfig {
  apiKey: string;
  model: string;
}

export interface ProviderConfig {
  default: string;
  openai?: OpenAIProviderConfig;
}

export interface StorageDirConfig {
  dir: string;
}

export interface StorageConfig {
  dataDir: string;
  sessions: StorageDirConfig;
  transcripts: StorageDirConfig;
}

export interface SkillsConfig {
  pluginDirs: string[];
}

/** Root application configuration. */
export interface AppConfig {
  gateway: GatewayConfig;
  provider: ProviderConfig;
  storage: StorageConfig;
  skills: SkillsConfig;
}

/** Default configuration values. */
export const DEFAULT_CONFIG: AppConfig = {
  gateway: {
    port: 3000,
    host: "0.0.0.0",
    requireAuth: false,
  },
  provider: {
    default: "openai",
  },
  storage: {
    dataDir: "./data",
    sessions: { dir: "./data/sessions" },
    transcripts: { dir: "./data/transcripts" },
  },
  skills: {
    pluginDirs: [],
  },
};
