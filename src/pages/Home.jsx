import { useEffect, useState } from 'react';
import { fetchAllProducts, fetchCategories } from '../utils/api';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [sortBy, setSortBy] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });

  const [currentPage, setCurrentPage] = useState(1);
  const PRODUCTS_PER_PAGE = 10;

  useEffect(() => {
    (async () => {
      setProducts(await fetchAllProducts());
      setCategories(await fetchCategories());
    })();
  }, []);

  // FILTER
  const filtered = products.filter((p) => {
    const matchCategory = selectedCategory ? p.category === selectedCategory : true;
    const matchMin = priceRange.min === '' || p.price >= priceRange.min;
    const matchMax = priceRange.max === '' || p.price <= priceRange.max;
    return matchCategory && matchMin && matchMax;
  });

  // SORT
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'price') return a.price - b.price;
    if (sortBy === 'rating') return b.rating.rate - a.rating.rate;
    if (sortBy === 'name') return a.title.localeCompare(b.title);
    return 0;
  });

  // PAGINATION
  const totalPages = Math.ceil(sorted.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const currentProducts = sorted.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, priceRange, sortBy]);

  const clearFilters = () => {
    setSelectedCategory('');
    setPriceRange({ min: '', max: '' });
  };

  return (
    <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row gap-6">
      {/* Filter Sidebar */}
      <FilterSidebar
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        priceRange={priceRange}
        onPriceRangeChange={setPriceRange}
        onClear={clearFilters}
      />

      {/* Product Grid */}
      <div className="flex-1">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Products</h1>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border px-2 py-1 rounded"
          >
            <option value="">Sort by</option>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
            <option value="name">Name</option>
          </select>
        </div>

        {currentProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {currentProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 border rounded ${
                    currentPage === i + 1 ? 'bg-blue-500 text-white' : ''
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
     }
