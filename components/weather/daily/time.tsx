import { Box, Divider } from "@mui/material"

export default function Time({
    title,
    dt,
    timezone,
}: {
    title: string
    dt: number
    timezone: string
}) {
    return (
        <Box
            sx={{
                textAlign: "center",
                bgcolor: "rgba(255,255,255,0.1)",
                width: "150px",
                borderRadius: 1,
                py: "2px",
                boxShadow: 1,
            }}
        >
            <span>{title}</span>
            <Divider />
            <span>
                {new Date(dt * 1000).toLocaleTimeString(window.navigator.language, {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: false,
                    timeZone: timezone,
                })}
            </span>
        </Box>
    )
}
