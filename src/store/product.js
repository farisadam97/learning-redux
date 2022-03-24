import { createAction,createReducer,createSlice } from "@reduxjs/toolkit"

/**
 * 
 * @param {name, price, isDiscount} product 
 * @returns 
 */

const initialState = []
let lastId = 0

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
        },
        productRemoved : (products,action) => {
            const index = products.findIndex(product => product.id === action.payload.id)
            products.splice(index,1)
        }
    }
})

export const {productAdded,editDiscountOnId,productRemoved} = slice.actions

export default slice.reducer