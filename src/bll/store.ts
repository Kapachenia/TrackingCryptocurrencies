import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {setReducer} from "./setReducer";
import {setDetailsInformation} from "./serDetailsInformation";

const rootReducer = combineReducers({
    setReducer: setReducer,
    setDetailsReducer: setDetailsInformation,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStoreType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store; // for dev