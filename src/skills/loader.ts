import type { SkillRegistry } from "./types.js";
import type { AppConfig } from "../config/schema.js";

/**
 * Load skills from plugin directories defined in config and register them.
 * TODO: implement — dynamically import skill modules from pluginDirs
 */
export async function loadSkills(
  _registry: SkillRegistry,
  _config: AppConfig
): Promise<void> {
  // TODO: implement — scan config.skills.pluginDirs, import each module,
  //       validate it exports a SkillDefinition, and call registry.register()
}
