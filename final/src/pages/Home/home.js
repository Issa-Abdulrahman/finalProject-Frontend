import React from "react";
import HeroSection from "../../components/HeroSection/heroSection.js";
import AboutUs from "../../components/AboutUs/aboutUs.js";
import Brands from "../../components/Brands/brands.js";
import styles from "./home.module.css";

import ProductSection from "../../components/ProductSection/productSection.js";

function Home(){
    return(
        <div>
            <HeroSection/>
            <div>
                <div className={styles.brands}><Brands/></div>
                
                <AboutUs />
                <ProductSection />
            </div>
        </div>
    )
}

export default Home;