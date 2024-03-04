import React, { useEffect, useState } from "react";
import styles from "./productSection.module.css";
import ProductCard from "../../components/ProductCard/productCard.js";
import axios from "axios";
import { motion } from "framer-motion";

const LatestProductsSection = () => {
  const [latestProducts, setLatestProducts] = useState([]);
  const backendUrl = process.env.REACT_APP_BACKEND;

  useEffect(() => {
    const fetchLatestProducts = async () => {
      
        const response = await axios.get(`${backendUrl}product/latest`);
        setLatestProducts(response.data);
      
    };

    fetchLatestProducts();
  }, []);

  return (
    <motion.section
      className={styles.mainsection}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeIn",
        stiffness: 260,
        damping: 20,
        duration: 0.6,
      }}
    >
      <h1 className={styles.h1}>Latest Product</h1>
      <section className={styles.container}>
        {/* You should give this class the flex */}
        <div className={styles.cardContainer}>
          {latestProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </section>
    </motion.section>
  );
};

export default LatestProductsSection;
