import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { loginReducers } from "../reducers/loginReducer";
import { productsReducer } from "../reducers/productsReducer";
import { registerReducers } from "../reducers/registerReducers";
import { getLocalStorage, saveLocalStorage } from "../utils/LocalStorage";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const storageState = getLocalStorage()

console.log(storageState)

const reducers = combineReducers({
    login: loginReducers,
    register: registerReducers,
    products: productsReducer
})

export const store = createStore(
    reducers,
    storageState,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

store.subscribe(() => {
    saveLocalStorage(
        store.getState().products.detailProduct
    )
})