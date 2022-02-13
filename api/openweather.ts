import axios from "axios"
import { CoordType } from "../types"

const request = axios.create({
    baseURL: "https://api.openweathermap.org",
    params: {
        appid: process.env.NEXT_PUBLIC_OPENWEATHER_APPID,
    },
})

export async function getGeolocation(searchTerm: string, coord?: CoordType) {
    if (!searchTerm && !coord) {
        return Promise.reject("failed to geo locate")
    }
    console.log(request.defaults)
    let encoded = !coord
        ? "direct?q=" + encodeURI(searchTerm)
        : `reverse?lat=${coord.lat}&lon=${coord.lon}`

    const res = await request.get(`/geo/1.0/${encoded}&limit=5`)
    return res.data
}

export async function getWeather({
    coord,
    celsius,
}: {
    coord?: CoordType
    celsius?: boolean
}) {
    if (!coord) {
        return Promise.reject<{ failure: string }>({
            failure: "fetch failed with lat and lon being both zero",
        })
    }
    const unit = celsius ? "metric" : "imperial"
    const { lat, lon } = coord

    const res = await request.get(`/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${unit}`)
    return res.data
}
