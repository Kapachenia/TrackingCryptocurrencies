import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {setReducer} from "./setReducer";
import {serDetailsInformation} from "./serDetailsInformation";
import { briefcaseReducer } from "./briefcaseReducer";

const rootReducer = combineReducers({
    setReducer: setReducer,
    setDetailsReducer: serDetailsInformation,
    briefcase: briefcaseReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStoreType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store; // for dev