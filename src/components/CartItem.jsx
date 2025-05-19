import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slice/CartSlice';
import { toast } from 'react-toastify';

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item removed");
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between border-b-2 border-gray-300 p-4 gap-4 transition-all duration-300 hover:bg-gray-50 rounded-md">
      
      <div className="w-[150px] h-[150px] flex justify-center items-center">
        <img src={item.image} alt="product" className="h-full w-auto object-contain" />
      </div>

      <div className="flex flex-col flex-1 px-4 space-y-2">
        <h1 className="text-lg font-semibold text-gray-800">{item.title}</h1>
        <p className="text-sm text-gray-500">{item.description.split(" ").slice(0, 15).join(" ") + "..."}</p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-green-600 font-bold">${item.price}</span>
          <button
            onClick={removeFromCart}
            className="text-red-500 hover:text-red-700 transition duration-200"
            title="Remove from cart"
          >
            <RiDeleteBin6Line size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
