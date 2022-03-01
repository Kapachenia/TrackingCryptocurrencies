import {itemsAPI, ItemsDetailType} from "../api/api";
import {Dispatch} from "react";

const InitialState = {
    infoForHeader: [] as Array<ItemsDetailType>
}

type InitialStateType = typeof InitialState


export const infoHeader = (state: InitialStateType = InitialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-INFO-FOR-HEADER":
        return {...state, infoForHeader: action.currency}
        default:
            return state
    }
}

export const setInfoForHeaderAC = (currency: Array<ItemsDetailType>) => {
    return {type: "SET-INFO-FOR-HEADER", currency} as const
}

export const setInfoForHeaderTC = () => {
    return (dispatch: Dispatch<ActionsType>) => {
        itemsAPI.setInfoForHeader()
            .then(res => {
                dispatch(setInfoForHeaderAC(res.data.data))
            })
    }
}

type ActionsType = ReturnType<typeof setInfoForHeaderAC>