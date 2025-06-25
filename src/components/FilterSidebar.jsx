import { useEffect, useState } from 'react';

export default function FilterSidebar({
  categories,
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  onClear,
}) {
  const [minPrice, setMinPrice] = useState(priceRange.min);
  const [maxPrice, setMaxPrice] = useState(priceRange.max);

  useEffect(() => {
    setMinPrice(priceRange.min);
    setMaxPrice(priceRange.max);
  }, [priceRange]);

  const apply = () =>
    onPriceRangeChange({ min: Number(minPrice), max: Number(maxPrice) });

  return (
    <aside className="w-full sm:w-60 bg-white shadow rounded-lg p-4 mb-4 sm:mb-0">
      <h3 className="font-semibold mb-2">Filters</h3>

      {/* Category */}
      <div className="mb-4">
        <label className="block mb-1">Category</label>
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="w-full border rounded px-2 py-1"
        >
          <option value="">All</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c.charAt(0).toUpperCase() + c.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Price */}
      <div className="mb-4">
        <label className="block mb-1">Price range</label>
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="Min"
            className="w-full border rounded px-2 py-1"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <span>-</span>
          <input
            type="number"
            placeholder="Max"
            className="w-full border rounded px-2 py-1"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
        <button onClick={apply} className="w-full bg-blue-500 text-white mt-2 py-1 rounded">
          Apply
        </button>
      </div>

      <button onClick={onClear} className="w-full border py-1 rounded">
        Clear filters
      </button>
    </aside>
  );
          }
