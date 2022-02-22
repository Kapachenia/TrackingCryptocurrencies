import {itemsAPI} from "../api/api"

const InitialState = {
    detailsInformation: {},
}

type InitialStateType = typeof InitialState


export const setDetailsInformation = (state: InitialStateType = InitialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "SET-DETAILS-INFORMATION":
        return {...state, detailsInformation: action.currency}
        default:
            return state
    }
}

export const setCurrency = (currency: any) => {
    return {type: "SET-DETAILS-INFORMATION", currency} as const
}


export const setDetailsTC = (id: string) => {
    return (dispatch: any) => {
        itemsAPI.setDetailsInformation(id)
            .then(res => {
                console.log(res.data.data)
                dispatch(setCurrency(res.data.data))
                debugger
            })
    }
}


export type CurrencyUnit = {
    "id"?: string,
    "rank"?: string,
    "symbol"?: string,
    "name"?: string,
    "supply"?: string,
    "maxSupply"?: string,
    "marketCapUsd"?: string,
    "volumeUsd24Hr"?: string,
    "priceUsd"?: string,
    "changePercent24Hr"?: string,
    "vwap24Hr"?: string,
}

type ActionType = ReturnType<typeof setCurrency>
