import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE}/api/products`)
      .then((r) => setProducts(r.data));
  }, []);

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {products.map((p) => {
        const v = p.variants?.[0];
        return (
          <a
            key={p.baseSlug}
            href={`/products/${p.baseSlug}`}
            className="card block"
          >
            <div className="card product-card">
              <div className="w-full h-56 bg-zinc-900 rounded-xl flex items-center justify-center overflow-hidden">
                <img
                  src={v?.image}
                  alt={p.name}
                  className="max-h-full max-w-full object-contain drop-shadow-xl"
                />
              </div>
            </div>

            <div className="mt-3">
              <div className="text-sm text-zinc-400">{p.brand}</div>
              <div className="text-lg font-semibold">{p.name}</div>
              <div className="mt-1 text-sm">
                ₹{v?.price?.toLocaleString("en-IN")}
                <span className="text-zinc-500 line-through ml-2">
                  ₹{v?.mrp?.toLocaleString("en-IN")}
                </span>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}
