import * as actions from "./actionTypes"

const initialState = []
let lastId = 0
export default function reducer (state = initialState,action){
    switch (action.type) {
        case actions.ADD_PRODUCT:
            
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
        
        case actions.REMOVE_PRODUCT:
            return state.filter(product => product.id != action.payload.id)
        break

        case actions.EDIT_DISCOUNT:
            return state.map(product => product.id === action.payload.id ? {...product, isDiscount : action.payload.isDiscount} : product )
            break
        default:
            return state;
    }
}