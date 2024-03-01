import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/home.js";
import SignIn from "../pages/SignIn/signIn.js";
import SignUp from "../pages/SignUp/signUp.js";
import NotFound from "../pages/NotFound/notFound.js";
import AllProducts from "../pages/AllProducts/allProducts.js";
import SingleProduct from "../pages/SingleProduct/singleProduct.js";
import UserOutlet from "../outlet/userOutlet.js";
import AboutUs from "../components/AboutUs/aboutUs.js";


function AppRoutes() {
    return (
        <Routes>
            <Route exact path="/" element={<UserOutlet />}>
                <Route path="/" element={<Home />}></Route>
                <Route path="/singleproduct/:slug" element={<SingleProduct />}></Route>
                <Route path="/products" element={<AllProducts />}></Route>
                <Route path="/products/brand/:id" element={<AllProducts />}></Route>
            </Route>
            <Route path="/aboutus" element={<AboutUs/>}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>

            <Route path="/*" element={<NotFound />}></Route>
        </Routes>
    );
}

export default AppRoutes;
