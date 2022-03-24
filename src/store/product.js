export const ADD_PRODUCT = "productAdded"
export const REMOVE_PRODUCT = "productRemoved"
export const EDIT_DISCOUNT = "changeDiscount"

/**
 * 
 * @param {name, price, isDiscount} product 
 * @returns 
 */
export function productAdded(product = {}){
    return {
        type: ADD_PRODUCT,
        payload: {
            name: product.name ? product.name : null,
            price: product.price ? product.price : null,
            isDiscount: product.isDiscount ? true : false
        }
    }
}

export function productRemoved(product = {}){
    return {
        type: REMOVE_PRODUCT,
        payload: {
            id: product.id
        }
    }
}

export function editDiscountOnId(product={}){
    return{
        type: EDIT_DISCOUNT,
        payload : {
            id: product.id,
            isDiscount : product.isDiscount
        }
    }
}

const initialState = []
let lastId = 0
export default function reducer (state = initialState,action){
    switch (action.type) {
        case ADD_PRODUCT:
            
            return [
                ...state,
                {
                    id:++lastId,
                    name:action.payload.name,
                    price:action.payload.price,
                    isDiscount:false
                }
            ]
            break;
        
        case REMOVE_PRODUCT:
            return state.filter(product => product.id != action.payload.id)
            break

        case EDIT_DISCOUNT:
            return state.map(product => product.id === action.payload.id ? {...product, isDiscount : action.payload.isDiscount} : product )
            break
        default:
            return state;
    }
}