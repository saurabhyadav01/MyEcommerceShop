import { ActionTypes } from "../contants/actions-types"

 const initialState={
     address:[
     ],
     
 }
 
export const addressReducer=(state=initialState,{type,payload})=>
{
switch(type)
{
    
        case ActionTypes.ADD_ADDRESS:
            return {...state};
            case ActionTypes.FETCH_ADDRESS:
                return {...state,address:payload};

    default:
        return state    
}

}



