import express from "express";
import Product from "../models/Product.js";
const router = express.Router();

router.get("/", async (_req, res) => {
  const products = await Product.find({}).lean();
  res.json(products);
});

router.get("/:slug", async (req, res) => {
  const product = await Product.findOne({ baseSlug: req.params.slug }).lean();
  if (!product) return res.status(404).json({ error: "Not found" });
  res.json(product);
});

export default router;
