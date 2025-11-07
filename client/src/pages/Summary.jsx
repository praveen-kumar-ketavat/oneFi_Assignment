import { useSearchParams } from "react-router-dom";

export default function Summary() {
  const [params] = useSearchParams();

  const product = params.get("product");
  const variant = params.get("variant");
  const price = params.get("price");
  const mrp = params.get("mrp");
  const monthly = params.get("monthly");
  const tenure = params.get("tenure");
  const interest = params.get("interest");
  const cashback = params.get("cashback");
  const image = params.get("image");

  return (
    <div className="card max-w-3xl mx-auto p-8 rounded-2xl">
      <h1 className="text-3xl font-bold mb-8">Plan Summary</h1>

      <div className="flex items-center gap-8">
        <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-700 flex items-center justify-center w-48 h-48">
          <img
            src={image}
            alt={product}
            className="w-full h-full object-contain drop-shadow-xl"
          />
        </div>

        <div className="flex-1">
          <div className="text-sm text-zinc-400 mb-1">{variant}</div>
          <div className="text-2xl font-semibold">{product}</div>

          <div className="mt-3 text-base text-zinc-300">
            Price:
            <span className="ml-1 font-semibold">
              ₹{Number(price).toLocaleString()}
            </span>
            <span className="ml-2 line-through text-zinc-500">
              ₹{Number(mrp).toLocaleString()}
            </span>
          </div>

          <div className="mt-5 p-4 rounded-xl bg-zinc-900 border border-zinc-700 shadow-sm">
            <div className="text-xl font-semibold">
              ₹{Number(monthly).toLocaleString()}/month
            </div>
            <div className="text-sm text-zinc-300 mt-1">
              Tenure: {tenure} months • Interest: {interest}%{" "}
              {cashback > 0 && `• Cashback: ₹${cashback}`}
            </div>
          </div>
        </div>
      </div>

      <p className="text-xs text-zinc-500 mt-8 text-center">
        This is a demo summary screen.
      </p>
    </div>
  );
}
