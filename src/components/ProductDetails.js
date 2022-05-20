import React ,{useEffect, useState} from "react";
import Header from "./Header";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Params, useParams } from "react-router-dom";

import {setectedProduct} from "../redux/actions/productActions"
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import Footer from "./Footer";
const ProductDetails=()=>
{
    
    const product =useSelector((state)=>state.product);
    const dispatch=useDispatch()
    const {id}=useParams();
    // console.log(id)
    
    const fetchProductDetails = async ()=>
    {
        const res= await axios.get(`https://ecommrcebackend.herokuapp.com/products/${id}`).catch((err)=>
        {
            //console.log(err)
        })
       dispatch(setectedProduct((res.data)));
       
        console.log(res.data)
    
    }
//console.log(product.products)
const cartItems=JSON.parse(localStorage.getItem("cartItem")) ||[];
const  numberOfItem=cartItems.length
    const addToCart=()=>
    {
     const arr=JSON.parse(localStorage.getItem("cartItem")) ||[];
     arr.push(product)
     localStorage.setItem("cartItem",JSON.stringify(arr));
      
  
    /// console.log(arr)
    }
   // fetchProductDetails()
   //console.log(product)
    useEffect(()=>
    {
        fetchProductDetails()
    },[])
return (
        <React.Fragment>
        <Header />
         
 
           <div style={{border:"1px solid gray",width:"80%",height:"600px" ,margin:"auto",display:"flex"}} key={product.id}>
         <div style={{width:"50%"}}> <img style={{width:"100%",height:"100%" ,border:"1px solid gray"}} src={product.image} alt="" /></div>
          <div style={{width:"50%"}}><h4>{product.title}</h4>
          <h4>Price:{product.price}</h4>
          {/* <h4>Rating:{product.rating.rate}</h4> */}
          <h4>Rating:{product.category}</h4>
          <h4>description:{product.description}</h4>

          <Button variant="contained" sx={{margin:"2px 20%"}} onClick={()=>
        {
            addToCart();
            alert("Product Added In Cart")
        }} >Add To Cart</Button>
          </div>
       
       </div>
       <Footer />
        </React.Fragment>
    )
}

export default ProductDetails
