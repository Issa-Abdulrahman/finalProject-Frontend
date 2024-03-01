import React from "react";
import signin from "../../assets/Images/signin.png";
import styles from "./aboutUs.module.css";
import { motion } from "framer-motion";

const AboutUs = () => {
    return (
        <motion.section id="aboutUs" className={styles.mainsection}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                ease: "easeIn",
                stiffness: 260,
                damping: 20,
                duration: 0.6,
            }}
        >
            <div className={styles.main}>
                {/* <h1 className={styles.heading2}>About</h1> */}
                <h3 className={styles.title}>
                    ChocoPuff
                </h3>
                <p className={styles.description}>
                    ChocoPuff is here to provide a seamless and enjoyable navigation through a large numbers of chcolate brands.
                    It aims to offer a diverse selection of chocolate boxes
                    while simplifying the ordering process through Whats-app communication.
                    
                </p>
            </div>
            <div className={styles.imageContainer}>
                <img className={styles.img}
                    loading="eager"
                    alt="about us chocoPuff"
                    src={signin} />
            </div>
        </motion.section>
    )
}

export default AboutUs;