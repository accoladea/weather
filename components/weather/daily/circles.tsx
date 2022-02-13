import { Thermostat } from "@mui/icons-material"
import { Box, Tooltip } from "@mui/material"
import { ReactNode } from "react"
import { Daily } from "../../../types"
import { CloudRainIcon, HumidityIcon, SnowflakeIcon, UmbrellaIcon } from "../../ui/icons"

interface Circles {
    unit: string
    celsius: boolean
    item: Daily
}

function Circle({ children }: { children: ReactNode }) {
    return (
        <Box
            sx={{
                borderRadius: "50%",
                bgcolor: "rgba(0,0,0,0.8)",
                color: "white",
                width: "85px",
                height: "85px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",

                fontSize: "0.75rem",
            }}
        >
            {children}
        </Box>
    )
}

export default function Circles({ unit, celsius, item }: Circles) {
    return (
        <Box
            sx={{
                mt: 3,
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
                textAlign: "center",
                gap: 1,
            }}
        >
            <Circle>
                <Box fontSize="1.25rem">
                    <Thermostat sx={{ position: "relative", top: "5px" }} />
                    {unit}
                </Box>
                <Box>
                    {item.temp.min.toFixed()}° / {item.temp.max.toFixed()}°
                </Box>
            </Circle>
            <Circle>
                <HumidityIcon fontSize="medium" />
                Humidity <br />
                {item.humidity}%
            </Circle>
            <Circle>
                <Tooltip title="Probability of Precipitation">
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <UmbrellaIcon />
                        <span style={{ fontSize: "0.65rem" }}>Precipitation</span>
                        {Math.round(item.pop * 100)}%
                    </Box>
                </Tooltip>
            </Circle>

            {item.snow && (
                <Circle>
                    <SnowflakeIcon />
                    Snowfall:
                    <br />
                    {celsius ? item.snow + " mm" : (item.snow / 25.4).toFixed(3) + " in"}
                </Circle>
            )}
            {item.rain && (
                <Circle>
                    <CloudRainIcon />
                    Rainfall:
                    <br />
                    {celsius ? item.rain + " mm" : (item.rain / 25.4).toFixed(3) + " in"}
                </Circle>
            )}
        </Box>
    )
}
