import store from "./store/store";
import {editDiscountOnId, productAdded,productRemoved} from "./store/product"
import { cartAdded, cartRemoved } from "./store/cart";

store.subscribe(()=>{
    console.log("Store changed!",store.getState())
})

store.dispatch(productAdded({
    name:"lala",
    price:12
}))

store.dispatch(productRemoved({
    id:1
}))

store.dispatch(productAdded({
    name:"lala2",
    price:123
}))

store.dispatch(editDiscountOnId({
    id:2,
    isDiscount:true
}))

store.dispatch(cartAdded({
    productId:2,
    quantity:2
}))

store.dispatch(cartAdded({
    productId:3,
    quantity:43
}))

store.dispatch(cartRemoved({
    id:1
}))


// console.log(store.getState())