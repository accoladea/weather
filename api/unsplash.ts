import axios from "axios"
import { Result } from "../types"

const request = axios.create({
    baseURL: "https://api.unsplash.com",
    params: {
        orientation: "portrait",
        page: "1",
        per_page: "100",
        client_id: process.env.NEXT_PUBLIC_UNSPLASH_CLIENT_ID,
    },
})

export async function fetchImage(today: String, dark: boolean) {
    let color = dark ? "black" : "blue"
    let weather = today === "Clear" ? "Sky" : today

    let sq = "&query=" + weather + "&color=" + color

    const res = await request.get(`/search/photos?${sq}`)
    return <Result[]>res.data.results
}
