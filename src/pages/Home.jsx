import React, { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';
import Product from '../components/Product';

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  async function fetchProductData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div className="min-h-[90vh] flex justify-center items-center px-4 py-6">
      {
        loading ? (
          <div className="flex justify-center items-center h-64 w-full">
            <Spinner />
          </div>
        ) : products.length > 0 ? (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto animate-fade-in">
            {products.map((product) => (
              <div className="transition transform hover:scale-105 duration-300">
                <Product key={product.id} post={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 text-lg">No data found.</div>
        )
      }
    </div>
  );
};

export default Home;
