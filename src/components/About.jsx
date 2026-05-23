import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const About = () => {
  return (
    <section className="about-section" id="about">

      <div className="about-container">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="about-image-wrapper"
        >
          <img
            src="/photo_2026-05-23_14-22-16.jpg"
            alt="Ethiopian Coffee"
            className="about-image"
          />
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="about-content"
        >

          <span className="about-subtitle">
            Ethiopian Heritage
          </span>

          <h2 className="about-title">
            About Lalo Coffee
          </h2>

          <p className="about-text">
            Lalo Coffee is more than a coffee brand —
            it is a celebration of Ethiopia’s rich coffee
            culture, timeless traditions, and premium quality.
          </p>

          <p className="about-text">
            From the lush highlands of Ethiopia to your cup,
            every bean is carefully sourced to deliver an
            authentic experience built on craftsmanship,
            heritage, and passion.
          </p>

          <Link to='/soon'>
          <button className="about-btn">
            Learn More
          </button>
          </Link>

        </motion.div>

      </div>

    </section>
  );
};

export default About;