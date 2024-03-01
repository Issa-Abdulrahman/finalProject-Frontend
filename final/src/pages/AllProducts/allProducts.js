import React, { useEffect, useState } from "react";
import styles from "./allProducts.module.css";
import ProductCard from "../../components/ProductCard/productCard.js";
import Brands from "../../components/Brands/brands.js";
import axios from "axios";

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState(null);
    const backendUrl = process.env.REACT_APP_BACKEND;

    useEffect(() => {
        const fetchData = async () => {
            if (selectedBrand) {
                const res = await axios.get(`${backendUrl}product/getby/${selectedBrand}`);
                setProducts(res.data);
            } else {
                const res = await axios.get(`${backendUrl}product/getall`);
                setProducts(res.data);
            }
        };

        fetchData();
    }, [selectedBrand, backendUrl]);

    const handleBrandSelect = (brandId) => {
        setSelectedBrand(brandId);
    };

    return (
        <div className={styles.container}>
            <div className={styles.brands}>
                <Brands onSelectedBrand={handleBrandSelect} />
            </div>
            <div className={styles.card_container}>
                <h1 className={styles.h1}>All Products</h1>

                <div className={styles.cards}>
                    {products && products.map((product, index) => (
                        <div key={index} className={styles.card}>
                            <ProductCard product={product} />

                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default AllProducts;
