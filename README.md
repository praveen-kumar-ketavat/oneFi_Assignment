# 1Fi Store – Zero-Cost EMI Product Demo  
A full-stack web application that simulates purchasing premium products using easy EMI plans.  
Users can browse products, switch variants, compare EMI options, and view a final purchase summary.

This project is built as part of the **SDE-1 Full Stack Assignment for 1Fi**.

---

## 🚀 Live Demo Links

| Service | URL |
|--------|-----|
| **Frontend (Vercel)** | https://one-fi-assignment.vercel.app |
| **Backend (Render)** | https://onefi-assignment.onrender.com |
| **Demo Video** | https://drive.google.com/file/d/1EZP9L6E8gUWukKiod6as4EB6QXqPEX71/view?usp=drive_link |

---

## 🛠 Tech Stack

| Layer | Technology |
|------|------------|
| Frontend | React + Vite + Tailwind CSS + Axios |
| Backend | Node.js + Express.js |
| Database | MongoDB Atlas + Mongoose |
| Deployment | Vercel (Frontend) + Render (Backend) |

---

## 📂 Project Structure

onefi-assignment/
│
├─ client/ # React Frontend
│ ├─ src/
│ ├─ public/
│ └─ vite.config.js
│
├─ server/ # Express + MongoDB Backend
│ ├─ models/
│ │ └─ Product.js
│ ├─ seed.js # Database Seeder Script
│ ├─ index.js # API Server
│ └─ .env # Environment Variables (not committed)
│
└─ README.md


---

## ⚙️ Setup & Run Instructions

### 1. Clone the Repository
git clone https://github.com/<your-username>/onefi-emi-store.git
cd onefi-emi-store

### Backend Setup
cd server
npm install

### Create a .env file inside server/ and add:
MONGO_URI=your-mongodb-atlas-uri
PORT=5000

### Seed the database:
node seed.js

### Start backend:
node index.js

### Frontend Setup
cd ../client
npm install

### Create a .env file inside client/:
VITE_API_BASE=https://onefi-assignment.onrender.com

### Run frontend locally:
npm run dev

## API Endpoints
Method	Endpoint	Description

https://onefi-assignment.onrender.com/api/products
https://onefi-assignment.onrender.com/api/products/airpods-pro-2
https://onefi-assignment.onrender.com/api/products/sony-wh-1000xm5
https://onefi-assignment.onrender.com/api/products/bose-qc-ultra

Example Response 
{"_id":"690df65a321a09cf16af0064","name":"Bose QuietComfort Ultra","brand":"Bose","baseSlug":"bose-qc-ultra","description":"Immersive audio with adaptive ANC and premium build.","variants":[{"name":"Black","slug":"black","price":33500,"mrp":38500,"image":"/images/bose-qc-ultra-black.jpg","emiPlans":[{"monthly":1395,"tenureMonths":24,"interestRate":0,"cashback":750},{"monthly":3800,"tenureMonths":12,"interestRate":11,"cashback":0}]},{"name":"White Smoke","slug":"white-smoke","price":33500,"mrp":38500,"image":"/images/bose-qc-ultra-white-smoke.avif","emiPlans":[{"monthly":1395,"tenureMonths":24,"interestRate":0,"cashback":0},{"monthly":3850,"tenureMonths":12,"interestRate":11.5,"cashback":0}]}],"__v":0}


## Database Schema
Product Schema
{
  name: String,
  brand: String,
  baseSlug: String,
  description: String,
  variants: [VariantSchema]
}
Variant Schema
{
  name: String,
  slug: String,
  price: Number,
  mrp: Number,
  image: String,
  emiPlans: [EmiPlanSchema]
}
EmiPlan Schema
{
  monthly: Number,
  tenureMonths: Number,
  interestRate: Number,
  cashback: Number
}

## Seed Data
The seed script is located at:
server/seed.js

To re-seed:
node seed.js

## Features
Clean and minimal UI

Product listing with variant options

EMI comparison between plans

Final checkout summary screen

Fully responsive layout

API-driven data

## Author
Developed by Praveen Kumar
Frontend & Full Stack Developer (React, Node.js, MongoDB)
