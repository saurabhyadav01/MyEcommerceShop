import { ActionTypes } from "../contants/actions-types"

 const initialState={
     cartProducts:[
     ],
     
 }
 
export const cartProductReducer=(state=initialState,{type,payload})=>
{
switch(type)
{
    case ActionTypes.CART_ITMES:
        return {...state,cartProducts:payload};
    

    default:
        return state    
}

}

