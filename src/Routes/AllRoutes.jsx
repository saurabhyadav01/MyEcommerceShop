import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductListing from "../components/ProductListing";
import Home from "../components/Home";
import MenComponent from "../components/MenComponents";
import WomenComponent from "../components/WomenComponents";
import ProductDetails from "../components/ProductDetails";
import LandingPage from "../components/LandingPage";
import CartList from "../components/CartList";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Payment from "../components/Payment";
import Success from "../components/Success";
import ElectronicsComponent from "../components/ElectronicsComponent"
import OrderSummary from "../components/OrderSummary";
const AllRoutes=()=>
{
    return (
        <>
     
      <Routes>
      <Route path="/" element={<LandingPage />}></Route>
        <Route path="/Home" element={<Home />}>
         </Route>
         <Route path="/Men" element={<MenComponent />}></Route>
 
        <Route path="/Women" element={<WomenComponent />}></Route>
        <Route path="/Electronics" element={<ElectronicsComponent />}></Route>
        <Route path="Home/products/cart" element={<CartList/>}></Route>
        <Route path="Home/products/:id" element={<ProductDetails/>}></Route>
        <Route path="Women/products/:id" element={<ProductDetails/>}></Route>
        <Route path="Electronics/products/:id" element={<ProductDetails/>}></Route>
        <Route path="Men/products/:id" element={<ProductDetails/>}></Route>
        <Route path="Home/signIn" element={<SignIn/>}></Route>
        <Route path="/Home/SignUp" element={<SignUp/>}></Route>
        {/* <Route path="home/products/signUp" element={<SignUp/>}></Route> */}
        <Route path="/home/products/cart" element={<CartList/>}></Route>
        <Route path="/home/products/cart/ordersummary" element={<OrderSummary/>}></Route>
        <Route path="/home/products/cart/ordersummary/payment" element={<Payment/>}></Route>
        
        <Route path="/home/products/cart/oderSummary/payment/success" element={<Success/>}></Route>
      </Routes> 
        </>
    )
}

export default AllRoutes