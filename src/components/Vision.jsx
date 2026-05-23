import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Vision = () => {
  return (
    <section className="vision-modern-section" id="vision">

      <div className="vision-modern-container">

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="vision-modern-content"
        >

          <span className="vision-modern-subtitle">
            Looking Ahead
          </span>

          <h2 className="vision-modern-title">
            Building The Future Of
            <span> Premium Coffee</span>
          </h2>

          <p className="vision-modern-text">
            Lalo Coffee is building more than a coffee brand —
            we are creating a global experience inspired by
            Ethiopian heritage, craftsmanship, and excellence.
          </p>

          <p className="vision-modern-text">
            Our mission is to connect coffee lovers around
            the world with authentic Ethiopian coffee while
            empowering farmers and supporting communities.
          </p>

          <p className="vision-modern-text">
            Through innovation, sustainability, and passion,
            we aim to inspire a new generation of premium
            coffee experiences built on quality and culture.
          </p>

          <Link to="/soon">
            <button className="vision-modern-btn">
              Join Our Journey
            </button>
          </Link>

        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="vision-modern-image-wrapper"
        >

          <img
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop"
            alt="Lalo Coffee Vision"
            className="vision-modern-image"
          />

          {/* FLOATING CARD */}
          <div className="vision-modern-floating-card">

            <h3>
              Premium Ethiopian Coffee
            </h3>

            <p>
              Building a modern coffee experience inspired
              by heritage, quality, and global vision.
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Vision;