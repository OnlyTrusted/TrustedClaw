import type { SkillDefinition } from "../types.js";

/**
 * Built-in "calculator" skill — evaluates simple arithmetic expressions.
 * TODO: implement safe expression evaluation (no eval)
 */
export const calculatorSkill: SkillDefinition = {
  name: "calculator",
  description:
    "Evaluates a simple arithmetic expression and returns the numeric result.",
  parameters: {
    type: "object",
    properties: {
      expression: {
        type: "string",
        description:
          "Arithmetic expression to evaluate (e.g. '2 + 3 * 4').",
      },
    },
    required: ["expression"],
  },
  async execute(_args) {
    // TODO: implement — parse and evaluate the expression safely
    throw new Error("Not implemented");
  },
};
