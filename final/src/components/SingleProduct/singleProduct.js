import React, { useEffect, useState } from "react";
import styles from "./singleProduct.module.css";
import kitkat320 from "../../assets/Images/kitkat-removebg-preview.png";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleProduct = () => {
    const slogan = useParams()
    const [product , setProduct] = useState({})

    useEffect(()=>{
        const fetchSignle = async () =>{
            const res = await axios.get(`${process.env.REACT_APP_BACKEND}product/getone/${slogan}`) ;
            setProduct(res.data)
        }   

        fetchSignle()
    },[])
    return (
        <div className={styles.singleProduct}>
            <div className={styles.left}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Kitkat 320</h1>

                    <p className={styles.description}>Have an iconic break with the KITKAT® 4
                        Finger Milk Chocolate bar.
                        The perfect balance of smooth milk chocolate and crispy wafer.
                        Make yourself comfy and settle down to tear,
                        break, snap and enjoy.
                        </p>
                    
                    <p className={styles.price}> Price : 7.5$</p>
                    <Link to={"/"}>
                        <p className={styles.cardBtn}>Buy</p>
                    </Link>
                    <p className={styles.freeDelivery}>Free Delivery</p>
                </div>
            </div>
            <div className={styles.right}>
                <img className={styles.productImage}
                    src={kitkat320}
                    alt="kitkat 320"
                />
            </div>
        </div>
    );
};

export default SingleProduct;
