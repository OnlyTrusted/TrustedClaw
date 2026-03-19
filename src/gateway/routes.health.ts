import type { Request, Response } from "express";

/**
 * GET /health — liveness check.
 * Returns 200 OK when the process is running.
 * TODO: implement — add deeper dependency checks if needed
 */
export function healthHandler(_req: Request, res: Response): void {
  // TODO: implement
  res.json({ status: "ok" });
}

/**
 * GET /ready — readiness check.
 * Returns 200 OK when the server is ready to accept traffic.
 * TODO: implement — verify config loaded, providers initialised, storage accessible
 */
export function readyHandler(_req: Request, res: Response): void {
  // TODO: implement
  res.json({ status: "ready" });
}
