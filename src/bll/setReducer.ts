import { itemsAPI } from "../api/api"

const InitialState = {
    data: [],
    pageSize: 10,
    totalPage: 0,
    currentPage: 1,
    offset: 100,
}

type InitialStateType = typeof InitialState


export const setReducer = (state: InitialStateType = InitialState, action: ActionType): InitialStateType => {
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

export const setCurrency = (payload: any) => {
    return {type: "SET-CURRENCY", payload} as const
}

export const setCurrentPage = (currentPage: any) => {
    return {type: "SET-CURRENT-PAGE", currentPage} as const
}

export const setTotalPage = (totalPage: any) => {
    return {type: "SET-TOTAL-PAGE", totalPage} as const
}

export const setOffset = (offset: any) => {
    return {type: "SET-OFFSET", offset} as const
}





export const setCurrencyTC = (offset: number) => {
    return (dispatch: any) => {
        itemsAPI.setItems(offset)
            .then(res => {
                dispatch(setCurrency(res.data.data))
                dispatch(setOffset(offset))
                dispatch(setTotalPage(res.data.data.length))
            })
    }
}

export type itemType = {
    id: string,
    rank: string,
    symbol: string,
    name: string,
    supply: string,
    maxSupply: string,
    marketCapUsd: string,
    volumeUsd24Hr: string,
    priceUsd: string,
    changePercent24Hr: string,
    vwap24Hr: string,
    explorer: string,
}

type ActionType = ReturnType<typeof setCurrency> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalPage> |
    ReturnType<typeof setOffset>