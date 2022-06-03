import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import ProductListing from "./ProductListing";
import { CardMedia } from "@mui/material";
import { Box } from "@mui/system";
import Footer from "./Footer";
const Home = () => {
  // const products =useSelector((state)=>state.allProducts.products);
  //  console.log(products);
  // const loginData=useSelector((store)=>store.loginData.data)
  // console.log(loginData.user.firstName)

  return (
    <>
      <Header />
      <div style={{ width: "100%", height: "350px" }}>
        <img
          src="https://images.bewakoof.com/uploads/grid/app/Byou-men-desk-1651215919.jpg"
          alt=""
          height="100%"
          width="100%"
        />
      </div>
      <ProductComponent />
      {/* <h1 className="App">All Product</h1>
<div className="product_container" >
{products.map((el,index) => (
        <div className="items" key={index}>
          <img src={el.image} alt="" />
          <h4>{el.title}</h4>
          <h4>Price:{el.price}</h4>

        </div>
      ))}
</div>
   */}
      <ProductListing />
      <Footer />
    </>
  );
};

export default Home;
