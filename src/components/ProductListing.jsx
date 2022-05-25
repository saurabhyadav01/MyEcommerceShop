import React ,{useEffect} from "react";
import axios from "axios"

import { useSelector,useDispatch } from "react-redux";
import {  } from "react-redux";

import {fetchProduct, setProducts} from "../redux/actions/productActions"


const ProductListing=()=>
{
const products =useSelector((state)=>state.allProducts.products);
const dispatch=useDispatch()
//console.log(products.allProducts.products)

//console.log(products)
useEffect(()=>
{
   dispatch(fetchProduct())
},[])
//console.log(products)
return (
        <React.Fragment>
  
        </React.Fragment>
    )
}

export default ProductListing
