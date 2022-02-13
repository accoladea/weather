import { Tooltip } from "@mui/material"
import { Box } from "@mui/system"
import { ReactElement } from "react"
import { Hourly } from "../../../types"

type CustomTooltipProps = {
    children: ReactElement
    item: Hourly
}

export default function CustomTooltip({ children, item }: CustomTooltipProps) {
    const { snow, rain } = item

    const title = (
        <Box textAlign="center">
            {new Date(item.dt * 1000).toLocaleString(window.navigator.language, {
                weekday: "short",
                month: "short",
                day: "numeric",
            })}
            <br />
            {item.weather[0].description[0].toUpperCase() +
                item.weather[0].description.substring(1)}
            <br />
            Humidity {item.humidity}%
            <br />
            Clouds {item.clouds}%
            <br />
            Precipitation {Math.round(item.pop * 100)}%
            <br />
            {snow ? `Snowfall ${snow["1h"].toFixed(2)} mm` : ""}
            {rain ? `RainFall ${rain["1h"].toFixed(2)} mm` : ""}
        </Box>
    )

    return (
        <Tooltip title={title} arrow placement="bottom">
            {children}
        </Tooltip>
    )
}
