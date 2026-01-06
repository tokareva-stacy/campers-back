import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { connectMongoDB } from './db/connectMongoDB.js';
import campersRoutes from "./routes/campers.js";
import bookingsRoutes from "./routes/bookings.js";


dotenv.config();

const app = express();

// Middleware для обробки помилок
app.use((err, req, res, next) => {
  console.error(err);

  const isProd = process.env.NODE_ENV === "production";

  res.status(500).json({
    message: isProd
      ? "Something went wrong. Please try again later."
      : err.message,
  });
});

app.use(express.json());
app.use(cors());
app.use("/campers", campersRoutes);
app.use("/bookings", bookingsRoutes);

// підключення до MongoDB
await connectMongoDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  await connectMongoDB();
  console.log(`Server running on port ${PORT}`);
});