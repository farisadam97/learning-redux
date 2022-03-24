import store from "./store/store";
import {editDiscountOnId, productAdded,productRemoved} from "./store/product"

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

store.dispatch(productAdded({
    name:"lala3",
    price:123
}))


// console.log(store.getState())