"use client";

import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";

export default function Header() {
  const cart = useCartStore((state) => state.cart);

  return (
    <header className="flex justify-between items-center p-4 bg-black">
      <Link href="/" className="text-xl font-bold">🛍️ MyCart</Link>
      <nav className="flex gap-4">
        <Link href="/">Products</Link>
        <Link href="/cart">Cart ({cart.length})</Link>
      </nav>
    </header>
  );
}
