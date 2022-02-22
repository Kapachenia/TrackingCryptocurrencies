import {itemsAPI} from "../api/api"

const InitialState = {
    detailsInformation: {},
    detailsHistory: []
}

type InitialStateType = typeof InitialState


export const serDetailsInformation = (state: InitialStateType = InitialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "SET-DETAILS-HISTORY":
            return {...state, detailsHistory: action.detailsHistory}
        case "SET-DETAILS-INFORMATION":
            return {...state, detailsInformation: action.currency}
        default:
            return state
    }
}

export const setCurrency = (currency: any) => {
    return {type: "SET-DETAILS-INFORMATION", currency} as const
}

export const setDetailsHistory = (detailsHistory: any) => {
    return {type: "SET-DETAILS-HISTORY", detailsHistory} as const
}


export const setDetailsTC = (id: string) => {
    return (dispatch: any) => {
        itemsAPI.setDetailsInformation(id)
            .then(res => {
                // console.log(res.data.data)
                dispatch(setCurrency(res.data.data))
            })
    }
}

export const setHistoryTC = (id: string) => {
    return (dispatch: any) => {
            itemsAPI.setDetailsHistory(id)
                .then(res => {
                    dispatch(setDetailsHistory(res.data.data))
                })
    }
}


export type CurrencyUnit = {
    "id"?: string
    "rank"?: string
    "symbol"?: string
    "name"?: string
    "supply"?: string
    "maxSupply"?: string
    "marketCapUsd"?: string
    "volumeUsd24Hr"?: string
    "priceUsd"?: string
    "changePercent24Hr"?: string
    "vwap24Hr"?: string
}

export type CurrencyUnitHistory = {
    circulatingSupply: string
    date: string
    priceUsd: string
    time: number
}

type ActionType = ReturnType<typeof setCurrency> |
    ReturnType<typeof setDetailsHistory>
