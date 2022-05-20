import React ,{useEffect} from "react";
import axios from "axios"

import { useSelector,useDispatch } from "react-redux";
import {  } from "react-redux";

import {setProducts} from "../redux/actions/productActions"


const ProductListing=()=>
{
const products =useSelector((state)=>state);
const dispatch=useDispatch()
//console.log(products.allProducts.products)
 const fetchProduct = async ()=>
{
    const res= await axios.get("https://ecommrcebackend.herokuapp.com/products").catch((err)=>
    {
        console.log(err)
    })
    dispatch(setProducts((res.data)))

}
//console.log(products)
useEffect(()=>
{
    fetchProduct()
},[])
//console.log(products)
return (
        <React.Fragment>
  
        </React.Fragment>
    )
}

export default ProductListing
