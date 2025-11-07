import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import Product from "./models/Product.js";

const products = [
  {
    name: "AirPods Pro (2nd Gen)",
    brand: "Apple",
    baseSlug: "airpods-pro-2",
    description:
      "Active Noise Cancellation, Adaptive Audio, USB-C MagSafe case.",
    variants: [
      {
        name: "Dusty Black",
        slug: "dusty-black",
        price: 24900,
        mrp: 29900,
        image: "/images/airpods-pro-2-dusty-black.avif",
        emiPlans: [
          { monthly: 1037, tenureMonths: 24, interestRate: 0, cashback: 500 },
          { monthly: 2200, tenureMonths: 12, interestRate: 10 },
        ],
      },
      {
        name: "White",
        slug: "white",
        price: 22900,
        mrp: 27900,
        image: "/images/airpods-pro-2-white.jpg",
        emiPlans: [
          { monthly: 958, tenureMonths: 24, interestRate: 0 },
          { monthly: 2050, tenureMonths: 12, interestRate: 10.5 },
        ],
      },
    ],
  },
  {
    name: "Sony WH-1000XM5",
    brand: "Sony",
    baseSlug: "sony-wh-1000xm5",
    description: "Flagship ANC over-ear headphones with premium comfort.",
    variants: [
      {
        name: "Black",
        slug: "black",
        price: 29990,
        mrp: 34990,
        image: "/images/sony-wh1000xm5-black.jpg",
        emiPlans: [
          { monthly: 1249, tenureMonths: 24, interestRate: 0, cashback: 1000 },
          { monthly: 3200, tenureMonths: 12, interestRate: 8 },
        ],
      },
      {
        name: "Silver",
        slug: "silver",
        price: 29990,
        mrp: 34990,
        image: "/images/sony-wh1000xm5-silver.avif",
        emiPlans: [
          { monthly: 1249, tenureMonths: 24, interestRate: 0 },
          { monthly: 3300, tenureMonths: 12, interestRate: 8.5 },
        ],
      },
    ],
  },
  {
    name: "Bose QuietComfort Ultra",
    brand: "Bose",
    baseSlug: "bose-qc-ultra",
    description: "Immersive audio with adaptive ANC and premium build.",
    variants: [
      {
        name: "Black",
        slug: "black",
        price: 33500,
        mrp: 38500,
        image: "/images/bose-qc-ultra-black.jpg",
        emiPlans: [
          { monthly: 1395, tenureMonths: 24, interestRate: 0, cashback: 750 },
          { monthly: 3800, tenureMonths: 12, interestRate: 11 },
        ],
      },
      {
        name: "White Smoke",
        slug: "white-smoke",
        price: 33500,
        mrp: 38500,
        image: "/images/bose-qc-ultra-white-smoke.avif",
        emiPlans: [
          { monthly: 1395, tenureMonths: 24, interestRate: 0 },
          { monthly: 3850, tenureMonths: 12, interestRate: 11.5 },
        ],
      },
    ],
  },
];

async function run() {
  await mongoose.connect(process.env.MONGO_URI);
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log("✅ Seeded", products.length, "products");
  await mongoose.disconnect();
}
run().catch((err) => {
  console.error(err);
  process.exit(1);
});
