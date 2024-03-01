import React from "react";
import styles from "./productCard.module.css";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    return (
        <section className={styles.container}>
            <div className={styles.cardContainer}>
                <div className={styles.cardContent}>
                    <div className={styles.cardArticle}>
                        <div className={styles.cardImage}>
                            <img src={`${process.env.REACT_APP_BACKEND}images/${product.image}`} alt={product.name} />
                            <div className={styles.cardShadow}></div>
                        </div>
                        <div className={styles.cardData}>
                            <h3 className={styles.cardName}>{product.name}</h3>
                            {/* <p className={styles.cardDescription}>description</p> */}
                            <Link to={`/singleproduct/${product.slug}`}>
                                <p className={styles.cardBtn}>view more</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductCard;
