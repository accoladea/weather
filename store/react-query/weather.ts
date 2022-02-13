import { useAppSelector } from "./../redux/hooks"
import { useQuery } from "react-query"
import { getWeather } from "../../api/openweather"
import { WeatherData } from "../../types"

export const useWeather = (select?: (data: WeatherData) => any) => {
    const coord = useAppSelector((state) => state.location.locationObj?.coord)
    const celsius = useAppSelector((state) => state.location.isCelsius)

    return useQuery(
        ["useWeather", coord, celsius],
        () => getWeather({ coord, celsius }),
        { select, enabled: !!coord, refetchOnWindowFocus: false, staleTime: 600000 }
    )
}
