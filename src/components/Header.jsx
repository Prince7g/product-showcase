import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { cartItems } = useCart();

  return (
    <header className="bg-white shadow sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">
          🛍️ Product Showcase
        </Link>
        <nav>
          <ul className="flex gap-4 items-center">
            <li>
              <Link to="/" className="hover:text-blue-500">Home</Link>
            </li>
            <li className="relative">
              <Link to="/cart" className="hover:text-blue-500">
                Cart 🛒
              </Link>
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-1">
                  {cartItems.length}
                </span>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
