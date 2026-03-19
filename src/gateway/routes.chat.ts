import type { Request, Response } from "express";

/**
 * POST /v1/chat — non-streaming chat completion endpoint.
 * Accepts { sessionId?, message } and returns { sessionId, reply }.
 * TODO: implement — validate body, call orchestrator, persist transcript
 */
export async function chatHandler(req: Request, res: Response): Promise<void> {
  // TODO: implement
  void req;
  res.status(501).json({ error: "Not implemented" });
}
