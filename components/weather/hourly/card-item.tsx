import { Box } from "@mui/material"
import React, { useCallback } from "react"
import { Hourly, HourlyTime } from "../../../types"
import { getTime } from "../../../utils"
import CustomTooltip from "./tooltip"

export default function CardItem({
    item,
    idx,
    time,
}: {
    item: Hourly
    idx: number
    time: HourlyTime
}) {
    const { timezone, sunset, sunrise } = time

    return (
        <CustomTooltip item={item}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column",
                    boxShadow: 1,
                    borderRadius: "5px",
                    p: 1,
                    textAlign: "center",
                    px: 2,
                    flexGrow: 1,
                    bgcolor: "custom.card",
                }}
            >
                <Box>
                    <Box sx={{ fontSize: "0.75rem" }}>
                        {idx === 0
                            ? "currently"
                            : getTime(item.dt, sunset, sunrise, timezone)}
                    </Box>
                    <Box sx={{ height: 45 }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                            alt={item.weather[0].description}
                            style={{ filter: "drop-shadow(0 0 1px grey)" }}
                        />
                    </Box>
                    {idx !== 0 && Math.round(item.pop * 100) !== 0 && (
                        <Box
                            sx={{
                                position: "relative",
                                top: "-5px",
                                fontStyle: "italic",
                                fontSize: "0.75rem",
                            }}
                        >
                            {Math.round(item.pop * 100)}%
                        </Box>
                    )}
                </Box>

                <Box>{Math.round(item.temp)}°</Box>
            </Box>
        </CustomTooltip>
    )
}
