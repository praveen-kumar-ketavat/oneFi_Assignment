import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

function VariantSelector({ variants, currentSlug, baseSlug }) {
  return (
    <div className="flex gap-2 flex-wrap">
      {variants.map((v) => (
        <a
          key={v.slug}
          href={`/products/${baseSlug}?variant=${v.slug}`}
          className={`badge ${
            currentSlug === v.slug ? "ring-2 ring-white" : ""
          }`}
        >
          {v.name}
        </a>
      ))}
    </div>
  );
}

// ✅ Updated EmiCards so selection state is controlled from parent
function EmiCards({ plans, selected, onSelect }) {
  return (
    <div className="grid gap-3">
      {plans.map((p, i) => (
        <button
          key={i}
          className={`card text-left ${
            selected === i ? "ring-2 ring-white" : ""
          }`}
          onClick={() => onSelect(i)}
        >
          <div className="flex items-center justify-between">
            <div className="text-2xl font-semibold">
              ₹{p.monthly.toLocaleString("en-IN")}/mo
            </div>
            <div className="badge">{p.tenureMonths} months</div>
          </div>
          <div className="mt-1 text-sm text-zinc-300">
            Interest: {p.interestRate}%{" "}
            {p.cashback
              ? `• Cashback: ₹${p.cashback.toLocaleString("en-IN")}`
              : ""}
          </div>
        </button>
      ))}
    </div>
  );
}

export default function Product() {
  const { slug } = useParams();
  const [sp] = useSearchParams();
  const variantQuery = sp.get("variant") || null;

  const [product, setProduct] = useState(null);
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0); // ✅ Added

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE}/api/products/${slug}`)
      .then((r) => setProduct(r.data));
  }, [slug]);

  const variant = useMemo(() => {
    if (!product) return null;
    const i = product.variants.findIndex((v) => v.slug === variantQuery);
    return product.variants[i >= 0 ? i : 0];
  }, [product, variantQuery]);

  if (!product || !variant) return <div>Loading…</div>;

  const selectedPlan = variant.emiPlans[selectedPlanIndex]; // ✅ Handy shortcut

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="card product-image-box flex items-center justify-center p-6 bg-gradient-to-b from-zinc-800/40 to-black border border-zinc-700 rounded-2xl shadow-lg">
        <img
          src={variant.image}
          alt={product.name}
          className="product-img w-[85%] h-[85%] object-contain drop-shadow-2xl"
        />
      </div>

      <div className="card">
        <div className="text-sm text-zinc-400">{product.brand}</div>
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="mt-1 text-zinc-300">{product.description}</p>

        <div className="mt-6">
          <div className="text-sm text-zinc-400 mb-3">Variant</div>
          <VariantSelector
            variants={product.variants.map((v) => ({
              name: v.name,
              slug: v.slug,
            }))}
            currentSlug={variant.slug}
            baseSlug={product.baseSlug}
          />
        </div>

        <div className="mt-4">
          <div className="text-sm text-zinc-400">Pricing</div>
          <div className="mt-1 text-lg">
            <span className="font-semibold">
              ₹{variant.price.toLocaleString("en-IN")}
            </span>
            <span className="text-zinc-500 line-through ml-2">
              ₹{variant.mrp.toLocaleString("en-IN")}
            </span>
          </div>
        </div>

        <div className="mt-6">
          <div className="text-sm text-zinc-400 mb-2">EMI Plans</div>
          <EmiCards
            plans={variant.emiPlans}
            selected={selectedPlanIndex}
            onSelect={setSelectedPlanIndex}
          />
        </div>

        {/* ✅ Working Proceed Button */}
        <button
          className="btn w-full mt-6"
          onClick={() => {
            const params = new URLSearchParams({
              product: product.name,
              variant: variant.name,
              price: variant.price,
              mrp: variant.mrp,
              monthly: selectedPlan.monthly,
              tenure: selectedPlan.tenureMonths,
              interest: selectedPlan.interestRate,
              cashback: selectedPlan.cashback ?? 0,
              image: variant.image,
            });

            window.location.href = `/summary?${params.toString()}`;
          }}
        >
          Proceed with Selected Plan
        </button>
      </div>
    </div>
  );
}
