import axios from "axios";

const instance = axios.create({
    baseURL: `https://api.coincap.io/v2/assets`,
})

export const itemsAPI = {
    setItems(offset: number) {
        return instance.get<ItemsResType>(`?limit=${100}&offset=${offset}`)
    },
    setDetailsInformation(id: string) {
        return instance.get<DetailInformationResType>(`/${id}`)
    },
    setDetailsHistory(id: string) {
        return instance.get<DetailsHistoryResType>(`/${id}/history?interval=h1`)
    },
    setInfoForHeader() {
        return instance.get<ItemsResType>(`?limit=${3}&offset=${0}`)
    },
}

type ItemsResType = {
    data: Array<ItemsType>
    timestamp: number
}

export type ItemsType = {
    id: string
    rank: string
    symbol: string
    name: string
    supply: string
    maxSupply: string
    marketCapUsd: string
    volumeUsd24Hr: string
    priceUsd: string
    changePercent24Hr: string
    vwap24Hr: string
}

// export type ItemsForHeaderType = {
//     changePercent24Hr: string
//     explorer: string
//     id: string
//     marketCapUsd: string
//     maxSupply: string
//     name: string
//     priceUsd: string
//     rank: string
//     supply: string
//     symbol: string
//     volumeUsd24Hr: string
//     vwap24Hr: string
// }

export type DetailInformationResType = {
    data: ItemsType
    timestamp: number
}

type DetailsHistoryResType = {
    data: Array<DetailsHistoryType>
}

export type DetailsHistoryType = {
    date: (value: DetailsHistoryType, index: number, array: DetailsHistoryType[]) => number;
    priceUsd: string
    time: number
}