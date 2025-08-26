"use client";

import { useCartStore } from "@/store/useCartStore";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCartStore();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty 🛒</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between border p-3 rounded">
              <div>
                <h2>{item.name}</h2>
                <p>₹{item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="px-3 py-1 bg-red-500 text-white rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            onClick={clearCart}
            className="mt-4 px-4 py-2 bg-black text-white rounded"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}
