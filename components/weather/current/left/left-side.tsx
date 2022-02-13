import { Box } from "@mui/material"
import Title from "./title"
import WeatherDetails from "./weather-details"

type LeftHalfProps = {
    state?: string
    city: string
    country: string
    icon: string
    desc: string
}
export default function LeftHalf({ state, city, country, icon, desc }: LeftHalfProps) {
    return (
        <Box>
            <Title city={city} state={state} country={country} />
            <WeatherDetails icon={icon} desc={desc} />
        </Box>
    )
}
