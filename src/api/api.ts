import axios from "axios";

const instance = axios.create({
    baseURL: `https://api.coincap.io/v2/assets`,
})

export const itemsAPI = {
    setItems(offset: number) {
        return instance.get(`?limit=${10}&offset=${offset}`)
    },
    setDetailsInformation(id: string) {
        return instance.get(`/${id}`)
    }
}