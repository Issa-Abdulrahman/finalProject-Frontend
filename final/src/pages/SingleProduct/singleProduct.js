import React, { useEffect , useState } from "react";
import styles from "./singleProduct.module.css"
// import kitkat320 from "../../assets/Images/kitkat-removebg-preview.png";
import { useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";

const SingleProductPage = () => {
    const slugObj = useParams()
    const [product , setProduct] = useState({});
    const phoneNumber = "0096181152522"
    const message =    `Hello, I'm intersted in purchasing ${product.name} for ${product.price} $`

    const slug = slugObj.slug
    useEffect(()=>{
        const fetchSignle = async () =>{
            const res = await axios.get(`http://localhost:5000/product/getone/${slug}`) ;
            setProduct(res.data)
        }   

        fetchSignle()
    },[])

    const handleBuyButtonClick = () => {
        const encodedPhoneNumber = encodeURIComponent(phoneNumber);
        const encodedMessage = encodeURIComponent(message);
        const whatsappLink = `https://wa.me/${encodedPhoneNumber}?text=${encodedMessage}`;
        window.open(whatsappLink, '_blank');
    }
    return (
        <div className={styles.singleProduct}>
            <div className={styles.left}>
                <div className={styles.container}>
                    <h1 className={styles.title}>{product && product.name } </h1>

                    <p className={styles.description}>
                    {product && product.description } </p>
                   
                    <p className={styles.price}> Price : {product && product.price } $</p>
                    <Link onClick={handleBuyButtonClick}>
                        <p className={styles.cardBtn}>Buy</p>
                    </Link>
                    <p className={styles.freeDelivery}>Free Delivery</p>
                </div>
            </div>
            <div className={styles.right}>
                <img className={styles.productImage}
                    src={`http://localhost:5000/images/${product && product.image}`}
                    alt="kitkat 320"
                />
            </div>
        </div>
    );
};

export default SingleProductPage;