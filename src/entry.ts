import { loadConfig } from "./config/load.js";
import { resolveSecrets } from "./config/secrets.js";
import { startServer } from "./gateway/server.js";
import { providerRegistry } from "./providers/registry.js";
import { OpenAIProvider } from "./providers/openai.js";
import { skillRegistry } from "./skills/registry.js";
import { loadSkills } from "./skills/loader.js";
import { echoSkill } from "./skills/builtins/echo.js";
import { timeNowSkill } from "./skills/builtins/time_now.js";
import { calculatorSkill } from "./skills/builtins/calculator.js";

async function main(): Promise<void> {
  // 1. Load and resolve configuration
  // TODO: implement — pass config file path from CLI arg or TC_CONFIG env var
  const config = resolveSecrets(await loadConfig());

  // 2. Register providers
  // TODO: implement — iterate config.provider entries, register each
  if (config.provider.openai?.apiKey) {
    providerRegistry.register(
      new OpenAIProvider(
        config.provider.openai.apiKey,
        config.provider.openai.model
      )
    );
  }

  // 3. Register built-in skills
  skillRegistry.register(echoSkill);
  skillRegistry.register(timeNowSkill);
  skillRegistry.register(calculatorSkill);

  // 4. Load external skills from plugin directories
  await loadSkills(skillRegistry, config);

  // 5. Start the gateway server
  await startServer(config);
}

main().catch((err: unknown) => {
  console.error("Fatal error during startup:", err);
  process.exit(1);
});
