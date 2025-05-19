import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { add, remove } from '../redux/slice/CartSlice';

const Product = ({ post }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item Added To Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item Removed From Cart");
  };

  return (
    <div className="flex flex-col items-center justify-between p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="text-gray-700 font-semibold text-lg truncate w-full text-center">
        {post.title}
      </div>

      <div className="w-full text-gray-400 font-normal text-[14px] text-center">
        {post.description.split(" ").slice(0, 10).join(" ") + "..."}
      </div>

      <div className="h-[180px] flex items-center justify-center">
        <img src={post.image} alt="product" className="h-full w-auto object-contain" />
      </div>

      <div className="flex justify-between items-center w-full mt-4">
        <p className="text-green-600 font-semibold">${post.price}</p>
        {
          cart && cart.some((p) => p.id === post.id) ? (
            <button
              onClick={removeFromCart}
              className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition-all duration-200"
            >
              Remove Item
            </button>
          ) : (
            <button
              onClick={addToCart}
              className="text-sm bg-green-500 text-white px-3 py-1 rounded hover:bg-green-700 transition-all duration-200"
            >
              Add to Cart
            </button>
          )
        }
      </div>
    </div>
  );
};

export default Product;
