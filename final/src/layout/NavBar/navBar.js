import React, { useEffect, useState } from "react";
import styles from "./navBar.module.css";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";

import { Spin as Humburger } from "hamburger-react";

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const [isResponsive, setIsResponsive] = useState(window.innerWidth <= 1197);
    const [visible, setVisible] = useState(true);
    const [scrollY, setScrollY] = useState(0);
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    useEffect(() => {
        const handlResize = () => {
            const screenWidth = window.innerWidth;
            setIsResponsive(screenWidth <= 1197);
        }


        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);

            // if (currentScrollPos > prevScrollPos){

            // }
        }
        window.addEventListener('resize', handlResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handlResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    const navigate = useNavigate();

    const handleScrollToAbout = () => {
        setMenuOpen(false);
        if (location.pathname === "/") {
            document.getElementById("aboutUs").scrollIntoView({ behavior: "smooth" });
        } else {
            navigate("/");
            setTimeout(() => {
                document.getElementById("aboutUs").scrollIntoView({ behavior: "smooth" });
            }, 1000);
        }
    };

    return (
        <header className={`${styles.header} ${visible ? "" : styles.hidden}`} style={{ backgroundColor: scrollY > 0 ? 'var(--dpurple-color' : "" }}>
            <nav className={styles.nav}>
                <div className={styles.logocontainer}>
                    <Link className={styles.logo} to={"/"}>
                        ChocoPuff
                    </Link>
                </div>
                <ul className={`${isResponsive ? "" : styles.navUl} ${isResponsive ? styles.dropdown : ""} ${menuOpen ? styles.active : ""}`}>
                    <li className={styles.li}>
                        <NavLink className={location.pathname === "/" ? 
                        styles.activeLink : styles.link} 
                        style={{ color: "var(--bgray-color" }} 
                        to={"/"} 
                        onClick={() => setMenuOpen(false)}>
                            Home
                        </NavLink>
                    </li>
                    <li className={styles.li}>
                        <NavLink  className={location.pathname === "/" ? 
                        styles.activeLink : styles.link} 
                        style={{ color: "var(--bgray-color" }} 
                        to={"/products"} 
                        onClick={() => setMenuOpen(false)} >
                            Products
                        </NavLink>
                    </li>
                    <li className={styles.li} onClick={handleScrollToAbout}>
                    <NavLink
                        className={location.pathname === "/" ? styles.activeLink : styles.link}
                        style={{ color: "var(--bgray-color" }}
                        to={"/"}
                        onClick={() => setMenuOpen(false)}>
                        About
                    </NavLink>
                </li>
                    <li className={styles.li}>
                        <NavLink  className={location.pathname === "/" ? 
                        styles.activeLink : styles.link} 
                        style={{ color: "var(--bgray-color" }} 
                        to={"/signup"} 
                        onClick={() => setMenuOpen(false)}>
                            Sign Up
                        </NavLink>
                    </li>
                    <li className={styles.li}>
                        <NavLink  className={location.pathname === "/" ? 
                        styles.activeLink : styles.link} 
                        style={{ color: "var(--bgray-color" }} 
                        to={"/signin"} 
                        onClick={() => setMenuOpen(false)}>
                            Sign In
                        </NavLink>
                    </li>
                </ul>
                <div className={styles.hamburger} onClick={handleMenuClick}>
                    <Humburger 
                    easing="ease-in"
                    label="Show Menu"
                    hideOutline={false}
                    duration={0.5}
                    toggled={menuOpen}
                    color="var(--bgray-color)" />
                </div>
            </nav>
        </header>
    )
}

export default NavBar;