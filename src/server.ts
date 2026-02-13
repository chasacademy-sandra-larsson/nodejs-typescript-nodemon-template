import express from "express";
import { router as exampleRoutes } from "./routes/exampleRoutes";

const app = express();
const PORT = 3000;

// Middleware för att parsa JSON
app.use(express.json());

// Routes
app.use("/", exampleRoutes);

// Starta servern
app.listen(PORT, () => {
  console.log(`Servern körs på http://localhost:${PORT}`);
});
