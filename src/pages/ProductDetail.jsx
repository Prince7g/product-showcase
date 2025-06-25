import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchSingleProduct } from '../utils/api';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setProduct(await fetchSingleProduct(id));
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) return <div className="container mx-auto px-4 py-6">Loading…</div>;
  if (!product) return <div className="container mx-auto px-4 py-6">Not found.</div>;

  return (
    <div className="container mx-auto px-4 py-6">
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">← Back</Link>

      <div className="flex flex-col md:flex-row gap-6 bg-white shadow rounded-lg p-6">
        <img
          src={product.image}
          alt={product.title}
          className="w-full md:w-1/3 object-contain h-64"
        />

        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-green-600 text-xl font-semibold mb-2">${product.price}</p>
          <p className="text-sm text-gray-500 mb-4">
            ⭐ {product.rating.rate} ({product.rating.count} reviews)
          </p>
          <p className="mb-6">{product.description}</p>

          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
            }
