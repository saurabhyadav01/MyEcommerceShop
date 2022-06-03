
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
export  const fetch_Adderss = ()=>(dispatch)=>{

    axios.get(`https://ecommrcebackend.herokuapp.com/address`)
    .then((res) => {
       console.log(res.data);
     dispatch(getAddress())
    })
    .catch((e) => {
      alert(" Failed ");
    });
}

//post cartProduct
export  const Post_Adderss = (state)=>(dispatch)=>{

    axios.post(`http://localhost:5000/address`,state).then((res)=>{
        //console.log(res.data)
        
        dispatch(setAddress(res.data));
        alert("Address Added")
       
       
    }).catch((err)=>{
        console.log(err.message)
        alert("All FIELD REQUUIRED")
    })
}
