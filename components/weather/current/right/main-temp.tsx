import { Typography } from "@mui/material"
import React from "react"

export type MainTempProps = { temp: number; unit: string }
export default function MainTemp({ temp, unit }: MainTempProps) {
    return (
        <Typography variant="h2" sx={{ textAlign: { xs: "center", md: "inherit" } }}>
            {Math.round(temp) + unit}
        </Typography>
    )
}
