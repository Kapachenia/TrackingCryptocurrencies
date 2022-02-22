import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {setReducer} from "./setReducer";
import {serDetailsInformation} from "./serDetailsInformation";

const rootReducer = combineReducers({
    setReducer: setReducer,
    setDetailsReducer: serDetailsInformation,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStoreType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store; // for dev