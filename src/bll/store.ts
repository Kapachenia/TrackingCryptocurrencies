import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {setReducer} from "./setReducer";
import {serDetailsInformation} from "./serDetailsInformation";
import {setBriefcase} from "./setBriefcase";
import {setInfoForHeader} from "./setInfoForHeader";
import {isLoading} from "./isLoading";

const rootReducer = combineReducers({
    setReducer: setReducer,
    setDetailsReducer: serDetailsInformation,
    briefcase: setBriefcase,
    headerInformation: setInfoForHeader,
    loading: isLoading,
})

export const store = createStore(rootReducer, applyMiddleware(thunk),)

store.subscribe(() => {
localStorage.setItem('state', JSON.stringify(store.getState().briefcase.currencyInBriefcase))
})


export type AppRootStoreType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store; // for dev