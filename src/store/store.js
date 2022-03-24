import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import reducer from "./rootReducer";

import { configureStore } from "@reduxjs/toolkit";

// const store = createStore(
//     reducer,
//     // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//     devToolsEnhancer({trace:true})

//     )

// export default store

const store = configureStore({
    reducer
});

export default store;
