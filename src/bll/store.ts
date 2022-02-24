import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {setReducer} from "./setReducer";
import {serDetailsInformation} from "./serDetailsInformation";
import {setBriefcase} from "./setBriefcase";
import {setInfoForHeader} from "./setInfoForHeader";

const rootReducer = combineReducers({
    setReducer: setReducer,
    setDetailsReducer: serDetailsInformation,
    briefcase: setBriefcase,
    headerInformation: setInfoForHeader,
})

let preloadedState
const persistedTodosString = localStorage.getItem('state')

if (persistedTodosString) {
    preloadedState = JSON.parse(persistedTodosString)
}

export const store = createStore(rootReducer, preloadedState, applyMiddleware(thunk),)

store.subscribe(() => {
    // store.getState().briefcase.currencyInBriefcase !==  && localStorage.setItem('state', JSON.stringify(store.getState().briefcase.currencyInBriefcase))
localStorage.setItem('state', JSON.stringify(store.getState().briefcase.currencyInBriefcase))
})


export type AppRootStoreType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store; // for dev