import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <div className="bg-white shadow rounded-lg p-4 flex flex-col justify-between">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="h-40 w-full object-contain mb-2"
        />
        <h2 className="text-sm font-semibold line-clamp-2">{product.title}</h2>
      </Link>
      <div className="mt-2 flex justify-between items-center">
        <span className="text-green-600 font-bold">${product.price}</span>
        <span className="text-yellow-500 text-sm">
          ⭐ {product.rating?.rate || 0}
        </span>
      </div>
    </div>
  );
}
