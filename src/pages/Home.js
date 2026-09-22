import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const categories = [
    {
      name: "Fashion",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=85",
    },
    {
      name: "Beauty",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=85",
    },
    {
      name: "Electronics",
      image:
        "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=700&q=85",
    },
    {
      name: "Footwear",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=85",
    },
  ];

  const products = [
    {
      name: "Blush Tote Bag",
      price: "₹899",
      category: "Fashion",
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=85",
    },
    {
      name: "Olive Green Hoodie",
      price: "₹1,499",
      category: "Fashion",
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=85",
    },
    {
      name: "Olive Wireless Headphones",
      price: "₹2,499",
      category: "Electronics",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=85",
    },
    {
      name: "Minimal Sneakers",
      price: "₹3,299",
      category: "Footwear",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=85",
    },
    {
      name: "Rose Skincare Set",
      price: "₹1,299",
      category: "Beauty",
      image:
        "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=800&q=85",
    },
  ];

  return (
    <div className="home-page">

      {/* ================= ANNOUNCEMENT ================= */}

      <div className="announcement-bar">
        <span>✦</span>
        FREE SHIPPING ON ORDERS ABOVE ₹999
        <span>✦</span>
        BLOOM AI IS HERE
      </div>


      {/* ================= HERO ================= */}

      <section className="home-hero">

        <div className="hero-copy">

          <p className="hero-eyebrow">
            NEW SEASON COLLECTION
          </p>

          <h1>
            Live beautifully.
            <br />
            <em>Shop effortlessly.</em>
          </h1>

          <p className="hero-text">
            Discover thoughtfully selected fashion, beauty,
            lifestyle and everyday favourites — all in one little place.
          </p>

          <div className="hero-buttons">
            <Link to="/shop" className="primary-button">
              Shop Now →
            </Link>

            <Link to="/categories" className="secondary-button">
              Explore Categories
            </Link>
          </div>

          <div className="hero-mini-features">
            <div>
              <strong>✦</strong>
              <span>Curated Finds</span>
            </div>

            <div>
              <strong>♡</strong>
              <span>Made to Love</span>
            </div>

            <div>
              <strong>✧</strong>
              <span>AI Shopping</span>
            </div>
          </div>

        </div>


        <div className="hero-image-area">

          <div className="hero-circle"></div>

          <img
            src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1100&q=90"
            alt="Bloom fashion collection"
            className="hero-main-image"
          />

          <div className="hero-product-card">

            <div className="mini-product-image">
              <img
                src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=300&q=85"
                alt="Blush Tote Bag"
              />
            </div>

            <div>
              <small>FEATURED FIND</small>
              <h4>Blush Tote Bag</h4>
              <strong>₹899</strong>
            </div>

            <span className="heart">♡</span>

          </div>

        </div>

      </section>


      {/* ================= CATEGORIES ================= */}

      <section className="categories-section">

        <div className="section-top">

          <div>
            <p className="section-label">EXPLORE</p>
            <h2>Shop by category</h2>
          </div>

          <Link to="/shop" className="view-link">
            Browse all →
          </Link>

        </div>


        <div className="category-row">

          {categories.map((category) => (

            <Link
              to="/shop"
              className="round-category"
              key={category.name}
            >

              <div className="category-photo">
                <img
                  src={category.image}
                  alt={category.name}
                />
              </div>

              <h3>{category.name}</h3>

              <span>Explore →</span>

            </Link>

          ))}

        </div>

      </section>


      {/* ================= PROMO BANNER ================= */}

      <section className="promo-section">

        <div className="promo-content">

          <p>✦ THE BLOOM EDIT</p>

          <h2>
            A little more
            <br />
            <em>you.</em>
          </h2>

          <p className="promo-text">
            Pieces chosen to make everyday moments
            feel a little more special.
          </p>

          <Link to="/shop" className="promo-button">
            Explore the Edit →
          </Link>

        </div>


        <div className="promo-image">

          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=85"
            alt="Bloom collection"
          />

        </div>

      </section>


      {/* ================= NEW ARRIVALS ================= */}

      <section className="new-arrivals">

        <div className="section-top">

          <div>
            <p className="section-label">JUST IN</p>
            <h2>New arrivals</h2>
          </div>

          <Link to="/shop" className="view-link">
            View all →
          </Link>

        </div>


        <div className="arrival-grid">

          {products.map((product, index) => (

            <Link
              to="/shop"
              className="arrival-card"
              key={product.name}
            >

              <div className="arrival-image">

                {index < 2 && (
                  <span className="new-badge">
                    NEW
                  </span>
                )}

                <button
                  className="wishlist-button"
                  onClick={(event) => event.preventDefault()}
                >
                  ♡
                </button>

                <img
                  src={product.image}
                  alt={product.name}
                />

              </div>

              <div className="arrival-info">

                <p>{product.category}</p>

                <h3>{product.name}</h3>

                <strong>{product.price}</strong>

              </div>

            </Link>

          ))}

        </div>

      </section>


      {/* ================= BLOOM AI ================= */}

      <section className="ai-home-section">

        <div className="ai-decoration">
          ✦
        </div>

        <div className="ai-home-content">

          <p className="section-label">
            YOUR PERSONAL SHOPPING BUDDY
          </p>

          <h2>
            Meet <em>Bloom AI.</em>
          </h2>

          <p>
            Not sure what to buy? Tell Bloom what you're looking for
            and get personalised shopping suggestions in seconds.
          </p>

          <div className="ai-example">
            <span>♡</span>
            <div>
              <small>Try asking</small>
              <strong>
                "I need something under ₹1500..."
              </strong>
            </div>
          </div>

        </div>

        <div className="ai-orbit">
          <div className="ai-orbit-inner">
            <span>✦</span>
            <strong>Bloom</strong>
            <small>AI</small>
          </div>
        </div>

      </section>


      {/* ================= NEWSLETTER ================= */}

      <section className="newsletter">

        <div>

          <p className="section-label">
            JOIN THE BLOOM CIRCLE
          </p>

          <h2>
            Little things.
            <br />
            <em>Lovely updates.</em>
          </h2>

          <p>
            Get new arrivals, special offers and little
            shopping inspiration in your inbox.
          </p>

        </div>


        <div className="newsletter-form">

          <input
            type="email"
            placeholder="Your email address"
          />

          <button>
            Join →
          </button>

        </div>

      </section>


    

      <section className="features-section">

        <div className="feature">

          <span>✦</span>

          <div>
            <h3>Curated Finds</h3>
            <p>Products picked with care.</p>
          </div>

        </div>


        <div className="feature">

          <span>♡</span>

          <div>
            <h3>Made to Love</h3>
            <p>Everyday things, thoughtfully chosen.</p>
          </div>

        </div>


        <div className="feature">

          <span>✧</span>

          <div>
            <h3>Bloom AI</h3>
            <p>Smart shopping, made simple.</p>
          </div>

        </div>


        <div className="feature">

          <span>⌁</span>

          <div>
            <h3>Easy Shopping</h3>
            <p>Simple, friendly and effortless.</p>
          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="home-footer">

        <div className="footer-brand">

          <h2>
            <span>🌿</span> bloom
          </h2>

          <p>
            A little place for beautiful finds
            and everyday favourites.
          </p>

        </div>


        <div className="footer-column">

          <h4>Shop</h4>

          <Link to="/shop">All Products</Link>
          <Link to="/shop">Fashion</Link>
          <Link to="/shop">Beauty</Link>
          <Link to="/shop">Electronics</Link>

        </div>


        <div className="footer-column">

          <h4>Explore</h4>

          <Link to="/categories">Categories</Link>
          <Link to="/about">About</Link>
          <Link to="/shop">New Arrivals</Link>

        </div>


        <div className="footer-column">

          <h4>Help</h4>

          <Link to="/cart">Cart</Link>
          <Link to="/login">Login</Link>
          <span>Contact</span>

        </div>


        <div className="footer-bottom">

          <span>© 2026 Bloom. Made with ♡</span>

          <span>AI-powered mini e-commerce store</span>

        </div>

      </footer>

    </div>
  );
}

export default Home;