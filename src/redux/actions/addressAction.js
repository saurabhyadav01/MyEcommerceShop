
import axios from "axios"
import { ActionTypes } from "../contants/actions-types"


export const setAddress=(addressDetail)=>
{
    return{
        type:ActionTypes.ADD_ADDRESS,
        payload:addressDetail
    }
}

export const getAddress=(address)=>
{
    return{
        type:ActionTypes.FETCH_ADDRESS,
        payload:address
    }
}


//fetch address
export  const Fetch_Adderss = (id)=>(dispatch)=>{

    axios.get(`https://ecommrcebackend.herokuapp.com/address/${id}`)
    .then((res) => {
       //console.log(res.data);
     dispatch(getAddress(res.data))
    })
    .catch((e) => {
    
    });
}

//post cartProduct
export  const Post_Adderss = (state)=>(dispatch)=>{

    axios.post(`https://ecommrcebackend.herokuapp.com/address`,state).then((res)=>{
        //console.log(res.data)
        
        dispatch(setAddress(res.data));
        alert("Address Added")
       
       
    }).catch((err)=>{
        console.log(err.message)
        alert("All FIELD REQUUIRED")
    })
}
