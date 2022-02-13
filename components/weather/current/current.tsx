import { Box } from "@mui/material"
import { useContext } from "react"
import { ThemeContext } from "../../../store/context/theme-context"
import { useWeather } from "../../../store/react-query/weather"
import { useAppSelector } from "../../../store/redux/hooks"
import { Current, WeatherData } from "../../../types"
import Left from "./left/left-side"
import Right from "./right/right-side"
import SevenDay from "./sevenday/sevenday"

export default function CurrentWeather() {
    const current: Current | undefined = useWeather((state) => state.current).data
    const location = useAppSelector((state) => state.location.locationObj)
    const isCelcius = useAppSelector((state) => state.location.isCelsius)
    const { opacity } = useContext(ThemeContext)
    if (!current || !location) return null

    const { weather, temp, feels_like, humidity, clouds, wind_speed } = current
    const { name: city, state, country } = location
    const { icon } = weather[0]
    const unit = isCelcius ? "°C" : "°F"
    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                }}
            >
                <Left
                    state={state}
                    city={city}
                    country={country}
                    icon={icon}
                    desc={weather[0].description}
                />
                <Right
                    temp={temp}
                    feels_like={feels_like}
                    humidity={humidity}
                    windSpeed={wind_speed}
                    clouds={clouds}
                    unit={unit}
                />
            </Box>
            <SevenDay />
        </Box>
    )
}
