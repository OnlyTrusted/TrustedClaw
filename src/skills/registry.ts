import type { SkillDefinition, SkillRegistry } from "./types.js";

/**
 * In-memory skill registry implementation.
 * TODO: implement persistence and hot-reload support
 */
export class InMemorySkillRegistry implements SkillRegistry {
  private readonly skills = new Map<string, SkillDefinition>();

  register(skill: SkillDefinition): void {
    // TODO: implement — validate skill shape before registering
    this.skills.set(skill.name, skill);
  }

  get(name: string): SkillDefinition {
    const skill = this.skills.get(name);
    if (!skill) {
      throw new Error(`Skill "${name}" is not registered`);
    }
    return skill;
  }

  list(): SkillDefinition[] {
    return Array.from(this.skills.values());
  }
}

/** Singleton skill registry instance. */
export const skillRegistry = new InMemorySkillRegistry();
