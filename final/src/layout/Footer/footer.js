import React from "react";
import styles from "./footer.module.css";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import piecechoco from "../../assets/Images/Pieces.png";
import { Link } from "react-router-dom";


function Footer() {

  const whatsappNumber = "+96170434831";
  const whatsappURL = `https://wa.me/${whatsappNumber}`;

  return (
    <footer className={styles.footer}>
      <section className={styles.section}>
        <div>
          <ul className={styles.navigation}>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            {/* <li><a href="/signup">Signup</a></li> */}
            {/* <li><a href="/signin">Signin</a></li> */}
          </ul>
        </div>
        <div>
          <Link to={"/"} className={styles.logo__link}>
            <h1 className={styles.logo}>ChocoPuff</h1>
          </Link>
          <div className={styles.socialMedia}>
            <a href={whatsappURL} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
              <FaWhatsapp className={styles.icon} />
            </a>
            <FaInstagram className={styles.icon} />
            {/* <FaFacebook className={styles.icon} /> */}
          </div>
        </div>

        <div>
          <div className={styles.imageContainer}>
            <img src={piecechoco} alt="piece choco" />
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
