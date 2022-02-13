import { Box } from "@mui/material"
import React from "react"
import Description from "./description"
import Icon from "./icon"

type WeatherDetailsProps = {
    icon: string
    desc: string
}

export default function WeatherDetails({ icon, desc }: WeatherDetailsProps) {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Icon icon={icon} />
            <Description description={desc} />
        </Box>
    )
}
