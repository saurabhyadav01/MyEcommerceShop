
import axios from "axios"
import { ActionTypes } from "../contants/actions-types"
export const setCartProducts=(cartProducts)=>
{
    return{
        type:ActionTypes.CART_ITMES,
        payload:cartProducts
    }
}

export const addToCartProduct=(cart)=>
{
    return{
        type:ActionTypes.ADD_TO_CART,
        payload:cart
    }
}


// fetch Cartproduct
export  const fetchCartProduct = ()=>(dispatch)=>{

    axios.get(`https://ecommrcebackend.herokuapp.com/carts`).then((res)=>{
        console.log(res.data)
         dispatch(setCartProducts(res.data))
    }).catch((err)=>{
        console.log(err.message)
    })
}

//post cartProduct
export  const Post_Cart_Product = (cartData)=>(dispatch)=>{

    axios.post(`https://ecommrcebackend.herokuapp.com/carts`,cartData).then((res)=>{
        console.log(res.data)
        dispatch(addToCartProduct(res.data))
       
    }).catch((err)=>{
        console.log(err.message)
    })
}
