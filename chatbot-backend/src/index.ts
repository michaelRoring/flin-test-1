import express from "express";
import cors from "cors";
import config from "./config";
import chatRoutes from "./routes/chatRoutes";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/", chatRoutes);

// Start server
app.listen(config.port, () => {
  console.log(`Backend server listening on http://localhost:${config.port}`);
});
