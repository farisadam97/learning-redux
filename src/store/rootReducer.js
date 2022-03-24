import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import productReducer from './product'
import cartReducer from './cart'

export default combineReducers({
    products:productReducer,
    carts:cartReducer
})