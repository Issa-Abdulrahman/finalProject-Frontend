import React from "react";
import style from "./heroSection.module.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
// import Pieces from "../../assets/Images/Pieces.png"
import HeroChoco from "../../assets/Images/heronewchoco.png"
// import HeroChoco1 from "../../assets/Images/chocohero-removebg-preview.png"

function HeroSection() {
    return (
        <>
            {/* <motion.section className={style.motion}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    ease: "easeIn",
                    stiffness: 260,
                    damping: 20,
                    duration: 0.6,
                }}
            > */}
                <section className={style.mainSection}>
                    <div className={style.containerText}>
                        <h1 className={style.head1}>Speak the language of happiness ! </h1>
                        <h2 className={style.head1}>Get Closer</h2>
                        <Link to={"/signup"}>
                        <Button
                            className={style.button1}
                            disableElevation={true}
                            variant="contained"
                            
                            sx={{
                                color: "var(--dpurple-color)",
                                fontSize: "18.4",
                                backgroundColor: "var(--bgray-color)",
                                borderRadius: "15px",
                                fontWeight: "bold",
                                // padding: "10px",
                                "&:hover": { background: "var(--gold-color)" },
                                width: 426,
                                height: 48,

                            }}
                        >
                            Sign up
                        </Button>
                        </Link>
                    </div>
                    <img className={`${style.image} ${style.topRight}`}
                        src={HeroChoco}
                        alt="chocopiece" />
                    <img className={`${style.image} ${style.bottomLeft}`}
                        src={HeroChoco}
                        alt="chocopiece" />
                </section>
            {/* </motion.section> */}
        </>
    )
}

export default HeroSection;