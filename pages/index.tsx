import { Box } from "@mui/material"
import CurrentWeather from "../components/weather/current/current"
import DailyWeather from "../components/weather/daily/daily"
import HourlyWeather from "../components/weather/hourly/hourly"
import SearchField from "../components/search/search-field"
import Alerts from "../components/weather/alerts/alerts"
import { useAppSelector } from "../store/redux/hooks"
import { ReactQueryDevtools } from "react-query/devtools"
import { useIpLocator } from "../store/react-query/location-by-ip"
import { useRetrieveLocation } from "../store/local-storage/retrieve-location"
import { ThemeContext } from "../store/context/theme-context"
import { useContext } from "react"

export default function Home() {
    const { opacity } = useContext(ThemeContext)
    const location = useAppSelector((state) => state.location.locationObj)
    const retrieved = useRetrieveLocation(!location)
    useIpLocator(!location && !retrieved)
    return (
        <>
            <Box
                sx={{
                    maxWidth: "md",
                    mx: "auto",
                    py: 10,
                    display: opacity === 0 ? "none" : "flex",
                    flexDirection: "column",
                    gap: 5,
                    "& > *": {
                        bgcolor: "custom.background",
                        p: 2,
                        borderRadius: 1,
                        width: "inherit",
                    },
                    opacity: "100%",
                }}
            >
                <SearchField />
                <CurrentWeather />
                <Alerts />
                <HourlyWeather />
                <DailyWeather />
            </Box>
            <ReactQueryDevtools initialIsOpen={false} />
        </>
    )
}
