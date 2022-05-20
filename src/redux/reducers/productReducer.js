import { ActionTypes } from "../contants/actions-types"

 const initialState={
     products:[
     ],
     
 }
 
export const productReducer=(state=initialState,{type,payload})=>
{
switch(type)
{
    case ActionTypes.SET_PRODUCTS:
        return {...state,products:payload};
        case ActionTypes.SORT_PRICE_L_TO_H : let SortData = state.products.sort((a,b)=>{return a.price - b.price})
        return{
           ...state , products:[...SortData]
        }
        case ActionTypes.SORT_PRICE_H_TO_L : let SortData2 = state.products.sort((a,b)=>{return b.price - a.price})
        return{
           ...state , products:[...SortData2]
        }  
        case ActionTypes.SORT_BY_WOMEN : let SortData3 = state.products.filter((e)=>{
            return e.category=="women's clothing"
          })
        return{
           ...state , products:[...SortData3]
        }  
        case ActionTypes.SORT_BY_MEN : let SortData4 = state.products.filter((e)=>{
            return e.category=="men's clothing"
          })
        return{
           ...state , products:[...SortData4]
        }  
       

    default:
        return state    
}

}

export const selectProductReducer=(state=initialState,{type,payload})=>
{
switch(type)
{
    case ActionTypes.SETECTED_PRODUCTS:
        return {...state,...payload};

    default:
        return state    
}

}
