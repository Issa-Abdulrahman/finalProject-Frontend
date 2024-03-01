import React from "react";
import NavBar from "../layout/NavBar/navBar.js";
import Footer from "../layout/Footer/footer.js";
import { Outlet } from "react-router-dom";

function Container() {
    return(
        <div>
            <NavBar/>
            <Outlet />
            <Footer/>
        </div>
    );
}
export default Container;