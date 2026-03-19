import type { Request, Response } from "express";

/**
 * POST /v1/responses — streaming SSE response endpoint.
 * Accepts { sessionId?, message } and streams GatewayEvents as SSE.
 * TODO: implement — validate body, call orchestrator.stream(), pipe to SSE
 */
export async function responsesHandler(
  req: Request,
  res: Response
): Promise<void> {
  // TODO: implement — set Content-Type: text/event-stream, write SSE frames
  void req;
  res.status(501).json({ error: "Not implemented" });
}
