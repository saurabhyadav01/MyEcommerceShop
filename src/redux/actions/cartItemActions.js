
import axios from "axios"
import { ActionTypes } from "../contants/actions-types"
export const setCartProducts=(cartProducts)=>
{
    return{
        type:ActionTypes.CART_ITMES,
        payload:cartProducts
    }
}

// export const setectedProduct=(product)=>
// {
//     return{
//         type:ActionTypes.SETECTED_PRODUCTS,
//         payload:product
//     }
// }


// fetch product
export  const fetchCartProduct = ()=>(dispatch)=>{

    axios.get(`https://ecommrcebackend.herokuapp.com/carts`).then((res)=>{
        console.log(res.data)
         dispatch(setCartProducts(res.data))
    }).catch((err)=>{
        console.log(err.message)
    })
}
