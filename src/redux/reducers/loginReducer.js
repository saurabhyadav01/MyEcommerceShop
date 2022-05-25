import { ActionTypes } from "../contants/actions-types"
import { login_loading } from "../actions/loginActions"

const initialState={
    loading:false,
    error:false,
    data:{}
}
export const loginReducer=(state=initialState,{type,payload})=>{
     switch(type){
         case ActionTypes.LOGIN_LOADING : return {...state, loading:true}
         case ActionTypes.LOGIN_ERROR: return {...state , loading:false, error:true}
         case ActionTypes.LOGIN_SUCCESS :return {...state, loading:false,error:false,data:payload}
         default : return state
         
     }
}