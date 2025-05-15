import express from "express";
import cors from "cors";
import config from "./config";
import chatRoutes from "./routes/chatRoutes";

const app = express();

const allowedOrigins = [
  "localhost:3000",
  "localhost:3001",
  "https://flin-test-1.pages.dev/",
];

const corsOptions: cors.CorsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg =
        "The CORS policy for this site does not allow access from the specified Origin.";
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  credentials: true,
};

app.use(cors());
app.use(express.json());

app.use("/", chatRoutes);

app.listen(config.port, () => {
  console.log(`Backend server listening on http://localhost:${config.port}`);
});
