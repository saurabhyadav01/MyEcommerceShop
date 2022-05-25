
import axios from "axios"
import { ActionTypes } from "../contants/actions-types"
export const setProducts=(products)=>
{
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload:products
    }
}

export const setectedProduct=(product)=>
{
    return{
        type:ActionTypes.SETECTED_PRODUCTS,
        payload:product
    }
}
// export const LowToHigh=(product)=>
// {
//     return{
//         type:ActionTypes.SETECTED_PRODUCTS,
//         payload:product
//     }
// }
// export const highToLow=(product)=>
// {
//     return{
//         type:ActionTypes.SETECTED_PRODUCTS,
//         payload:product
//     }
// }

export  const sort_price_h_to_l = ()=>({type:ActionTypes.SORT_PRICE_H_TO_L})
export  const sort_price_l_to_h = ()=>({type:ActionTypes.SORT_PRICE_L_TO_H })
export  const SORT_BY_WOMEN = ()=>({type:ActionTypes.SORT_BY_WOMEN })
export  const SORT_BY_MEN= ()=>({type:ActionTypes.SORT_BY_MEN})
// export  const sort_rating_l_to_h = ()=>({type:SORT_RATING_L_TO_H })
// export  const sort_rating_h_to_l = ()=>({type:SORT_RATING_H_TO_L })
export  const SORT_NAME_ASS  = ()=>({type:SORT_NAME_ASS })
export  const SORT_NAME_DISS  = ()=>({type:SORT_NAME_DISS })

// fetch product
export  const fetchProduct = ()=>(dispatch)=>{

    axios.get("http://localhost:5000/products").then((res)=>{
         console.log(res.data)
         dispatch(setProducts(res.data))
    }).catch((err)=>{
        console.log(err.message)
    })
}
