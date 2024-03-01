import React from "react";
import Styles from "./notFound.module.css";
import { Link } from "react-router-dom";
import notfoundchoco from "../../assets/Images/notfoundchoco.png";
// import chocoanimate1 from "../../assets/Images/chocoanimate1.png";

function NotFound() {
    return (
        <section className={Styles.main}>
            <h1 className={Styles.h1}>
                Opps! Page not found
            </h1>
            <h5 className={Styles.h5}>
                We can't find the page you're looking for.
            </h5>
            {/* <div className={Styles.imageContainer}> */}
            {/* <img className={Styles.image1}
                src={chocoanimate1}
                alt="Chocolate Animation" /> */}
            <img className={Styles.image2}
                src={notfoundchoco}
                alt="Chocolate Animation" />
            {/* </div> */}
            <Link to={"/"} className={Styles.h3}>
                Go Back Home
            </Link>
        </section>
    )
}


export default NotFound;