import { Box } from "@mui/system"
import { useWeather } from "../../../../store/react-query/weather"
import { Daily } from "../../../../types"
import { getCurrentDate, toCapitalize } from "../../../../utils"
import { IconComponent } from "../../../ui/icon"

export default function SevenDay() {
    const daily: Daily[] = useWeather((state) => state.daily).data

    let days = daily.map((item, i) => {
        return i === 0 ? null : (
            <Box
                key={i}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    boxShadow: 1,
                    borderRadius: 1,
                    p: 1,
                    fontSize: "0.8rem",
                }}
            >
                <Box sx={{ height: 40 }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                        alt={item.weather[0].description}
                        style={{ filter: "drop-shadow(0 0 1px grey)" }}
                    />
                </Box>
                <Box component="span">{`${Math.round(item.temp.min)}°/${Math.round(
                    item.temp.max
                )}°`}</Box>
                <Box component="span" sx={{ textAlign: "right", flexGrow: 1 }}>
                    {getCurrentDate(item.dt)}
                </Box>
            </Box>
        )
    })

    return (
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 2 }}>
            <Box
                sx={{
                    display: "flex",
                    boxShadow: 1,
                    borderRadius: 1,
                    p: 1,
                    flexGrow: 1,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        flexGrow: 1,
                    }}
                >
                    <span>Today, {getCurrentDate(daily[0].dt)}</span>
                    {toCapitalize(daily[0].weather[0].description)}
                    <Box component="span">{`Low: ${Math.round(
                        daily[0].temp.min
                    )}° | High: ${Math.round(daily[0].temp.max)}°`}</Box>
                </Box>
                <Box>
                    <IconComponent weather={daily[0].weather} />
                </Box>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    gap: 1,
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}
            >
                {days}
            </Box>
        </Box>
    )
}
