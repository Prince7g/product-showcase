'use client';

import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function CartPage() {
  const { cartItems, getTotalPrice } = useCart();

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 border rounded-lg shadow-sm"
            >
              <div className="flex items-center space-x-4">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p>₹{item.price} × {item.quantity}</p>
                </div>
              </div>
              <p className="font-bold">₹{(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
          <div className="text-right font-bold text-xl mt-4">
            Total: ₹{getTotalPrice().toFixed(2)}
          </div>
        </div>
      )}

      <Link href="/" className="mt-6 inline-block text-blue-500 underline">
        ← Back to Home
      </Link>
    </div>
  );
                                          }
