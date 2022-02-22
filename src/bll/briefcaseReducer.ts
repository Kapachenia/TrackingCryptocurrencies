
const InitialStateBriefcase = {
    currencyInBriefcase: [
        {name: 'bitcoin', count: 10},
        {name: 'adawdwa', count: 12},
    ]
}


export const briefcaseReducer = (state: any = InitialStateBriefcase, action: any): any => {
    switch (action.type) {

        default:
            return state
    }
}

export const setInBriefcase = (payload: any) => {
    return {type: "SET-DETAILS-HISTORY", payload} as const
}



// type ActionType = ReturnType<typeof setCurrency> |
//     ReturnType<typeof setDetailsHistory>
