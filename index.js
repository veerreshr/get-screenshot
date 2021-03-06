import express from "express";
import { config } from "dotenv";
// import connectDB from "./config/db.js";
// import movieRoutes from "./routes/movieRoutes.js";
// import path from "path";
import screenshotRoutes from "./routes/screenshot.js";
import morgan from "morgan";

config();

// connectDB();

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use("/api/screenshot", screenshotRoutes);

app.get("/", (req, res) => {
  res.send("API is running....");
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
