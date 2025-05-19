import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./slice/CartSlice"; // Import the default export (reducer)

export const store = configureStore({
    reducer: {
        cart: CartReducer
    }
})