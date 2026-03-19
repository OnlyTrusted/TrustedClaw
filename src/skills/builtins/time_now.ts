import type { SkillDefinition } from "../types.js";
import { now } from "../../utils/time.js";

/**
 * Built-in "time_now" skill — returns the current UTC time.
 * TODO: implement execute handler with timezone support
 */
export const timeNowSkill: SkillDefinition = {
  name: "time_now",
  description: "Returns the current UTC date and time as an ISO 8601 string.",
  parameters: {
    type: "object",
    properties: {},
  },
  async execute(_args) {
    // TODO: implement — optionally accept timezone parameter
    return { output: now() };
  },
};
