import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const coffeeProducts = [
  {
    name: "Lalo Signature Blend",
    description: "The House Special",
    price: "$20.99",
    img: "/photo_2026-05-23_14-26-18.jpg",
  },
  {
    name: "Yirgacheffe Flow",
    description: "Floral & Bright",
    price: "$19.99",
    img: "/photo_2026-05-23_14-28-32.jpg",
  },
  {
    name: "Sidamo Coffee",
    description: "Hard and Powerful",
    price: "$15.99",
    img: "/photo_2026-05-23_14-31-20.jpg",
  },
  {
    name: "Harar Heritage",
    description: "Bold & Spicy",
    price: "$19.99",
    img: "/photo_2026-05-23_14-33-30.jpg",
  },
  {
    name: "Jimma Coffee",
    description: "Balanced, Smooth and Favorite",
    price: "$25.99",
    img: "/photo_2026-05-23_14-45-31.jpg",
  },
  {
    name: "Kefa Coffee",
    description: "Chocolatey",
    price: "$20.99",
    img: "/photo_2026-05-23_14-53-58.jpg",
  },
];

const Products = () => {
  return (
    <section className="products-section" id="coffee">

      {/* TITLE */}
      <div className="products-header">
        <span className="products-subtitle">
          Premium Collection
        </span>

        <h2 className="products-title">
          Featured Coffee
        </h2>

        <p className="products-text">
          Discover handcrafted Ethiopian coffee blends
          designed for modern coffee lovers who value
          authenticity, richness, and luxury.
        </p>
      </div>

      {/* PRODUCTS */}
      <div className="products-grid">
        {coffeeProducts.map((coffee, index) => (
          <motion.div
            key={coffee.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="product-card"
          >

            <div className="product-image-wrapper">
              <img
                src={coffee.img}
                alt={coffee.name}
                className="product-image"
              />
            </div>

            <div className="product-content">

              <h3 className="product-name">
                {coffee.name}
              </h3>

              <p className="product-description">
                {coffee.description}
              </p>

              <div className="product-footer">
                <span className="product-price">
                  {coffee.price}
                </span>

                <Link to='/soon'>
                <button className="product-btn">
                  Order Now
                </button>
                </Link>
              </div>

            </div>

          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Products;