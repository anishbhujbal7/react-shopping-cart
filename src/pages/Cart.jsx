import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="min-h-[90vh] flex flex-col md:flex-row justify-center items-start max-w-7xl mx-auto px-4 py-6 gap-8">
      {
        cart.length > 0 ? (
          <>
            <div className="flex flex-col flex-1 gap-4">
              {
                cart.map((item, index) => (
                  <CartItem key={item.id} item={item} itemIndex={index} />
                ))
              }
            </div>

            <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md sticky top-20 h-fit border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Cart Summary</h2>
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Total Items:</span> {cart.length}
              </p>
              <p className="text-gray-800 text-lg font-bold mb-4">
                Total Amount: <span className="text-green-600">${totalAmount.toFixed(2)}</span>
              </p>
              <button
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition duration-300"
              >
                Checkout Now
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center text-center gap-6 mt-20">
            <h1 className="text-2xl font-semibold text-gray-700">Your Cart is Empty</h1>
            <NavLink to="/">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition duration-300">
                Shop Now
              </button>
            </NavLink>
          </div>
        )
      }
    </div>
  );
};

export default Cart;
