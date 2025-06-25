// src/components/MagentoDemo.jsx
import { useEffect, useState } from 'react';
import { request, gql } from 'graphql-request';

const MAGENTO_ENDPOINT = 'https://venia.magento.com/graphql';

const PRODUCTS_QUERY = gql`
  {
    products(search: "", pageSize: 3) {
      items {
        id
        name
        sku
        small_image {
          url
        }
        price_range {
          minimum_price {
            regular_price {
              value
              currency
            }
          }
        }
      }
    }
  }
`;

export default function MagentoDemo() {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await request(MAGENTO_ENDPOINT, PRODUCTS_QUERY);
        setData(res.products.items);
      } catch (e) {
        setErr(e.message);
      }
    })();
  }, []);

  if (err) return <p className="text-red-600">Magento error: {err}</p>;
  if (!data) return <p>Loading Magento products…</p>;

  return (
    <div className="my-8 border rounded-lg p-4">
      <h2 className="text-xl font-bold mb-2">
        Magento 2 Demo (Venia Store)
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {data.map((p) => (
          <div key={p.id} className="bg-white shadow p-2 rounded">
            <img
              src={p.small_image.url}
              alt={p.name}
              className="h-32 w-full object-contain mb-1"
            />
            <p className="text-sm line-clamp-2">{p.name}</p>
            <p className="font-semibold">
              {p.price_range.minimum_price.regular_price.value}{' '}
              {p.price_range.minimum_price.regular_price.currency}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
        }
