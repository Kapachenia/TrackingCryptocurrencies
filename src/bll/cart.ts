import {Dispatch} from "react";

const InitialState = {
    currencyInBriefcase: [
    ] as Array<BriefcaseType>,
    priceBriefcase: 0,
    oldPriceBriefcase: [0],
}

type InitialStateType = typeof InitialState

export const cart = (state: InitialStateType = InitialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "DELETE-PRICE-IN-CURRENCY":
            return {...state, priceBriefcase: state.priceBriefcase - action.price}
        case "SET-IN-BRIEFCASE-FROM-LOCAL-STORAGE":
            return {...state, currencyInBriefcase: action.payload}
        case "SET-OLD-PRICE-BRIEFCASE":
            return {...state, oldPriceBriefcase: [...state.oldPriceBriefcase, action.oldPrice]}
        case "ADD-PRICE-IN-CURRENCY":
            return {...state, priceBriefcase: action.price + state.priceBriefcase}
        case "SET-IN-BRIEFCASE":
            const newObject = {id: action.id, name: action.name, count: action.count, price: action.price, idTransaction: action.idTransaction}
            return {...state, currencyInBriefcase: [newObject, ...state.currencyInBriefcase]}
        case "DELETE-CURRENCY":
            return {
                ...state, currencyInBriefcase: [...state.currencyInBriefcase]
                    .filter(f => f.idTransaction !== action.idTransaction)
            }
        default:
            return state
    }
}

export const deletePriceInBriefcase = (price: number) => {
    return {type: "DELETE-PRICE-IN-CURRENCY", price} as const
}

export const setInBriefcase = (id: string, name: string, count: number, price: number, idTransaction: string) => {
    return {type: "SET-IN-BRIEFCASE", id, name, count, price, idTransaction} as const
}

export const deleteCurrency = (idTransaction: string | undefined) => {
    return {type: "DELETE-CURRENCY", idTransaction} as const
}

export const addPriceInBriefcase = (price: number) => {
    return {type: "ADD-PRICE-IN-CURRENCY", price} as const
}

export const setOldPriceBriefcase = (oldPrice: number) => {
    return {type: "SET-OLD-PRICE-BRIEFCASE", oldPrice} as const
}

export const setInBriefcaseFromLocalStorage = (payload: Array<BriefcaseType>) => {
    return {type: "SET-IN-BRIEFCASE-FROM-LOCAL-STORAGE", payload} as const
}

export const priceBriefcaseFromLocalStorage = (payload: Array<BriefcaseType>) => {
    return (dispatch: Dispatch<ActionsType>) => {
        dispatch(setInBriefcaseFromLocalStorage(payload))
        let res = payload.map(m => Number(m.price))
            .reduce((prev: any, acc: any) => prev + acc)
        dispatch(addPriceInBriefcase(res))
    }
}

export type BriefcaseType = {
    id: string
    name: string
    count: number
    price: number
    idTransaction: string
}

type ActionsType = ReturnType<typeof setInBriefcase>
    | ReturnType<typeof deleteCurrency>
    | ReturnType<typeof addPriceInBriefcase>
    | ReturnType<typeof setOldPriceBriefcase>
    | ReturnType<typeof setInBriefcaseFromLocalStorage>
    | ReturnType<typeof deletePriceInBriefcase>
