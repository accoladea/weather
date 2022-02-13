import axios from "axios"
import { GeopluginData } from "../types"

export async function getLocation() {
    const { data } = await axios.get("http://www.geoplugin.net/json.gp")
    return <GeopluginData>data
}
