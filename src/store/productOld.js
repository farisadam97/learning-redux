import { createAction,createReducer,createSlice } from "@reduxjs/toolkit"

// export const ADD_PRODUCT = "productAdded"
// export const REMOVE_PRODUCT = "productRemoved"
// export const EDIT_DISCOUNT = "changeDiscount"

/**
 * 
 * @param {name, price, isDiscount} product 
 * @returns 
 */

// export const productAdded = createAction(ADD_PRODUCT)

// export function productAdded(product = {}){
//     return {
//         type: ADD_PRODUCT,
//         payload: {
//             name: product.name ? product.name : null,
//             price: product.price ? product.price : null,
//             isDiscount: product.isDiscount ? true : false
//         }
//     }
// }

export function productRemoved(product = {}){
    return {
        type: REMOVE_PRODUCT,
        payload: {
            id: product.id
        }
    }
}

// export const editDiscountOnId = createAction(EDIT_DISCOUNT)

// export function editDiscountOnId(product={}){
//     return{
//         type: EDIT_DISCOUNT,
//         payload : {
//             id: product.id,
//             isDiscount : product.isDiscount
//         }
//     }
// }

const initialState = []
let lastId = 0

// export default createReducer(initialState,{
//     // key
//     // action
//     productAdded : (products,action) =>{
//         products.push({
//             id:++lastId,
//             name:action.payload.name,
//             price:action.payload.price,
//             isDiscount:false
//         })
//     },
//     editDiscountOnId : (products,action) => {
//         const index = products.findIndex(product => product.id === action.payload.id)
//         if(index>-1){
//             products[index].isDiscount = action.payload.isDiscount
//         }
//     }
// })

// export default function reducer (state = initialState,action){
//     switch (action.type) {
//         case ADD_PRODUCT:
            
//             return [
//                 ...state,
//                 {
//                     id:++lastId,
//                     name:action.payload.name,
//                     price:action.payload.price,
//                     isDiscount:false
//                 }
//             ]
//             break;
        
//         case REMOVE_PRODUCT:
//             return state.filter(product => product.id != action.payload.id)
//             break

//         case EDIT_DISCOUNT:
//             return state.map(product => product.id === action.payload.id ? {...product, isDiscount : action.payload.isDiscount} : product )
//             break
//         default:
//             return state;
//     }
// }

//createSlice

const slice = createSlice({
    name:"products",
    initialState:initialState,

    reducers:{
        productAdded : (products,action) =>{
            products.push({
                id:++lastId,
                name:action.payload.name,
                price:action.payload.price,
                isDiscount:false
            })
        },
        editDiscountOnId : (products,action) => {
            const index = products.findIndex(product => product.id === action.payload.id)
            if(index>-1){
                products[index].isDiscount = action.payload.isDiscount
            }
        }
    }
})

export const {productAdded,editDiscountOnId} = slice.actions

export default slice.reducer