import { useQuery } from "react-query"
import { getLocation } from "../../api/geoplugin"
import { useAppDispatch } from "../redux/hooks"
import locationSlice from "../redux/locationSlice"

export const useIpLocator = (noLocation: boolean) => {
    const dispatch = useAppDispatch()
    const queryInfo = useQuery(["fetchIpLocation", noLocation], getLocation, {
        enabled: noLocation,
        onSuccess: (data) => {
            dispatch(
                locationSlice.actions.setLocationObj({
                    name: data.geoplugin_city,
                    state: data.geoplugin_region,
                    country: data.geoplugin_countryName,
                    coord: {
                        lat: data.geoplugin_latitude,
                        lon: data.geoplugin_longitude,
                    },
                })
            )
        },
    })
    return queryInfo
}
