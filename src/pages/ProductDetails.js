import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Same product images used on the Shop page
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
    fetch(`http://127.0.0.1:8000/api/products/${id}/`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="product-loading">Loading product...</div>;
  }

  if (!product) {
    return <div className="product-loading">Product not found.</div>;
  }

  const productImage =
    productImages[product.name] || product.image;

  return (
    <div className="product-details-page">

      <Link to="/shop" className="back-link">
        ← Back to Shop
      </Link>

      <div className="product-details">

        {/* PRODUCT IMAGE */}
        <div className="details-image">
          <img
            src={productImage}
            alt={product.name}
          />
        </div>

        {/* PRODUCT INFORMATION */}
        <div className="details-content">

          <p className="details-category">
            {product.category}
          </p>

          <h1>{product.name}</h1>

          <h2>₹{product.price}</h2>

          <p className="details-description">
            {product.description}
          </p>

          <p className="stock">
            {product.stock > 0
              ? `${product.stock} items available`
              : "Out of stock"}
          </p>

          <button
            className="add-cart-button"
            disabled={product.stock === 0}
          >
            Add to Cart
          </button>

        </div>

      </div>
    </div>
  );
}

export default ProductDetails;