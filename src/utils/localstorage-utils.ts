import {AppRootStoreType} from "../bll/store";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('cart-state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state: AppRootStoreType) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('cart-state', serializedState);
    } catch {
        // ignore write errors
    }
};