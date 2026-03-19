import express from "express";
import { createServer as createHttpServer } from "http";
import type { AppConfig } from "../config/schema.js";
import { authMiddleware } from "./auth.js";
import { healthHandler, readyHandler } from "./routes.health.js";
import { chatHandler } from "./routes.chat.js";
import { responsesHandler } from "./routes.responses.js";
import { attachWebSocket } from "./ws.js";

/**
 * Create and start the HTTP + WebSocket gateway server.
 * TODO: implement — error-handling middleware, graceful shutdown, CORS
 */
export async function startServer(config: AppConfig): Promise<void> {
  const app = express();

  app.use(express.json());
  app.use(authMiddleware(config.gateway.requireAuth));

  // Health / readiness
  app.get("/health", healthHandler);
  app.get("/ready", readyHandler);

  // API routes
  app.post("/v1/chat", chatHandler);
  app.post("/v1/responses", responsesHandler);

  // TODO: implement — 404 handler, global error handler

  const httpServer = createHttpServer(app);
  attachWebSocket(httpServer);

  const { port, host } = config.gateway;
  await new Promise<void>((resolve) => {
    httpServer.listen(port, host, () => {
      console.log(`trusted-claw listening on http://${host}:${port}`);
      resolve();
    });
  });
}
