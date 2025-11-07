import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Product from "./pages/Product.jsx";
import Summary from "./pages/Summary.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/products/:slug" element={<Product />} />
        <Route path="/summary" element={<Summary />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
