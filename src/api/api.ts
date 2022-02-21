import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.coincap.io/v2/',
})

export const itemsAPI = {
    setItems(offset: number) {
        return instance.get(`assets?limit=${10}&offset=${offset}`)
    }
}