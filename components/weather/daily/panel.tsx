import { Box } from "@mui/material"
import WeatherDetails from "../current/left/weather-details"
import CustomTable from "./table"
import Circles from "./circles"
import Details from "./details"
import { SelectedType } from "./daily"

export default function Panel({
    selectedItem,
    celsius,
}: {
    selectedItem: SelectedType
    celsius: boolean
}) {
    const unit = celsius ? "°C" : "°F"
    if (!selectedItem) return null

    const { selected: item, date } = selectedItem

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                flex: "1 0 55%",
                bgcolor: "custom.panel",
                borderRadius: 1,
                p: 1,
                overflow: "hidden",
                boxShadow: 1,
            }}
        >
            <WeatherDetails
                icon={item?.weather[0].icon}
                desc={item?.weather[0].description}
            />
            <Circles unit={unit} celsius={celsius} item={item} />

            <Details unit={unit} item={item} date={date} />

            <CustomTable
                day={item.temp.day}
                night={item.temp.night}
                morn={item.temp.morn}
                eve={item.temp.eve}
                title="Temperature"
            />
            <CustomTable
                day={item.feels_like.day}
                night={item.feels_like.night}
                morn={item.feels_like.morn}
                eve={item.feels_like.eve}
                title="Feels Like"
            />
        </Box>
    )
}
