import {itemsAPI} from "../api/api"
import {Dispatch} from "react";

const InitialState = {
    data: [],
    pageSize: 10,
    totalPage: 11,
    currentPage: 1,
    offset: 100,
    isLoading: true,
}

type InitialStateType = typeof InitialState


export const setReducer = (state: InitialStateType = InitialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
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

export const setStatus = (isLoading: boolean) => {
    return {type: 'SET-LOADING', isLoading} as const
}

export const setCurrency = (payload: any) => {
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
                // console.log(res.data.data)
                dispatch(setCurrency(res.data.data))
                dispatch(setOffset(offset))
                // dispatch(setUpdatePriceCart(res.data.data))
            })
            .catch(err => {
                console.log(err.message)
            })
            .finally(() => {
                dispatch(setStatus(false))
            })
    }
}

type ActionsType = ReturnType<typeof setCurrency> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalPage> |
    ReturnType<typeof setOffset> |
    ReturnType<typeof setStatus>