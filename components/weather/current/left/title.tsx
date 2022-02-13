import { Box, Typography } from "@mui/material"
import React from "react"

type TitleProps = {
    state?: string
    city: string
    country: string
}

export default function Title({ city, state, country }: TitleProps) {
    return (
        <Typography
            variant="h4"
            paragraph
            sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "5px",
                mt: 2,
                justifyContent: "center",
                // textShadow: "1px 1px 1px black",
                color: "text.primary",
                fontWeight: "500",
                textAlign: "center",
            }}
        >
            <Box component="span">{city + ", "}</Box>
            <Box component="span">{state && city !== state ? state : country}</Box>
        </Typography>
    )
}
