
const InitialState = {
    currencyInBriefcase: [
        {id: 'awdaw', name: 'bitcoin', count: '10'},
        {id: 'aawdwdaw', name: 'adawdwa', count: '12'},
    ]
}

type InitialStateType = typeof InitialState


export const briefcaseReducer = (state: InitialStateType = InitialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "SET-IN-BRIEFCASE":
            const newObject={id: action.id, name: action.name, count: action.count}
            return {...state, currencyInBriefcase: [...state.currencyInBriefcase, newObject]}

        default:
            return state
    }
}

export const setInBriefcase = (id?: any, name?: any, count?: any) => {
    return {type: "SET-IN-BRIEFCASE", id, name, count} as const
}

export type currencyInBriefcaseType = {
    currencyInBriefcase: Array<BriefcaseType>
}

export type BriefcaseType = {
    id: string
    name: string
    count: string
}

type ActionType = ReturnType<typeof setInBriefcase>