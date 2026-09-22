import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Chatbot from "./components/Chatbot";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        <Route
          path="/categories"
          element={<h1>Categories</h1>}
        />

        <Route
          path="/about"
          element={<h1>About</h1>}
        />

        <Route
          path="/cart"
          element={<h1>Cart</h1>}
        />

        <Route
          path="/login"
          element={<h1>Login</h1>}
        />
      </Routes>

      <Chatbot />

    </BrowserRouter>
  );
}

export default App;