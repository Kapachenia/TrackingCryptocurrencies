import {DetailsHistoryType, itemsAPI, ItemsType} from "../api/api"
import {Dispatch} from "react";

const InitialState = {
    detailsInformation: {} as ItemsType,
    detailsHistory: [] as Array<DetailsHistoryType>,
    errorDetails: ''
}

type InitialStateType = typeof InitialState


export const detailsInformation = (state: InitialStateType = InitialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-DETAILS-HISTORY":
            return {...state, detailsHistory: action.detailsHistory}
        case "SET-DETAILS-INFORMATION":
            return {...state, detailsInformation: action.currency}
        default:
            return state
    }
}

export const setErrorDetails = (errorDetails: string) => {
    return {type: "SET-ERROR-DETAILS", errorDetails} as const
}

export const setCurrency = (currency: ItemsType) => {
    return {type: "SET-DETAILS-INFORMATION", currency} as const
}

export const setDetailsHistory = (detailsHistory: Array<DetailsHistoryType>) => {
    return {type: "SET-DETAILS-HISTORY", detailsHistory} as const
}


export const setDetailsTC = (id: string) => {
    return (dispatch: Dispatch<ActionsType>) => {
        itemsAPI.setDetailsInformation(id)
            .then(res => {
                dispatch(setCurrency(res.data.data))
            })
            .catch(err => {
                console.log(`setDetailsTC ${err.message}`)
                dispatch(setErrorDetails(err.message))
            })
    }
}

export const setHistoryTC = (id: string) => {
    return (dispatch: Dispatch<ActionsType>) => {
        itemsAPI.setDetailsHistory(id)
            .then(res => {
                dispatch(setDetailsHistory(res.data.data))
            })
            .catch(err => {
                console.log(`setHistoryTC ${err.message}`)
                dispatch(setErrorDetails(err.message))
            })
    }
}

type ActionsType = ReturnType<typeof setCurrency>
    | ReturnType<typeof setDetailsHistory>
    | ReturnType<typeof setErrorDetails>
