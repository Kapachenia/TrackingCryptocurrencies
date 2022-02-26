import {Dispatch} from "react";
import {ItemsType} from "../api/api";

const InitialState = {
    currencyInBriefcase: [
        {} as CurrencyInBriefcaseType
    ],
    priceBriefcase: 0,
    oldPriceBriefcase: [0],
}

type InitialStateType = typeof InitialState

export const setBriefcase = (state: InitialStateType = InitialState, action: ActionsType): InitialStateType => {
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
            const newObject = {id: action.id, name: action.name, count: action.count, price: action.price}
            let test = state.currencyInBriefcase.find(f => f.id == action.id)
            if (test) {
                return {
                    ...state, currencyInBriefcase: state.currencyInBriefcase
                        .map(m => m.id === action.id ? {
                            ...m,
                            count: m.count + action.count,
                            price: m.price + action.price
                        } : m)
                }
            } else {
                return {...state, currencyInBriefcase: [...state.currencyInBriefcase, newObject]}
            }
        case "DELETE-CURRENCY":
            return {
                ...state, currencyInBriefcase: [...state.currencyInBriefcase]
                    .filter(f => f.id !== action.id)
            }
        default:
            return state
    }
}

export const deletePriceInBriefcase = (price: number) => {
    return {type: "DELETE-PRICE-IN-CURRENCY", price} as const
}

export const setInBriefcase = (id?: string, name?: string, count?: any, price?: any) => {
    return {type: "SET-IN-BRIEFCASE", id, name, count, price} as const
}

export const deleteCurrency = (id: string | undefined) => {
    return {type: "DELETE-CURRENCY", id} as const
}

export const addPriceInBriefcase = (price: number) => {
    return {type: "ADD-PRICE-IN-CURRENCY", price} as const
}

export const setOldPriceBriefcase = (oldPrice: number) => {
    return {type: "SET-OLD-PRICE-BRIEFCASE", oldPrice} as const
}

export const setInBriefcaseFromLocalStorage = (payload: Array<ItemsType>) => {
    return {type: "SET-IN-BRIEFCASE-FROM-LOCAL-STORAGE", payload} as const
}

export const priceBriefcaseFromLocalStorage = (payload: Array<any>) => {
    return (dispatch: Dispatch<ActionsType>) => {
        dispatch(setInBriefcaseFromLocalStorage(payload))
        console.log(payload)
        let res = payload.map((m: { price: string; count: number; }) => Number(m.price))
            .reduce((prev: any, acc: any) => prev + acc)
        dispatch(addPriceInBriefcase(res))
    }
}

export type BriefcaseType = {
    id: string
    name: string
    count: string
    price: string
}

export type CurrencyInBriefcaseType = {
    id?: string
    name?: string
    count?: string
    price?: string
}

type ActionsType = ReturnType<typeof setInBriefcase> |
    ReturnType<typeof deleteCurrency> |
    ReturnType<typeof addPriceInBriefcase> |
    ReturnType<typeof setOldPriceBriefcase> |
    ReturnType<typeof setInBriefcaseFromLocalStorage> |
    ReturnType<typeof deletePriceInBriefcase>