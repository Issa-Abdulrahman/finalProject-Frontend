
import React from "react";
import Styles from "./newSignIn.module.css";
import { Link } from "react-router-dom";
import notfoundchoco from "../../assets/Images/notfoundchoco.png";

function NewSignIn() {
    return (
        <section className={Styles.main}>
            <h1 className={Styles.h1}>
                Thank you for your interest !
            </h1>
            <div className={Styles.container}>
            <h5 className={Styles.h5}>
                Welcome to ChocoPuff, your ultimate destination for all things chocolate!
                As we embark on this delicious journey together,
                we're excited to share that in the upcoming phases of scaling our website,
                we'll be introducing user sign-up functionality.
                By signing up, you'll unlock exclusive offers and benefits to elevate your chocolate shopping experience.
                Stay tuned as we sweeten the deal and make your ChocoPuff experience even more delightful.
                In the meantime, browse our delectable selection and indulge in the world of chocolate wonders!            
                </h5>
                </div>
            <img className={Styles.image2}
                src={notfoundchoco}
                alt="Chocolate Animation" />
            <Link to={"/"} className={Styles.h3}>
                Go Back Home
            </Link>
        </section>
    )
}


export default NewSignIn;