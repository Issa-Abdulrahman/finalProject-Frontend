import React from "react";
import HeroSection from "../../components/HeroSection/heroSection.js";
import AboutUs from "../../components/AboutUs/aboutUs.js";
import Brands from "../../components/Brands/brands.js";
import styles from "./home.module.css";
import { useNavigate } from "react-router-dom";
import ProductSection from "../../components/ProductSection/productSection.js";

function Home() {
    const navigate = useNavigate();
    const handleBrandClick = (brandId) => {
        navigate(`/products/brand/${brandId}`);
    }
    return (
        <div className={styles.container}>
            <HeroSection />
            <div>
                <div className={styles.brands}><Brands onSelectedBrand={handleBrandClick}/></div>
                <div className={styles.about} id="about">
                    <AboutUs />
                </div>
                <div className={styles.product}>
                    <ProductSection />
                </div>
            </div>
        </div>
    )
}

export default Home;