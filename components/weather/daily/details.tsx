import { Box, Typography } from "@mui/material"
import { Daily } from "../../../types"
import { degreesToCardinal } from "../../../utils"

export default function Details({
    item,
    unit,
    date,
}: {
    item: Daily
    unit: string
    date: string
}) {
    return (
        <>
            <Box
                sx={{
                    bgcolor: "rgba(255,255,255,0.075)",
                    borderRadius: 1,
                    mt: 3,
                    border: 0,
                    flexGrow: 1,
                    flexShrink: 0,
                    p: 1,
                    textAlign: "center",
                }}
            >
                <Typography>{date}</Typography>
                <Typography>
                    Weather will drop to the low of {Math.round(item.temp.min) + unit} and
                    it will rise to the high of {Math.round(item.temp.max) + unit} with{" "}
                    {item.humidity}% humidity
                </Typography>
                <Typography>
                    Wind speed will be {Math.round(item.wind_speed)}
                    <i> mph</i> directed {item.wind_deg}° degrees to{" "}
                    <i>{degreesToCardinal(item.wind_deg)}</i> with the gust of{" "}
                    {Math.round(item.wind_gust)}
                    <i> mph</i>
                </Typography>
            </Box>
            <Box
                sx={{
                    bgcolor: "rgba(255,255,255,0.05)",
                    borderRadius: 1,
                    mt: 3,
                    border: 0,
                    flexGrow: 1,
                    flexShrink: 0,
                    p: 1,
                    textAlign: "center",
                }}
            >
                <Typography>
                    UV: {item.uvi} | Dew point: {item.dew_point} <br />
                    Atmospheric Pressure: {item.pressure} <i>hPa</i>
                </Typography>
            </Box>
        </>
    )
}
