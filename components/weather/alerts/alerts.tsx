import { Close as CloseIcon } from "@mui/icons-material"
import { Alert, AlertTitle, Box, Collapse, IconButton, Typography } from "@mui/material"
import { useState } from "react"
import { useWeather } from "../../../store/react-query/weather"
import { Alert as AlertType } from "../../../types"

export default function Alerts() {
    const [open, setOpen] = useState(true)

    const queryInfo = useWeather((state) => state.alerts)
    const alertArr: AlertType[] = queryInfo.data

    if (!alertArr) return null

    const alert = alertArr[0]

    return (
        <Collapse in={open} sx={{ m: 0, p: 0, background: "transparent" }}>
            <Alert
                severity="warning"
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setOpen(false)
                        }}
                    >
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                }
                sx={{ borderRadius: 1, mx: 1 }}
            >
                <AlertTitle>{alert.event}</AlertTitle>
                <Typography variant="subtitle2" fontStyle="italic">
                    {"Source: " + alert.sender_name}
                </Typography>
                <Typography variant="subtitle2">
                    {alert.tags?.map((t) => (
                        <span key={t}>{t}</span>
                    ))}
                </Typography>
                <Box textAlign="right" color="warning.dark">
                    <span>Start: {new Date(alert.start * 1000).toLocaleString()}</span>
                    <span> - End: {new Date(alert.end * 1000).toLocaleString()}</span>
                </Box>

                {alert.description.split("*").map((d, i) => (
                    <Typography
                        variant="body1"
                        component="p"
                        sx={{ color: "text.primary", mt: 1 }}
                        key={i}
                    >
                        {d}
                    </Typography>
                ))}
            </Alert>
        </Collapse>
    )
}
