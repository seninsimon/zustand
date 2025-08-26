"use client";

import { useCartStore } from "@/store/useCartStore";

type ProductProps = {
  id: number;
  name: string;
  price: number;
};

export default function ProductCard({ id, name, price }: ProductProps) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="border p-4 rounded shadow-md">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-600">₹{price}</p>
      <button
        onClick={() => addToCart({ id, name, price })}
        className="mt-2 px-3 py-1 bg-blue-500 text-white rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}
