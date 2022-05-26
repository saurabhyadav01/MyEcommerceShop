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
        case ActionTypes.SORT_RATING_L_TO_H : let SortData5 = state.products.sort((a,b)=>{return +a.rating.rate - +b.rating.rate })
        return{
           ...state , Data:[...SortData5]
        }
        case ActionTypes.SORT_RATING_H_TO_L : let SortData6 = state.products.sort((a,b)=>{return +b.rating.rate  -  +a.rating.rate })
        return{
           ...state , Data:[...SortData6]
        }
        case ActionTypes.SORT_NAME_ASS: let nameSort = state.products.sort((a,b)=>{
            let str1  = a.title
            let str2 = b.title
            if(str1.toLowerCase() > str2.toLowerCase()) return 1;
            if(str1.toLowerCase() < str2.toLowerCase()) return -1;
            return 0
        })
        return {...state , Data :[...nameSort]}
        case ActionTypes.SORT_NAME_DISS: let nameSortDis = state.products.sort((a,b)=>{
            let str1  = a.title
            let str2 = b.title
            if(str2.toLowerCase() > str1.toLowerCase()) return 1;
            if(str2.toLowerCase() < str1.toLowerCase()) return -1;
            return 0
        })
        return {...state , Data :[...nameSortDis]}

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
