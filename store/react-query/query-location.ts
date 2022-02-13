import { useEffect } from "react"
import { useQuery } from "react-query"
import { getGeolocation } from "../../api/openweather"
import { CoordType } from "../../types"

export const useQueryLocation = (searchTerm: string, coord?: CoordType) => {
    const { refetch, data, status } = useQuery(
        ["fetchGeolocation", searchTerm, coord],
        () => getGeolocation(searchTerm, coord),
        {
            enabled: false,
            refetchOnWindowFocus: false,
            staleTime: 604800000, // one week
        }
    )

    useEffect(() => {
        const sleep = setTimeout(refetch, 700)
        return () => clearTimeout(sleep)
    }, [refetch, searchTerm, coord])

    return { data, status }
}
