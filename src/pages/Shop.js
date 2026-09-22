import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Shop.css";

function Shop() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  // Real product images for the screenshot-ready store
  const productImages = {
    "Blush Tote Bag":
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85",

    "Olive Green Hoodie":
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=85",

    "Olive Wireless Headphones":
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85",

    "Minimal Sneakers":
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",

    "Rose Skincare Set":
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=85",
  };

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products/")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) =>
            product.category.toLowerCase() ===
            selectedCategory.toLowerCase()
        );

  return (
    <div className="shop-page">

      {/* SHOP HEADER */}
      <section className="shop-header">
        <p>Find something you love ✨</p>

        <h1>Shop Everything</h1>

        <span>
          Browse our little collection of everyday favourites.
        </span>
      </section>

      <div className="shop-content">

        {/* FILTERS */}
        <aside className="shop-filters">

          <h3>Categories</h3>

          <button
            className={selectedCategory === "All" ? "active" : ""}
            onClick={() => setSelectedCategory("All")}
          >
            All Products
          </button>

          <button
            className={selectedCategory === "Fashion" ? "active" : ""}
            onClick={() => setSelectedCategory("Fashion")}
          >
            Fashion
          </button>

          <button
            className={selectedCategory === "Beauty" ? "active" : ""}
            onClick={() => setSelectedCategory("Beauty")}
          >
            Beauty
          </button>

          <button
            className={selectedCategory === "Electronics" ? "active" : ""}
            onClick={() => setSelectedCategory("Electronics")}
          >
            Electronics
          </button>

          <button
            className={selectedCategory === "Footwear" ? "active" : ""}
            onClick={() => setSelectedCategory("Footwear")}
          >
            Footwear
          </button>

        </aside>

        {/* PRODUCTS */}
        <section className="products-grid">

          {loading ? (
            <p>Loading products...</p>
          ) : filteredProducts.length === 0 ? (
            <p>No products found.</p>
          ) : (
            filteredProducts.map((product) => (

              <Link
                to={`/product/${product.id}`}
                className="product-card"
                key={product.id}
              >

                <div className="product-image">

                  <img
                    src={
                      productImages[product.name] ||
                      product.image
                    }
                    alt={product.name}
                  />

                </div>

                <div className="product-info">

                  <p>{product.category}</p>

                  <h3>{product.name}</h3>

                  <span>
                    ₹{product.price}
                  </span>

                </div>

              </Link>

            ))
          )}

        </section>

      </div>
    </div>
  );
}

export default Shop;