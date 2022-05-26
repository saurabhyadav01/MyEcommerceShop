import React ,{useEffect, useState} from "react";
import Header from "./Header";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
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
       
       // console.log(res.data)
    
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
   console.log(product)
    useEffect(()=>
    {
        fetchProductDetails()
    },[])
return (
        <React.Fragment>
        <Header />
         
 
           <div style={{border:"1px solid gray",width:"80%",height:"600px" ,margin:"auto",display:"flex",marginTop:"20PX"}} key={product.id}>
           <div style={{width:"11.1%",margin:"20px"}}>
         
           <div style={{width:"100%"}}> <img style={{width:"100%",height:"100%" ,border:"1px solid gray"}} src={product.image2} alt="" /></div>
           <div style={{width:"100%"}}> <img style={{width:"100%",height:"50%" ,border:"1px solid gray"}} src={product.image3} alt="" /></div>
           <div style={{width:"100%"}}> <img style={{width:"100%",height:"50%" ,border:"1px solid gray"}} src={product.image4} alt="" /></div>
           <div style={{width:"100%"}}> <img style={{width:"100%",height:"50%" ,border:"1px solid gray"}} src={product.image5} alt="" /></div>
          
           </div>
          <div style={{width:"50%",margin:"20px"}}> <img style={{width:"100%",height:"100%" ,border:"1px solid gray"}} src={product.image1} alt="" /></div>
          <div style={{width:"50%",margin:"20px"}}><h4>{product.title}</h4>
          <h4>Price:{product.price}</h4>

          <h4>Category:{product.category}</h4>
          <h4>description:{product.description}</h4>
          <h4>Tribe:{product.tribe}</h4>
     
          <h4>Discount:{product.discount}</h4>

          <Button variant="contained"sx={{marginLeft:"25px", width:"80%",backgroundColor:"#ffd84d",height:"35px" ,fontSize:"20px",color:"black"}} onClick={()=>
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
