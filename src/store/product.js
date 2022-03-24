import { createAction,createReducer,createSlice } from "@reduxjs/toolkit"

/**
 * 
 * @param {name, price, isDiscount} product 
 * @returns 
 */

const initialState = {
    list:[]
}
let lastId = 0

const slice = createSlice({
    name:"products",
    initialState:initialState,

    reducers:{
        ApiRequestSuccess:(products,action)=>{
            products.list = action.payload
        } ,
        productAdded : (products,action) =>{
            products.list.push({
                id:++lastId,
                name:action.payload.name,
                price:action.payload.price,
                isDiscount:false
            })
        },
        editDiscountOnId : (products,action) => {
            const index = products.list.findIndex(product => product.id === action.payload.id)
            if(index>-1){
                products[index].isDiscount = action.payload.isDiscount
            }
        },
        productRemoved : (products,action) => {
            const index = products.list.findIndex(product => product.id === action.payload.id)
            products.splice(index,1)
        }
    }
})

export const {productAdded,editDiscountOnId,productRemoved,ApiRequestSuccess} = slice.actions

export default slice.reducer 