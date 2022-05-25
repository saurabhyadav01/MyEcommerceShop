import { ActionTypes } from "../contants/actions-types";

import axios from "axios";
export const register_loading=()=>({type:ActionTypes.REGISTER_LOADING})
export const register_error=()=>({type:ActionTypes.REGISTER_ERROR})
export const register_succes=(payload)=>({type:ActionTypes.REGISTER_SUCCESS,payload});




export const Register_Request=(data,navigate)=>(dispatch)=>{
    dispatch(register_loading())

   axios.post(`http://localhost:5000//register`,data).then((res)=>
        {
           console.log(res.data);
           alert("Ragister Successfully");
           dispatch(register_succes(res.data))
           navigate("/Home")
        }).catch((e)=>
        {
         alert("Invalid User")
          console.log("err"+e)
          dispatch(register_error())
        })
}