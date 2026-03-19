import type { Request, Response, NextFunction } from "express";
import { AuthError } from "../utils/errors.js";

/**
 * Express middleware that validates the Authorization header (Bearer token).
 * When requireAuth is false this middleware passes all requests through.
 * TODO: implement — JWT verification, API-key lookup, rate limiting
 */
export function authMiddleware(requireAuth: boolean) {
  return (req: Request, _res: Response, next: NextFunction): void => {
    if (!requireAuth) {
      next();
      return;
    }
    // TODO: implement — extract + verify Bearer token
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      next(new AuthError("Missing Authorization header"));
      return;
    }
    // TODO: implement — validate token
    next();
  };
}
