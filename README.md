# 🛒 React Shopping Cart

![License](https://img.shields.io/github/license/anishbhujbal7/react-shopping-cart)
![GitHub last commit](https://img.shields.io/github/last-commit/anishbhujbal7/react-shopping-cart)
![Live](https://img.shields.io/badge/Live%20Demo-Click%20Here-brightgreen?style=flat&logo=vercel)

A responsive, modern **Shopping Cart** web app built using **React**, **Tailwind CSS**, and **Redux Toolkit**.

### 🚀 [Live Demo](https://anishbhujbal7.github.io/react-shopping-cart)

---

## 📌 Features

- 🛍️ Add, remove, and update items in the cart
- 🧠 Global state management with **Redux Toolkit**
- 🛒 `cartSlice` handles the entire cart logic
- 🌐 Client-side routing with **React Router v6+**
- ✨ Stylish UI with **Tailwind CSS**
- 🔔 Toast notifications using **React Toastify**
- 💾 Persistent cart state (if implemented with localStorage)
- 🎯 Mobile-responsive layout

---

## 🧠 Redux Overview (`cartSlice`)

The cart's state and logic are centralized using Redux Toolkit in `cartSlice.js`.

### Key functionalities in `cartSlice`:

| Function         | Description                                              |
|------------------|----------------------------------------------------------|
| `addToCart()`    | Adds a product to the cart or increases quantity         |
| `removeFromCart()` | Removes an item completely from the cart               |
| `increaseQty()`  | Increases the quantity of a specific item                |
| `decreaseQty()`  | Decreases quantity, removing the item if it reaches 0    |
| `clearCart()`    | Empties the entire cart                                  |
| `getTotal()`     | Calculates total price and quantity                      |

This logic enables scalable and centralized control of cart operations across your app using the Redux store.

---

## 📸 Screenshots

<!-- Add screenshots if you have any -->
<!-- ![Screenshot](./screenshots/cart.png) -->

---

## 🛠️ Tech Stack

- **React.js**
- **Redux Toolkit**
- **Tailwind CSS**
- **React Router DOM**
- **React Toastify**
- **gh-pages** (for GitHub Pages deployment)

---

## 🚧 Setup Instructions

1. **Clone the repo**
   ```bash
   git clone https://github.com/anishbhujbal7/react-shopping-cart.git
   cd react-shopping-cart
npm install
npm start
npm run deploy

### folder structure
react-shopping-cart/
├── public/
├── src/
│   ├── components/       # UI components
│   ├── pages/            # Route-based pages
│   ├── redux/            # Redux setup & cartSlice.js
│   └── App.jsx
├── tailwind.config.js
├── package.json
└── README.md
