import { Box } from "@mui/material"
import React from "react"

export default function Icon({ icon }: { icon: string }) {
    return (
        <Box
            sx={{
                backgroundImage: `url("http://openweathermap.org/img/wn/${icon}@2x.png")`,
                width: "100px",
                height: "100px",
                backgroundPosition: "center",
                backgroundSize: "141px",
                filter: (t) => `drop-shadow(0 0 1px ${t.palette.text.primary})`,
            }}
        />
    )
}
