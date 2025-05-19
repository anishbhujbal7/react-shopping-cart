import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the styles
import Home from "./pages/Home"; // Your pages/components
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
// Other imports as needed

function App() {
  return (
      <div>
        
        <div className="App">
          <div className="bg-slate-900">
            <Navbar />
          </div>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            {/* Other routes as needed */}
          </Routes>
          
          
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>

      </div>
    
  );
}

export default App;