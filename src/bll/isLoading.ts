const InitialState = {
    isLoading: false
}

type InitialStateType = typeof InitialState

export const isLoading = (state: InitialStateType = InitialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-LOADING":
        return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}

export const setStatus = (isLoading: boolean) => {
    return {type: 'SET-LOADING', isLoading} as const
}

type ActionsType = ReturnType<typeof setStatus>