import { createAction,createReducer,createSlice } from "@reduxjs/toolkit"

/**
 * 
 * @param {productId,quantity} carts 
 * @returns 
 */

const initialState = []
let lastId = 0

const slice = createSlice({
    name:"cart",
    initialState:initialState,

    reducers:{
        cartAdded : (carts,action) =>{
            carts.push({
                id:++lastId,
                productId : action.payload.productId,
                quantity: action.payload.quantity
            })
        },
        cartRemoved : (carts,action) => {
            const index = carts.findIndex(cart => cart.id === action.payload.id)
            carts.splice(index,1)
        }
    }
})

export const {cartAdded,cartRemoved} = slice.actions

export default slice.reducer 
