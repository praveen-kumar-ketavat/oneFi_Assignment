import mongoose from "mongoose";

const EmiPlanSchema = new mongoose.Schema(
  {
    monthly: Number,
    tenureMonths: Number,
    interestRate: Number,
    cashback: { type: Number, default: 0 },
  },
  { _id: false }
);

const VariantSchema = new mongoose.Schema(
  {
    name: String, // e.g., "USB-C Case" / "Lightning Case" / "Black" / "Silver"
    slug: String, // e.g., "usbc" / "black"
    price: Number,
    mrp: Number,
    image: String,
    emiPlans: [EmiPlanSchema],
  },
  { _id: false }
);

const ProductSchema = new mongoose.Schema({
  name: String, // "AirPods Pro 2"
  brand: String, // "Apple"
  baseSlug: String, // "airpods-pro-2"
  description: String,
  variants: [VariantSchema],
});

export default mongoose.model("Product", ProductSchema);
