import React from "react";
import style from "./heroSection.module.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
// import Pieces from "../../assets/Images/Pieces.png"
import HeroChoco from "../../assets/Images/heronewchoco.png"
// import HeroChoco1 from "../../assets/Images/chocohero-removebg-preview.png"

function HeroSection() {
    return (
        <>
            
                <section className={style.mainSection}>
                    <div className={style.containerText}>
                        <h1 className={style.head1}>Speak the language of happiness ! </h1>
                        <h2 className={style.head1}>Get Closer</h2>
                        <Link to={"/products"}>
                        <Button
                            className={style.button1}
                            disableElevation={true}
                            variant="contained"
                            
                            sx={{
                                color: "var(--dpurple-color)",
                                fontSize: "22",
                                backgroundColor: "var(--bgray-color)",
                                borderRadius: "15px",
                                fontWeight: "bold",
                                // padding: "10px",
                                "&:hover": { background: "var(--gold-color)" },
                                width: 426,
                                height: 48,

                            }}
                        >
                            Discover 
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
            
        </>
    )
}

export default HeroSection;