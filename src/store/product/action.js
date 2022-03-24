import * as actions from "./actionTypes"

/**
 * 
 * @param {name, price, isDiscount} product 
 * @returns 
 */
 export function productAdded(product = {}){
    return {
        type: actions.ADD_PRODUCT,
        payload: {
            name: product.name ? product.name : null,
            price: product.price ? product.price : null,
            isDiscount: product.isDiscount ? true : false
        }
    }
}

export function productRemoved(product = {}){
    return {
        type: actions.REMOVE_PRODUCT,
        payload: {
            id: product.id
        }
    }
}


export function editDiscountOnId(product={}){
    return{
        type: actions.EDIT_DISCOUNT,
        payload : {
            id: product.id,
            isDiscount : product.isDiscount
        }
    }
}


