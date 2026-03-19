import { WebSocketServer, WebSocket } from "ws";
import type { IncomingMessage } from "http";
import type { Server } from "http";

/**
 * Attach a WebSocket upgrade handler to an existing HTTP server.
 * TODO: implement — session binding, message routing, heartbeat
 */
export function attachWebSocket(httpServer: Server): WebSocketServer {
  // TODO: implement — configure per-path routing, auth handshake
  const wss = new WebSocketServer({ server: httpServer });

  wss.on("connection", (ws: WebSocket, _req: IncomingMessage) => {
    // TODO: implement — parse sessionId from URL, route messages to orchestrator
    ws.on("message", (_data) => {
      // TODO: implement
    });

    ws.on("close", () => {
      // TODO: implement — clean up session binding
    });

    ws.on("error", (_err) => {
      // TODO: implement
    });
  });

  return wss;
}
