import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Heritage = () => {
  return (
    <section className="heritage-section" id="heritage">

      <div className="heritage-container">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="heritage-image-wrapper"
        >
          <img
            src="/photo_2026-05-23_15-04-15.jpg"
            alt="Ethiopian Coffee Heritage"
            className="heritage-image"
          />
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="heritage-content"
        >

          <span className="heritage-subtitle">
            The Birthplace of Coffee
          </span>

          <h2 className="heritage-title">
            Ethiopian Coffee Heritage
          </h2>

          <p className="heritage-text">
            Ethiopia is the origin of coffee —
            a land rich with culture, tradition,
            and generations of craftsmanship.
          </p>

          <p className="heritage-text">
            From the fertile highlands to traditional
            coffee ceremonies, every cup tells a story
            of authenticity, community, and timeless flavor.
          </p>

          <p className="heritage-text">
            At Lalo Coffee, we honor this heritage by
            bringing premium Ethiopian coffee to the
            modern world with elegance and purpose.
          </p>

          <Link to='/soon'>
          <button className="heritage-btn">
            Discover Our Heritage
          </button>
          </Link>

        </motion.div>

      </div>

    </section>
  );
};

export default Heritage;