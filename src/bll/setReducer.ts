import {itemsAPI, ItemsDetailType} from "../api/api"
import {Dispatch} from "react";

const InitialState = {
    data: [] as Array<ItemsDetailType>,
    pageSize: 10,
    totalPage: 11,
    currentPage: 1,
    offset: 100,
    isLoading: false,
    error: ''
}

type InitialStateType = typeof InitialState

export const setReducer = (state: InitialStateType = InitialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-ERROR":
            return {...state, error: action.error}
        case "SET-LOADING":
            return {...state, isLoading: action.isLoading}
        case "SET-OFFSET":
            return {...state, offset: action.offset}
        case "SET-CURRENCY":
            return {...state, data: action.payload}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET-TOTAL-PAGE":
            return {...state, totalPage: action.totalPage}
        default:
            return state
    }
}

export const setError = (error: string) => {
    return {type: "SET-ERROR", error} as const
}

export const setStatus = (isLoading: boolean) => {
    return {type: "SET-LOADING", isLoading} as const
}

export const setCurrency = (payload: Array<ItemsDetailType>) => {
    return {type: "SET-CURRENCY", payload} as const
}

export const setCurrentPage = (currentPage: number) => {
    return {type: "SET-CURRENT-PAGE", currentPage} as const
}

export const setTotalPage = (totalPage: number) => {
    return {type: "SET-TOTAL-PAGE", totalPage} as const
}

export const setOffset = (offset: number) => {
    return {type: "SET-OFFSET", offset} as const
}

export const setCurrencyTC = (offset: number) => {
    return (dispatch: Dispatch<ActionsType>) => {
        dispatch(setStatus(true))
        itemsAPI.setItems(offset)
            .then(res => {
                dispatch(setCurrency(res.data.data))
                dispatch(setOffset(offset))
            })
            .catch(err => {
                dispatch(setError(err.message))
            })
            .finally(() => {
                dispatch(setStatus(false))
            })
    }
}

type ActionsType = ReturnType<typeof setCurrency>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalPage>
    | ReturnType<typeof setOffset>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof setError>