"use client";

import { useParams } from "next/navigation";
import { products } from "@/data/product";
import { useCartStore } from "@/store/useCartStore";

export default function ProductPage() {
  const params = useParams();
  const product = products.find((p) => p.id === Number(params.id));
  const addToCart = useCartStore((state) => state.addToCart);

  if (!product) return <p>Product not found</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-gray-700">Price: ₹{product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-2 px-4 py-2 bg-green-600 text-white rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}
