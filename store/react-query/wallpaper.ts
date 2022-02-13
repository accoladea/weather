import { useContext, useMemo } from "react"
import { useQuery } from "react-query"
import { fetchImage } from "../../api/unsplash"
import imageSlice from "../redux/imageSlice"
import { useWeather } from "./weather"
import { ThemeContext } from "../context/theme-context"
import { shuffled } from "../../utils"
import { Result } from "../../types"

export const useImages = () => {
    const { darkMode: dark } = useContext(ThemeContext)
    const { data: sq } = useWeather((state) => state.daily[0].weather[0].main)

    const { data: results } = useQuery(
        ["fetchImage", sq, dark],
        () => fetchImage(sq, dark),
        {
            enabled: !!sq,
            onSuccess: (results: Result[]) => {
                const images = results.map((image) => image.urls.regular)
                if (dark) imageSlice.actions.setDarkPics(images)
                else imageSlice.actions.setLightPics(images)
            },
            refetchOnWindowFocus: false,
            staleTime: 604800000,
            cacheTime: 604800000,
        }
    )

    return {
        images:
            useMemo(
                () => shuffled(results?.map((item) => item.urls.regular)),
                [results]
            ) ?? [],
    }
}
