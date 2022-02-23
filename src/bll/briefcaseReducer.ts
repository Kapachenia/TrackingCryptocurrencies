
const InitialState = {
    currencyInBriefcase: [
        {name: 'bitcoin', count: '10'},
        {name: 'adawdwa', count: '12'},
    ]
}

type InitialStateType = typeof InitialState


export const briefcaseReducer = (state: InitialStateType = InitialState, action: ActionType): InitialStateType => {
    switch (action.type) {

        default:
            return state
    }
}

export const setInBriefcase = (payload: any) => {
    return {type: "SET-DETAILS-HISTORY", payload} as const
}

export type currencyInBriefcaseType = {
    currencyInBriefcase: Array<BriefcaseType>
}

export type BriefcaseType = {
    name: string
    count: string
}

type ActionType = ReturnType<typeof setInBriefcase>