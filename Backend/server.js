import express from "express";
import cors from "cors";
import "dotenv/config";
import songRouter from "./src/routes/songRoute.js";

// App Config
const app = express();
const port = process.env.PORT || 3_000;

// Middlewares
// This line sets up middleware in the Express application to parse incoming requests with JSON payloads
app.use(express.json());
app.use(cors());

// Initializing Routes
app.use("/api/song", songRouter);

app.get("/", (req, res) => {
  res.send("API is Working");
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
