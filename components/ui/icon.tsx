import { Weather } from "../../types"
import { SnowflakeIcon } from "./icons"

export const IconComponent = ({ weather }: { weather: Weather[] }) => {
    const w = weather[0]
    const snow = w.main === "Snow"
    if (snow) {
        return (
            <SnowflakeIcon
                color="info"
                fontSize="large"
                sx={{ filter: "drop-shadow(0 0 2px black)", mr: 2, mt: 3 }}
            />
        )
    }
    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
            src={`http://openweathermap.org/img/wn/${w.icon}@2x.png`}
            alt={w.description}
            style={{ filter: "drop-shadow(0 0 1px grey)" }}
        />
    )
}
