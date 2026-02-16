// --- Express-version (kommenterad) ---
// import express, { Request, Response } from "express";
//
// const app = express();
// const PORT = 3000;
//
// // Middleware för att parsa JSON
// app.use(express.json());
//
// // Routes
// app.get("/", (req: Request, res: Response) => {
//   res.json({ message: "Hello from Express + TypeScript!" });
// });
//
// // Starta servern
// app.listen(PORT, () => {
//   console.log(`Servern körs på http://localhost:${PORT}`);
// });

// --- Node.js inbyggd http ---
import { createServer, IncomingMessage, ServerResponse } from "http";

const PORT = 3000;

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  // Root route
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Hello from Node.js + TypeScript!" }));
    return;
  }

  // 404 för övriga routes
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Not found" }));
});

server.listen(PORT, () => {
  console.log(`Servern körs på http://localhost:${PORT}`);
});
