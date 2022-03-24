import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import reducer from "./rootReducer";

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "./middleware/logger";
import api from "./middleware/api";
// const store = createStore(
//     reducer,
//     // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//     devToolsEnhancer({trace:true})

//     )

// export default store

const store = configureStore({
    reducer,
    // middleware:[logger]
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger,api)
});

export default store;
