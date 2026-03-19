import type { SkillDefinition } from "../types.js";

/**
 * Built-in "echo" skill — echoes its input back as output.
 * TODO: implement execute handler
 */
export const echoSkill: SkillDefinition = {
  name: "echo",
  description: "Echoes the provided text back as the skill output.",
  parameters: {
    type: "object",
    properties: {
      text: { type: "string", description: "The text to echo." },
    },
    required: ["text"],
  },
  async execute(args) {
    // TODO: implement
    return { output: args["text"] ?? "" };
  },
};
