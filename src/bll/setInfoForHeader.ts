import {itemsAPI} from "../api/api";

const InitialState = {
    infoForHeader: []
}

type InitialStateType = typeof InitialState


export const setInfoForHeader = (state: InitialStateType = InitialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "SET-INFO-FOR-HEADER":
        return {...state, infoForHeader: action.currency}
        default:
            return state
    }
}

export const setInfoForHeaderAC = (currency: any) => {
    return {type: "SET-INFO-FOR-HEADER", currency} as const
}

export const setInfoForHeaderTC = () => {
    return (dispatch: any) => {
        itemsAPI.setInfoForHeader()
            .then(res => {
                dispatch(setInfoForHeaderAC(res.data.data))
            })
    }
}

type ActionType = ReturnType<typeof setInfoForHeaderAC>