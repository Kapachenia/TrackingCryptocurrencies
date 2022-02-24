const InitialState = {
    currencyInBriefcase: [
        {} as { id: string, name: string, count: string, price: string}
    ],
    priceBriefcase: 0,
    oldPriceBriefcase: [0],
}

type InitialStateType = typeof InitialState

export const setBriefcase = (state: InitialStateType = InitialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "SET-IN-BRIEFCASE-FROM-LOCAL-STORAGE":
            return {...state, currencyInBriefcase: action.payload}
        case "SET-OLD-PRICE-BRIEFCASE":
            return {...state, oldPriceBriefcase: [...state.oldPriceBriefcase, action.oldPrice]}
        case "ADD-PRICE-IN-CURRENCY":
            return {...state, priceBriefcase: action.price + state.priceBriefcase}
        case "SET-IN-BRIEFCASE":
            const newObject = {id: action.id, name: action.name, count: action.count, price: action.price}
            return {...state, currencyInBriefcase: [...state.currencyInBriefcase, newObject]}
        case "DELETE-CURRENCY":
            return {...state, currencyInBriefcase: [...state.currencyInBriefcase].filter(f => f.id !== action.id)}
        default:
            return state
    }
}

export const setInBriefcase = (id?: any, name?: any, count?: any, price?: any) => {
    return {type: "SET-IN-BRIEFCASE", id, name, count, price} as const
}

export const deleteCurrency = (id: string) => {
    return {type: "DELETE-CURRENCY", id} as const
}

export const addPriceInBriefcase = (price: any) => {
    return {type: "ADD-PRICE-IN-CURRENCY", price} as const
}

export const setOldPriceBriefcase = (oldPrice: number) => {
    return {type: "SET-OLD-PRICE-BRIEFCASE", oldPrice} as const
}

export const setInBriefcaseFromLocalStorage = (payload: any) => {
    return {type: "SET-IN-BRIEFCASE-FROM-LOCAL-STORAGE", payload} as const
}

export type BriefcaseType = {
    id: string
    name: string
    count: string
    price: string
}

type ActionType = ReturnType<typeof setInBriefcase> |
    ReturnType<typeof deleteCurrency> |
    ReturnType<typeof addPriceInBriefcase> |
    ReturnType<typeof setOldPriceBriefcase> |
    ReturnType<typeof setInBriefcaseFromLocalStorage>