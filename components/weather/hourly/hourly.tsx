import { Box, Typography } from "@mui/material"
import { memo } from "react"
import { useWeather } from "../../../store/react-query/weather"
import { useAppSelector } from "../../../store/redux/hooks"
import { Hourly, TimeType, WeatherData } from "../../../types"
import CardItem from "./card-item"

export default function HourlyWeather() {
    const queryInfo = useWeather()
    const data: WeatherData = queryInfo.data
    if (!data) return null

    const hourly: Hourly[] = data.hourly
    const time = {
        timezone: data.timezone,
        sunset: data.current.sunset,
        sunrise: data.current.sunrise,
    }

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                borderRadius: 1,
                pb: 0,
            }}
        >
            <Typography sx={{ color: "text.secondary" }}>HOURLY FORECAST</Typography>
            <Box
                sx={{
                    display: "flex",
                    gap: 2,
                    pb: 2,
                    pl: 1,
                    pt: 1,
                    overflowX: "auto",
                }}
            >
                {hourly.slice(0, 24).map((item, index) => (
                    <CardItem key={index} idx={index} item={item} time={time} />
                ))}
            </Box>
        </Box>
    )
}
