import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./brands.module.css";
// import { Link } from "react-router-dom";
import axios from "axios";

function Brands ({onSelectedBrand}){
  
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const backendUrl = process.env.REACT_APP_BACKEND;

  useEffect(() => {
    const fetchData = async () => {
      try{
        const res =await axios.get(`${backendUrl}brand/getbrands`);
        setBrands(res.data);
       
    } catch (error) {
      console.log("Error fetching brands:", error);
    };
    };
    fetchData();
}, );

    const handleBrandClick =(brandId) =>{
      setSelectedBrand(brandId);
      onSelectedBrand(brandId);
    }

    return(
        <>
        <section id="category">
        <div className={styles.categoryheading}>
          <h2>Our Brands</h2>
        </div>
        </section>
        <div className={styles.Allcategorycard}>
          <div className={styles.categorycontainer}>
          {brands.map((brands, index) => (
            <div key={index} className={styles.categorybox} 
            onClick={() => handleBrandClick(brands._id)}>
              <img src={`${process.env.REACT_APP_BACKEND}images/${brands.image}`} 
              alt={brands.name} />
              </div>
          ))}</div>
        </div>


        
        </>
    );
}

export default Brands;