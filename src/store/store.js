import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { loginReducers } from "../reducers/loginReducer";
import { registerReducers } from "../reducers/registerReducers";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
        login: loginReducers,
        register: registerReducers
})

export const store= createStore(
    reducers,
        composeEnhancers(
        applyMiddleware(thunk)
    )
)