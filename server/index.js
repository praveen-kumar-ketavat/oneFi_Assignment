import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

await mongoose.connect(process.env.MONGO_URI);
console.log("✅ MongoDB connected");

import productRoutes from "./routes/products.js";
app.use("/api/products", productRoutes);

app.listen(process.env.PORT, () =>
  console.log(`🚀 API running at http://localhost:${process.env.PORT}`)
);
