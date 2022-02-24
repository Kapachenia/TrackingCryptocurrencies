import axios from "axios";

const instance = axios.create({
    baseURL: `https://api.coincap.io/v2/assets`,
})

export const itemsAPI = {
    setItems(offset: number) {
        return instance.get(`?limit=${100}&offset=${offset}`)
    },
    setDetailsInformation(id: string) {
        return instance.get(`/${id}`)
    },
    setDetailsHistory(id: string | undefined) {
        return instance.get(`/${id}/history?interval=h1`)
    },
    setInfoForHeader() {
        return instance.get(`?limit=${3}&offset=${0}`)
    },
}