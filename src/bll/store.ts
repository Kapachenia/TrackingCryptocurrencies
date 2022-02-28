import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {detailsInformation} from "./detailsInformation";
import {cart} from "./cart";
import {infoHeader} from "./infoHeader";
import {setReducer} from "./setReducer";

const rootReducer = combineReducers({
    setReducer: setReducer,
    setDetailsReducer: detailsInformation,
    cart: cart,
    headerInformation: infoHeader,
})

export const store = createStore(rootReducer, applyMiddleware(thunk),)

store.subscribe(() => {
localStorage.setItem('state', JSON.stringify(store.getState().cart.currencyInBriefcase))
})


export type AppRootStoreType = ReturnType<typeof rootReducer>